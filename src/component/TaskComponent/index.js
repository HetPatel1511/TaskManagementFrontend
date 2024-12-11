import React from "react";
import { Link } from "react-router-dom";

function TaskComponent({ task }) {
  const {
    title,
    description,
    projectName,
    assignedTo,
    isCompleted,
    priority,
    deadline,
    createdDate,
  } = task;

  return (
    <div className="p-6 bg-gray-800 border border-gray-700 rounded-2xl text-gray-100 space-y-4 dark:bg-gray-800 dark:border-gray-700">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          {projectName && <div className="text-gray-400 text-sm font-semibold">{projectName}</div>}
          <div className="flex items-center space-x-4 mt-2">
            <span
              className={`text-sm font-medium ${
                isCompleted ? "text-green-400" : "text-red-400"
              }`}
            >
              {isCompleted ? "✔ Completed" : "✖ Pending"}
            </span>
            <div
              className={`px-2 py-1 rounded-full text-xs font-semibold ${
                priority === "high"
                  ? "bg-red-500 text-white"
                  : priority === "medium"
                  ? "bg-yellow-500 text-white"
                  : "bg-blue-500 text-white"
              }`}
            >
              {priority?.charAt(0)?.toUpperCase() + priority?.slice(1)} Priority
            </div>
          </div>
        </div>
        <div className="text-xs text-gray-400">
          Created: {new Date(createdDate).toLocaleDateString()}
        </div>
      </div>

      {/* Title Section */}
      <Link
        to="#"
        className="block font-bold text-primary-400 hover:text-primary-300 text-2xl"
      >
        {title}
      </Link>

      {/* Description Section */}
      <p className="text-sm text-gray-400 truncate-text">
        {description}
      </p>

      {/* Footer Section */}
      <div className="flex justify-between items-center">
        <div className="text-xs text-gray-400">
          Deadline: {new Date(deadline).toLocaleDateString()}
        </div>
        <div className="text-sm text-gray-400">
          Assigned to:{" "}
          {assignedTo ? <Link
            to={`${assignedTo?.id ? `/user/${assignedTo?.id}` : `/`}`}
            className="text-primary-400 hover:text-primary-300"
          >
            {assignedTo?.firstname || "Unassigned"}
          </Link> : "Unassigned"}
        </div>
      </div>
    </div>
  );
}

export default TaskComponent;
