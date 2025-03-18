import { Link } from "react-router-dom";

import { IoMdSunny } from "react-icons/io";

function Navbar() {
  return (
    <div>
      <div className="transition-transform duration-300 hover:scale-105 hover:border-red-500 hover:bg-cyan-500 mt-5 ml-5 bg-white shadow-md rounded-lg p-4 py-2 border inline-block">
        <Link
          to="/"
          className="text-gray-700 font-semibold text-lg hover:text-white transition duration-300"
        >
          Home
        </Link>
      </div>

      <Link to="About"></Link>
      <Link to="Contact"></Link>
    </div>
  );
}

export default Navbar;
