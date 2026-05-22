import { useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Tasks() {

  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const createTask = async (e) => {
    e.preventDefault();

    try {

      const token = localStorage.getItem("token");

      await API.post(
        "/tasks",
        task,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Task Created Successfully");

      setTask({
        title: "",
        description: "",
        status: "Pending",
      });

    } catch (error) {

      alert("Error Creating Task");

    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-10">

        <div className="bg-white p-8 rounded-xl shadow-md max-w-xl mx-auto">

          <h1 className="text-3xl font-bold mb-6 text-green-600">
            Create Task
          </h1>

          <form
            onSubmit={createTask}
            className="space-y-4"
          >

            <input
              type="text"
              name="title"
              placeholder="Task Title"
              value={task.title}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              required
            />

            <textarea
              name="description"
              placeholder="Task Description"
              value={task.description}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              rows="5"
              onChange={handleChange}
            />

            <select
              name="status"
              value={task.status}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            >

              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>

            </select>

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg w-full"
            >
              Create Task
            </button>

          </form>

        </div>

      </div>
    </>
  );
}

export default Tasks;