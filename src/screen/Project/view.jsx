import React, { useEffect } from "react";
import Header from "../../component/Header";
import TaskListComponent from "../../component/Containers/TaskListContainer";
import ProjectListContainer from "../../component/Containers/ProjectListContainer";
import { Link, useParams } from "react-router-dom";
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
  // console.log(params);

  useEffect(() => {
    fetchTaskDetailsWatcher({
      projectId: params.id,
    });

    return () => {
      resetFetchTaskDetailsWatcher();
    };
  }, []);

  useEffect(() => {
    console.log(taskError);

    if (taskError) {
      emitter.emit("notify", {
        message: taskError,
        type: "error",
      });
    }
  }, [taskError]);

  return (
    <>
      <Header />
      <main className="pt-16 bg-gray-900 text-gray-100 dark:bg-gray-900">
        <div className="px-8 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Project Title */}

            <div className="bg-gray-800 rounded-3xl shadow-md p-8 mb-8 dark:bg-gray-800 flex flex-col md:flex-row items-start md:items-center">
              {/* Image Section */}
              <div className="md:w-1/3 w-full mb-4 md:mb-0">
                <img
                  src={
                    taskData?.fullImageUrl
                      ? taskData.fullImageUrl
                      : "https://via.placeholder.com"
                  }
                  alt={taskData?.name || "Project Image"}
                  className="w-full h-auto rounded-2xl shadow-lg object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="md:w-2/3 w-full md:pl-8">
                <h1 className="text-4xl font-bold text-white mb-4">
                  Project:{" "}
                  <span className="text-primary-400">{taskData?.name}</span>
                </h1>
                <p className="text-gray-400 mb-6">
                  {taskData?.description || "No description available."}
                </p>

                {/* Owner Details */}
                <div className="bg-gray-700 rounded-xl p-4 shadow-inner">
                  <h2 className="text-2xl font-semibold text-white mb-2">
                    Owner Details
                  </h2>
                  <p className="text-gray-400">
                    <strong>Name:</strong>{" "}
                    <Link
                      to={`/user/${taskData?.owner?.id}`}
                      className="text-primary-400 hover:text-primary-300 transition duration-300"
                    >
                      {taskData?.owner?.firstname && taskData?.owner?.lastname
                        ? `${taskData.owner.firstname} ${taskData.owner.lastname}`
                        : taskData?.owner?.firstname
                        ? taskData.owner.firstname
                        : "N/A"}
                    </Link>
                  </p>

                  <p className="text-gray-400">
                    <strong>Email:</strong> {taskData?.owner?.email || "N/A"}
                  </p>
                  <p className="text-gray-400">
                    <strong>Role:</strong>{" "}
                    {taskData?.owner?.role?.role || "N/A"}
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Stats Section */}
              <div className="lg:col-span-1">
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
                      <h4 className="font-bold text-3xl text-yellow-100">20</h4>
                      <p className="text-sm text-gray-200">Tasks finished</p>
                    </div>
                    <div className="bg-blue-600 p-4 rounded-2xl shadow-sm">
                      <h4 className="font-bold text-3xl text-blue-100">5.5</h4>
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

              {/* Tasks Section */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Your Tasks
                </h2>
                {taskData?.tasks && (
                  <div className="space-y-6">
                    {/* Task List */}
                    <TaskListComponent tasks={taskData?.tasks} />
                  </div>
                )}
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
