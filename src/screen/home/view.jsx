import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../component/Header";
import ProjectListContainer from "../../component/Containers/ProjectListContainer";

function Home({
  fetchProjectDetailsWatcher,
  isLoading,
  projectData,
  projectError,
}) {
  useEffect(() => {
    if (!projectData) {
      fetchProjectDetailsWatcher();
    }
  }, [projectData]);

  return (
    <>
      <Header />
      <main className="pt-16 bg-gray-900 text-gray-100 min-h-screen dark:bg-gray-900">
        <div className="px-8 py-12">
          <div className="max-w-7xl mx-auto bg-gray-800 rounded-3xl shadow-lg p-8 dark:bg-gray-800">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Projects</h2>
              {/* Create New Project Button */}
              <Link
                to="/create-project"
                className="inline-block bg-primary-600 text-white rounded-lg px-6 py-3 font-semibold hover:bg-primary-700 transition duration-200 dark:bg-primary-500 dark:hover:bg-primary-600"
              >
                + Create New Project
              </Link>
              <div className="space-y-6 mt-8">
                {projectData && (
                  <ProjectListContainer projects={projectData} />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
