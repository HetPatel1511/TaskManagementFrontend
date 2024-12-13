import React, { useState } from "react";
import TaskComponent from "../../TaskComponent";
import { useSearchParams } from "react-router-dom";

function TaskListContainer({ tasks, filterByPriority, filterByDeadline, filterByStatus }) {

  const [searchParams, setSearchParams] = useSearchParams();
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    if (value) {
      searchParams.set(name, value);
    } else {
      searchParams.delete(name);
    }
    setSearchParams(searchParams);
  };
  
  const handlePageChange = (page) => {
    searchParams.set("page", page);
    setSearchParams(searchParams);
  };

  // Filtered tasks based on the criteria
  // const filteredTasks = tasks.filter((task) => {
  //   const matchesAssignedTo =
  //     filters.assignedTo === "" || task?.assignedTo?.firstname?.includes(filters?.assignedTo);
  //   const matchesPriority =
  //     filters.priority === "" || task?.priority?.toLowerCase() === filters?.priority.toLowerCase();
  //   const matchesIsCompleted =
  //     filters.isCompleted === "" || String(task?.isCompleted) === filters?.isCompleted;
  //   const matchesDeadline =
  //     filters.deadline === "" ||
  //     new Date(task?.deadline).toLocaleDateString() ===
  //       new Date(filters?.deadline).toLocaleDateString();

  //   return matchesAssignedTo && matchesPriority && matchesIsCompleted && matchesDeadline;
  // });

  return (
    <div>
      {/* Filter Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-4 bg-gray-900 rounded-lg mb-6">
        {/* Filter by Task Title */}
        <div className="lg:col-span-1">
          <label className="block text-gray-300 mb-2" htmlFor="title">
            Filter by Task Title
          </label>
          <input
            id="title"
            type="text"
            name="title"
            placeholder="Search by Task Title"
            value={searchParams?.get("title") ? searchParams?.get("title") : ""}
            onChange={handleFilterChange}
            className="px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 w-full"
          />
        </div>

        {/* Filter by Assigned User */}
        <div className="lg:col-span-1">
          <label className="block text-gray-300 mb-2" htmlFor="assignedTo">
            Filter by Assigned User
          </label>
          <input
            id="assignedTo"
            type="text"
            name="assignedTo"
            placeholder="Search by Assigned User"
            value={
              searchParams?.get("assignedTo")
                ? searchParams?.get("assignedTo")
                : ""
            }
            onChange={handleFilterChange}
            className="px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 w-full"
          />
        </div>

        {/* Filter by Priority */}
        <div className="lg:col-span-1">
          <label className="block text-gray-300 mb-2" htmlFor="priority">
            Filter by Priority
          </label>
          <select
            id="priority"
            name="priority"
            value={
              searchParams?.get("priority") ? searchParams?.get("priority") : ""
            }
            onChange={handleFilterChange}
            className="px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 w-full"
          >
            <option value="">Select Priority</option>
            {tasks?.priorityValues?.map((priority) => (
              <option value={priority}>
                {priority.charAt(0).toUpperCase() + priority.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Filter by Status */}
        <div className="lg:col-span-1">
          <label className="block text-gray-300 mb-2" htmlFor="isCompleted">
            Filter by Status
          </label>
          <select
            id="isCompleted"
            name="isCompleted"
            value={
              searchParams?.get("isCompleted")
                ? searchParams?.get("isCompleted")
                : ""
            }
            onChange={handleFilterChange}
            className="px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 w-full"
          >
            <option value="">Select Status</option>
            <option value="true">Completed</option>
            <option value="false">Pending</option>
          </select>
        </div>

        {/* Filter by Deadline (Greater Than) */}
        <div className="lg:col-span-1">
          <label className="block text-gray-300 mb-2" htmlFor="deadlineGt">
            Filter by Deadline (After)
          </label>
          <input
            id="deadlineGt"
            type="date"
            name="deadlineGt"
            value={
              searchParams?.get("deadlineGt")
                ? searchParams?.get("deadlineGt")
                : ""
            }
            onChange={handleFilterChange}
            className="px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 w-full"
          />
        </div>

        {/* Filter by Deadline (Less Than) */}
        <div className="lg:col-span-1">
          <label className="block text-gray-300 mb-2" htmlFor="deadlineLt">
            Filter by Deadline (Before)
          </label>
          <input
            id="deadlineLt"
            type="date"
            name="deadlineLt"
            value={
              searchParams?.get("deadlineLt")
                ? searchParams?.get("deadlineLt")
                : ""
            }
            onChange={handleFilterChange}
            className="px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 w-full"
          />
        </div>
      </div>

      {/* Task List */}
      <div className="space-y-6">
        {tasks?.data?.length > 0 ? (
          tasks?.data?.map((task) => (
            <TaskComponent key={task.id} task={task} />
          ))
        ) : (
          <p className="text-center text-gray-400">
            No tasks match your filters.
          </p>
        )}
      </div>
      {tasks?.metadata && tasks?.metadata?.pageCount > 1 && (
        <div className="flex items-center justify-center mt-6 space-x-2">
          {/* Previous Button */}
          <button
            className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!tasks?.metadata?.hasPreviousPage}
            onClick={() => handlePageChange(tasks?.metadata?.page - 1)}
          >
            Previous
          </button>

          {/* Page Numbers */}
          {Array.from(
            { length: tasks?.metadata?.pageCount }, // Replace with the total number of pages
            (_, index) => index + 1
          ).map((page) => (
            <button
              key={page}
              className={`px-3 py-2 rounded-md ${
                tasks?.metadata?.page === page
                  ? "bg-primary-600 text-white"
                  : "bg-gray-700 text-gray-300"
              } hover:bg-gray-600`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}

          {/* Next Button */}
          <button
            className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!tasks?.metadata?.hasNextPage}
            onClick={() => handlePageChange(tasks?.metadata?.page + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default TaskListContainer;
