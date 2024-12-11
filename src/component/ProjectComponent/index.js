import React from "react";
import { Link } from "react-router-dom";

function ProjectComponent({ project }) {
  return (
    <div className="p-5 bg-gray-800 border border-gray-700 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/project/${project?.id}`}>
        {project?.fullImageUrl ? (
          <img
            src={project?.fullImageUrl}
            alt="Project Thumbnail"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
        ) : (
          <div className="w-full h-48 bg-gray-700 rounded-lg mb-4"></div>
        )}
      </Link>
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-gray-400">
          <span>Owner: {`${project?.owner?.firstname} ${project?.owner?.lastname}`}</span>
          <span>{project?.createdAt}</span>
        </div>
        <h3 className="text-xl font-semibold text-white">
          <Link
            to={`/project/${project?.id}`}
            className="hover:text-primary-400 transition-colors dark:hover:text-primary-300"
          >
            {project?.name || "Unnamed Project"}
          </Link>
        </h3>
        <p className={`text-sm ${project?.description ? "text-gray-300" : "text-gray-500"} line-clamp-2`}>
          {project?.description || "No description available"}
        </p>
      </div>
    </div>
  );
}

export default ProjectComponent;
