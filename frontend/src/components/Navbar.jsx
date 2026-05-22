import { Link } from "react-router-dom";

function Navbar() {

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center shadow-md">

      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-wide">
        TaskFlow
      </h1>

      {/* Navigation */}
      <div className="flex gap-4 flex-wrap">

        <Link to="/dashboard">
          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
            Dashboard
          </button>
        </Link>

        <Link to="/projects">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
            Projects
          </button>
        </Link>

        <Link to="/tasks">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
            Tasks
          </button>
        </Link>

        <Link to="/login">
          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
            Login
          </button>
        </Link>

        <Link to="/register">
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
            Register
          </button>
        </Link>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;