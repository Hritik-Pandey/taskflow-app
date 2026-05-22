import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="p-10">

        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Total Projects */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">

            <h2 className="text-xl font-semibold text-gray-700">
              Total Projects
            </h2>

            <p className="text-4xl mt-4 text-blue-600 font-bold">
              5
            </p>

            <Link to="/projects">
              <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
                View Projects
              </button>
            </Link>

          </div>

          {/* Total Tasks */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">

            <h2 className="text-xl font-semibold text-gray-700">
              Total Tasks
            </h2>

            <p className="text-4xl mt-4 text-green-600 font-bold">
              18
            </p>

            <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg">
              Manage Tasks
            </button>

          </div>

          {/* Overdue Tasks */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">

            <h2 className="text-xl font-semibold text-gray-700">
              Overdue Tasks
            </h2>

            <p className="text-4xl mt-4 text-red-600 font-bold">
              2
            </p>

            <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg">
              View Overdue
            </button>

          </div>

        </div>

        {/* Quick Actions Section */}
        <div className="mt-12 bg-white p-8 rounded-xl shadow-md">

          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Quick Actions
          </h2>

          <div className="flex flex-wrap gap-4">

            <Link to="/projects">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
                Create Project
              </button>
            </Link>

            <Link to="/login">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg">
                Login
              </button>
            </Link>

            <Link to="/register">
              <button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg">
                Register
              </button>
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;