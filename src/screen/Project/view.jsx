import React, { useEffect, useState } from "react";
import Header from "../../component/Header";
import TaskListComponent from "../../component/Containers/TaskListContainer";
import ProjectListContainer from "../../component/Containers/ProjectListContainer";
import { Link, useParams, useSearchParams } from "react-router-dom";
import emitter from "../../utils/notificationEmitter";

function Project({
  taskIsLoading,
  taskData,
  taskError,
  resetFetchTaskDetailsWatcher,
  fetchTaskDetailsWatcher,
  setTaskDetailsSuccess,
  setTaskDetailsFailure,
}) {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [projectData, setProjectData] = useState();
  const [tasksData, setTasksData] = useState();

  useEffect(() => {
    fetchTaskDetailsWatcher({
      projectId: params.id,
    });

    return () => {
      resetFetchTaskDetailsWatcher();
    };
  }, []);

  useEffect(() => {
    if (taskData && !taskError) {
      const { tasks, ...projData } = taskData;
      setProjectData(projData);
      setTasksData(tasks);
    }
  }, [taskData]);

  useEffect(() => {
    console.log(taskError);

    if (taskError) {
      emitter.emit("notify", {
        message: taskError,
        type: "error",
      });
    }
  }, [taskError]);

  useEffect(() => {
    let data = {};
    searchParams.forEach((value, key) => {
      if (key == "deadlineGt") {
        data = { ...data, deadline: { ...data.deadline, gt: value } };
      } else if (key == "deadlineLt") {
        data = { ...data, deadline: { ...data.deadline, lt: value } };
      } else {
        data = { ...data, [key]: value };
      }
    });

    fetchTaskDetailsWatcher({
      projectId: params.id,
      ...data,
    });
  }, [searchParams]);

  return (
    <>
      <Header />
      <main className="pt-16 bg-gray-900 text-gray-100 dark:bg-gray-900">
        <div className="px-8 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Project Title */}

            <div className="bg-gray-800 rounded-3xl shadow-md p-8 mb-8 dark:bg-gray-800 flex flex-col lg:flex-row items-start lg:items-center">
              {/* Image Section */}
              <div className="lg:w-1/3 w-full mb-4 lg:mb-0">
                {projectData?.fullImageUrl ? (
                  <img
                    src={projectData?.fullImageUrl}
                    alt={projectData?.name || "Project Image"}
                    className="w-full h-auto rounded-2xl shadow-lg object-cover"
                  />
                ) : (
                  <img
                    src="https://via.placeholder.com"
                    alt={projectData?.name || "Project Image"}
                    className="w-full h-auto rounded-2xl shadow-lg object-cover"
                  />
                )}
              </div>

              {/* Content Section */}
              <div className="md:w-2/3 w-full md:pl-8">
                <h1 className="text-4xl font-bold text-white mb-4">
                  Project:{" "}
                  <span className="text-primary-400">{projectData?.name}</span>
                </h1>
                <p className="text-gray-400 mb-6">
                  {projectData?.description || "No description available."}
                </p>

                {/* Owner Details */}
                <div className="bg-gray-700 rounded-xl p-4 shadow-inner">
                  <h2 className="text-2xl font-semibold text-white mb-2">
                    Owner Details
                  </h2>
                  <p className="text-gray-400">
                    <strong>Name:</strong>{" "}
                    <Link
                      to={`/user/${projectData?.owner?.id}`}
                      className="text-primary-400 hover:text-primary-300 transition duration-300"
                    >
                      {projectData?.owner?.firstname &&
                      projectData?.owner?.lastname
                        ? `${projectData.owner.firstname} ${projectData.owner.lastname}`
                        : projectData?.owner?.firstname
                        ? projectData.owner.firstname
                        : "N/A"}
                    </Link>
                  </p>

                  <p className="text-gray-400">
                    <strong>Email:</strong> {projectData?.owner?.email || "N/A"}
                  </p>
                  <p className="text-gray-400">
                    <strong>Role:</strong>{" "}
                    {projectData?.owner?.role?.role || "N/A"}
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 overflow-visible">
              {/* Stats Section */}
              <div>
                <div className="lg:col-span-1 sticky top-24">
                  <h2 className="text-2xl font-semibold text-white mb-4">
                    Your Stats
                  </h2>
                  <div className="space-y-6">
                    {/* Welcome Message */}
                    <div className="p-6 bg-gradient-to-r from-green-500 to-green-700 rounded-2xl shadow-md text-white">
                      <h3 className="font-bold text-lg">Good day, Kristin</h3>
                      <p className="mt-1">Ready to tackle today’s tasks?</p>
                      <button
                        type="button"
                        className="mt-4 bg-white text-green-700 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 transition duration-200"
                      >
                        Start trackin
                      </button>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-yellow-600 p-4 rounded-2xl shadow-sm">
                        <h4 className="font-bold text-3xl text-yellow-100">
                          20
                        </h4>
                        <p className="text-sm text-gray-200">Tasks finished</p>
                      </div>
                      <div className="bg-blue-600 p-4 rounded-2xl shadow-sm">
                        <h4 className="font-bold text-3xl text-blue-100">
                          5.5
                        </h4>
                        <p className="text-sm text-gray-200">Tracked hours</p>
                      </div>
                    </div>

                    {/* Daily Plan */}
                    <div className="p-6 bg-purple-700 rounded-2xl shadow-md text-purple-100">
                      <h4 className="font-semibold text-lg">Your daily plan</h4>
                      <p className="text-sm mt-1">5 of 8 tasks completed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tasks Section */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Your Tasks
                </h2>
                {/* {taskData?.tasks && ( */}
                <div className="space-y-6">
                  {/* Task List */}
                  <TaskListComponent tasks={tasksData?.data} />
                </div>
                {/* )} */}
              </div>
              {/* Project List */}
              {/* <h3 className="text-xl font-semibold text-gray-400 mt-8">
                    Related Projects
                  </h3> */}
              {/* <ProjectListContainer projects={[1, 2, 3, 4]} /> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Project;
