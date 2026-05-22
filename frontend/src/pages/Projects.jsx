import { useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Projects() {

  const [project, setProject] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const createProject = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await API.post(
        "/projects",
        project,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Project Created Successfully");

      setProject({
        title: "",
        description: "",
      });

    } catch (error) {
      alert("Error Creating Project");
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-10">

        <div className="bg-white p-8 rounded-xl shadow-md max-w-xl mx-auto">

          <h1 className="text-3xl font-bold mb-6 text-blue-600">
            Create Project
          </h1>

          <form
            onSubmit={createProject}
            className="space-y-4"
          >

            <input
              type="text"
              name="title"
              placeholder="Project Title"
              value={project.title}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              required
            />

            <textarea
              name="description"
              placeholder="Project Description"
              value={project.description}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              rows="5"
              required
            />

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full"
            >
              Create Project
            </button>

          </form>

        </div>

      </div>
    </>
  );
}

export default Projects;