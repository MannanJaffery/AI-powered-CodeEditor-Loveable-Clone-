"use client"

import React, { useRef, useEffect, useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

import { motion } from "framer-motion";
import { ArrowRight, Plus, Paperclip, ChevronDown } from "lucide-react";

const Home = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [height, setHeight] = useState("2rem");

  const promptCards = [
    {
      title: "Build a Netflix Clone",
      description: "Streaming UI with movies, auth, and watchlists",
      gradient: "from-red-500/10 to-red-500/5",
    },
    {
      title: "Create a Restaurant Website",
      description: "Menu, reservations, and modern landing page",
      gradient: "from-orange-500/10 to-orange-500/5",
    },
    {
      title: "Design a SaaS Dashboard",
      description: "Analytics, charts, and user management",
      gradient: "from-blue-500/10 to-blue-500/5",
    },
    {
      title: "Launch an E-commerce Store",
      description: "Products, cart, checkout, and admin panel",
      gradient: "from-green-500/10 to-green-500/5",
    },
    {
      title: "Build a Portfolio Website",
      description: "Projects, blog, and contact section",
      gradient: "from-purple-500/10 to-purple-500/5",
    },
    {
      title: "Create a Chat Application",
      description: "Realtime chat with auth and notifications",
      gradient: "from-cyan-500/10 to-cyan-500/5",
    },
  ];

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const newHeight = Math.min(textareaRef.current.scrollHeight, 200);
      textareaRef.current.style.height = `${newHeight}px`;
      setHeight(`${newHeight}px`);
    }
  };

  return (
    <>
      <div className="flex min-h-screen bg-white">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <Navbar />

          <div className="flex flex-col items-center flex-1 p-6 pt-[33vh]">
            <div
              className="flex flex-col items-center w-full max-w-3xl mx-auto"
              style={{ marginTop: "-10vh" }}
            >
              <h1 className="text-5xl font-normal mb-12 text-gray-700 tracking-tight">
                What can I help you with?
              </h1>

              <div className="relative w-full">
                <div className="relative bg-white rounded-3xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                  <div className="relative">
                    <textarea
                      ref={textareaRef}
                      onInput={handleInput}
                      rows={2}
                      placeholder="Enter a prompt here"
                      style={{ maxHeight: "10rem" }}
                      className="w-full overflow-y-auto resize-none px-6 py-4 pr-14 rounded-t-3xl bg-transparent placeholder-gray-500 focus:outline-none text-base"
                    />
                    <button className="absolute right-3 bottom-3 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors">
                      <ArrowRight size={20} className="text-gray-700" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between px-4 py-2 border-t border-gray-200">
                    <div className="flex items-center gap-3">

                      <button className="flex items-center gap-1.5 px-3 py-1.5 hover:bg-gray-100 rounded-full transition-colors">
                        <Paperclip size={16} className="text-gray-600" />
                        <span className="text-sm text-gray-600">Attach files</span>
                      </button>
                    </div>

                    <button className="flex items-center gap-1.5 px-3 py-1.5 hover:bg-gray-100 rounded-full transition-colors">
                      <span className="text-sm text-gray-600">Gemini 2.0 Flash</span>
                      <ChevronDown size={16} className="text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;