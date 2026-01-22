import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-16 px-6 flex items-center justify-between bg-white border-b border-gray-200">
      
      {/* Left: Logo / Brand */}
      <div className="flex items-center gap-2">
        <span className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
          Robocode
        </span>
      </div>

      {/* Right: Profile */}
      <div className="flex items-center">
        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          className="w-9 h-9 rounded-full object-cover border border-gray-300 cursor-pointer"
        />
      </div>

    </nav>
  );
};

export default Navbar;
