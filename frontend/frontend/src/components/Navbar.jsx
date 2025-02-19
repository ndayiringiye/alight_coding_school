import { Link } from "react-router";
const Navbar = () => {
  return (
    <nav className="bg-[#F3F1eD] px-3 py-6">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl"> Alight Coding School</h1>
        <div className="flex gap-5">
          <Link
            to="/login"
            className="px-6 py-2 text-blue-800 rounded-md border border-blue-800 rounded-sm hover:bg-blue-500 hover:text-white"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-blue-800 rounded-md text-white px-6 py-2 hover:bg-white hover:text-blue-800 hover:border rounded-sm"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
