import React, { useEffect, useState } from "react";
import emitter from "../../utils/notificationEmitter";
import { useNavigate, useNavigation } from "react-router-dom";

const CreateProject = ({
  resetCreateProjectRequest,
  createProjectRequest,
  isLoading,
  createProjectData,
  createProjectError,
}) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };
  
  const createProject = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    
    if (formData.image) {
      data.append("imageUrl", formData.image);
    }

    await createProjectRequest(data);

    // Trigger the notification and call createProjectRequest
    // emitter.emit("notify", {
    //   message: "Created successfully",
    //   type: "success",
    // });
  };
  useEffect(() => {
    if (createProjectData) {
      emitter.emit("notify", {
        message: `Project ${createProjectData.name} Created successfully`,
        type: "success",
      });
      resetCreateProjectRequest()
      // navigate("/")
    }
  }, [createProjectData]);
  
  useEffect(() => {
    if (createProjectError) {
      console.log("createProjectError");
      console.log(createProjectError);
      
      emitter.emit("notify", {
        message: createProjectError,
        type: "error",
      });
      resetCreateProjectRequest()
    }
  }, [createProjectError]);

  return (
    <main className="pt-16 h-screen bg-gray-100">
      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Create New Project</h2>
            <form className="space-y-4" onSubmit={createProject}>
              {/* Project Name Field */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="name"
                >
                  Project Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter project name"
                />
              </div>

              {/* Project Description Field */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="4"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter project description"
                ></textarea>
              </div>

              {/* Image Upload Field */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="image"
                >
                  Upload Image
                </label>
                <input
                  type="file"
                  id="image"
                  onChange={handleFileChange}
                  className="mt-1 block w-full text-sm text-gray-500 border border-gray-300 rounded-md file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-primary-600 file:text-white hover:file:bg-primary-700"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white rounded-lg px-4 py-2 hover:bg-primary-700 transition duration-300"
                >
                  Create Project
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateProject;
