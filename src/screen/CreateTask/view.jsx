import React, { useState, useEffect } from "react";
import emitter from "../../utils/notificationEmitter";

const CreateTask = ({ projects, users }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedProject, setSelectedProject] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [deadline, setDeadline] = useState("");

  const showNotification = (message, type) => {
    emitter.emit("notify", {
      message: "Task created successfully",
      type: ""
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically dispatch an action to create a task
    showNotification();
  };

  return (
    <main className="pt-16 min-h-screen bg-gray-100">
      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Create New Task</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Task Title Field */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter task title"
                  required
                />
              </div>

              {/* Task Description Field */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  rows="4"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter task description"
                  required
                ></textarea>
              </div>

              {/* Project Dropdown */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="project"
                >
                  Project
                </label>
                <select
                  id="project"
                  value={selectedProject}
                  onChange={(e) => setSelectedProject(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                >
                  <option value="">Select a project</option>
                  {projects?.map((project) => (
                    <option key={project.id} value={project.id}>
                      {project.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Assigned To Dropdown */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="assignedTo"
                >
                  Assigned To
                </label>
                <select
                  id="assignedTo"
                  value={assignedTo}
                  onChange={(e) => setAssignedTo(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                >
                  <option value="">Select a user</option>
                  {users?.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Deadline Field */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="deadline"
                >
                  Deadline
                </label>
                <input
                  type="date"
                  id="deadline"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white rounded-lg px-4 py-2 hover:bg-primary-700 transition duration-300"
                >
                  Create Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateTask;
