import React from "react";
import { Menu } from "lucide-react";
const Sidebar = () => {
  const chats = [
    "Food Ordering Website",
    "Restaurant Landing Page",
    "Coffee Shop UI",
    "E-commerce Store",
        "Food Ordering Website",
    "Restaurant Landing Page",
  
  ];

  return (
    <aside className="w-60 h-screen bg-white border-r border-gray-200 flex flex-col">
      
      {/* Top Actions */}
      <div className="p-3 space-y-1">
       <div className="flex items-center justify-between pb-2 border-b border-gray-200">
  <img src="logo.jpg" className="w-8" alt="Logo" />
  <Menu className="w-6 h-6 cursor-pointer text-gray-600" />
</div>

        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition">
          <span>➕</span>
          New Chat
        </button>

        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition">
          <span>🔍</span>
          Search Chats
        </button>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-2" />

      {/* Chats */}
      <div className="flex-1 overflow-y-auto px-2">
        <p className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
          Your Chats
        </p>

        <div className="space-y-1">
          {chats.map((chat, index) => (
            <div
              key={index}
              className="px-3 py-2 rounded-md text-sm text-gray-800 cursor-pointer hover:bg-gray-100 transition truncate"
            >
              {chat}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 p-3">
        
        {/* Upgrade */}
        <button className="w-full mb-3 px-3 py-2 text-sm rounded-md bg-gray-100 hover:bg-gray-200 transition font-medium">
          Upgrade Plan
        </button>

        {/* User */}
        <div className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition">
          <img
            src="https://i.pravatar.cc/32"
            alt="User"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="text-sm font-medium text-gray-800 truncate">
            Abdul Mannan
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
