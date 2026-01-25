import React from "react";
import { Sparkles, Bell } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full h-16 px-4 flex items-center justify-between bg-gradient-to-r from-purple-50 via-white to-purple-50 border-b border-purple-100 backdrop-blur-sm">
      
      {/* Left: Logo / Brand */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-sm">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
          Robocode
        </span>
      </div>

      {/* Right: Actions & Profile */}
      <div className="flex items-center gap-3">
        
        {/* Notification Bell */}
        <button className="relative p-2 rounded-full hover:bg-purple-100 transition-colors">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-purple-500 rounded-full ring-2 ring-white"></span>
        </button>

        {/* Upgrade Button */}
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm font-medium hover:from-purple-600 hover:to-purple-700 transition-all shadow-sm hover:shadow-md">
          <Sparkles className="w-4 h-4" />
          <span>Upgrade</span>
        </button>

        {/* Profile Avatar Only */}
        <div className="relative group cursor-pointer">
          <img
            src="https://i.pravatar.cc/40"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover ring-2 ring-purple-200 group-hover:ring-purple-400 transition-all"
          />
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full ring-2 ring-white"></div>
        </div>

      </div>

    </nav>
  );
};

export default Navbar;