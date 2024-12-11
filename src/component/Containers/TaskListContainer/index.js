import React, { useState } from "react";
import TaskComponent from "../../TaskComponent";

function TaskListContainer({ tasks, filterByPriority, filterByDeadline, filterByStatus }) {
  const [filters, setFilters] = useState({
    assignedTo: "",
    priority: "",
    isCompleted: "",
    deadline: "",
  });

  // Handle input change for filters
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // Filtered tasks based on the criteria
  const filteredTasks = tasks.filter((task) => {
    const matchesAssignedTo =
      filters.assignedTo === "" || task?.assignedTo?.firstname?.includes(filters?.assignedTo);
    const matchesPriority =
      filters.priority === "" || task?.priority?.toLowerCase() === filters?.priority.toLowerCase();
    const matchesIsCompleted =
      filters.isCompleted === "" || String(task?.isCompleted) === filters?.isCompleted;
    const matchesDeadline =
      filters.deadline === "" ||
      new Date(task?.deadline).toLocaleDateString() ===
        new Date(filters?.deadline).toLocaleDateString();

    return matchesAssignedTo && matchesPriority && matchesIsCompleted && matchesDeadline;
  });

  return (
    <div>
      {/* Filter Bar */}
      <div className="flex flex-wrap gap-4 p-4 bg-gray-900 rounded-lg mb-6">
        <input
          type="text"
          name="assignedTo"
          placeholder="Filter by Assigned User"
          value={filters.assignedTo}
          onChange={handleFilterChange}
          className="px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 w-full lg:w-1/4"
        />
        <select
          name="priority"
          value={filters.priority}
          onChange={handleFilterChange}
          className="px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 w-full lg:w-1/4"
        >
          <option value="">Filter by Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <select
          name="isCompleted"
          value={filters.isCompleted}
          onChange={handleFilterChange}
          className="px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 w-full lg:w-1/4"
        >
          <option value="">Filter by Status</option>
          <option value="true">Completed</option>
          <option value="false">Pending</option>
        </select>
        <input
          type="date"
          name="deadline"
          value={filters.deadline}
          onChange={handleFilterChange}
          className="px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 w-full lg:w-1/4"
        />
      </div>

      {/* Task List */}
      <div className="space-y-6">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => <TaskComponent key={task.id} task={task} />)
        ) : (
          <p className="text-center text-gray-400">No tasks match your filters.</p>
        )}
      </div>
    </div>
  );
}

export default TaskListContainer;
