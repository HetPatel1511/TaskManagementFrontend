import React from "react";
import ProjectComponent from "../../ProjectComponent";

const ProjectListContainer = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {projects?.map((project, index) => (
        <ProjectComponent key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectListContainer;
