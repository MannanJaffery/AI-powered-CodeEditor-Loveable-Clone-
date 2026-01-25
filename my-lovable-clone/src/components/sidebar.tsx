"use client";

import React, { useState } from "react";
import { Menu, Plus, Search, Sparkles, Settings, HelpCircle, ChevronRight } from "lucide-react";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(prev => !prev);
  };

  const chats = [
    { title: "Food Ordering Website", time: "2 hours ago" },
    { title: "Restaurant Landing Page", time: "Yesterday" },
    { title: "Coffee Shop UI", time: "Yesterday" },
    { title: "E-commerce Store", time: "2 days ago" },
    { title: "Portfolio Website", time: "3 days ago" },
    { title: "Dashboard Design", time: "1 week ago" },
  ];

  return (
    <>
      {/* Collapsed Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen bg-gradient-to-b from-purple-50 to-white border-r border-purple-100 transition-all duration-300 ease-in-out z-40 flex flex-col ${
          isExpanded ? "w-72" : "w-16"
        }`}
      >
        {/* Header */}
        <div className="p-3 flex items-center justify-between border-b border-purple-100">
          {isExpanded ? (
            <>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-gray-800">ChatAI</span>
              </div>
              <button
                onClick={toggleSidebar}
                className="p-1.5 rounded-lg hover:bg-purple-100 transition-colors"
              >
                <Menu className="w-5 h-5 text-gray-600 cursor-pointer" />
              </button>
            </>
          ) : (
            <button
              onClick={toggleSidebar}
              className="w-full p-2 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <Menu className="w-5 h-5 text-gray-600 mx-auto cursor-pointer" />
            </button>
          )}
        </div>

        {/* New Chat Button */}
        <div className="p-3">
          <button
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 transition-all shadow-sm ${
              !isExpanded ? "justify-center" : ""
            }`}
            title={!isExpanded ? "New Chat" : ""}
          >
            <Plus className="w-5 h-5" />
            {isExpanded && <span className="font-medium">New Chat</span>}
          </button>
        </div>

        {/* Search */}
        {isExpanded && (
          <div className="px-3 pb-3">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search chats..."
                className="w-full pl-9 pr-3 py-2 rounded-lg bg-purple-50 border border-purple-100 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all"
              />
            </div>
          </div>
        )}

        {/* Divider */}
        <div className="border-t border-purple-100" />

        {/* Chats List */}
        <div className="flex-1 overflow-y-auto px-2 py-3">
          {isExpanded && (
            <p className="px-3 py-2 text-xs font-semibold text-purple-600 uppercase tracking-wide">
              Recent Chats
            </p>
          )}

          <div className="space-y-1">
            {chats.map((chat, index) => (
              <div
                key={index}
                className={`group relative px-3 py-2.5 rounded-lg text-sm text-gray-700 cursor-pointer hover:bg-purple-100 transition-all ${
                  !isExpanded ? "flex justify-center" : ""
                }`}
                title={!isExpanded ? chat.title : ""}
              >
                {isExpanded ? (
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-800 truncate">
                        {chat.title}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        {chat.time}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                  </div>
                ) : (
                  <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-purple-100 p-3 space-y-2">
          {/* Quick Actions */}
          {isExpanded ? (
            <>
              
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-purple-100 transition-colors">
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </button>
            </>
          ) : (
            <>
              <button
                className="w-full p-2 rounded-lg hover:bg-purple-100 transition-colors"
                title="Help & Support"
              >
                <HelpCircle className="w-5 h-5 text-gray-600 mx-auto" />
              </button>
              <button
                className="w-full p-2 rounded-lg hover:bg-purple-100 transition-colors"
                title="Settings"
              >
                <Settings className="w-5 h-5 text-gray-600 mx-auto" />
              </button>
            </>
          )}

          {/* User Profile */}
          <div className={`flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-purple-100 cursor-pointer transition-colors ${!isExpanded ? "justify-center" : ""}`}>
            <img
              src="https://i.pravatar.cc/32"
              alt="User"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-purple-200"
            />
            {isExpanded && (
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-800 truncate">
                  Abdul Mannan
                </div>
                <div className="text-xs text-purple-600">Free Plan</div>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content Spacer */}
      <div className={`transition-all duration-300 ${isExpanded ? "ml-72" : "ml-16"}`}>
        {/* Your main content goes here */}
      </div>
    </>
  );
};

export default Sidebar;