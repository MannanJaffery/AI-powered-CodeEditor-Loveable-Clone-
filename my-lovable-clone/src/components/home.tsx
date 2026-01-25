"use client";

import React, { useRef, useEffect, useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { ArrowRight, Paperclip, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [height, setHeight] = useState("2rem");
  const [userInput, setUserInput] = useState("");

  const phrases = [
    "a Netflix clone using React and Tailwind CSS",
    "a chrome extension...",
    "a coffee shop UI with menu and ordering",
    "an e-commerce store with products and cart",
    "a portfolio website with projects and contact",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserInput(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const newHeight = Math.min(textareaRef.current.scrollHeight, 200);
      textareaRef.current.style.height = `${newHeight}px`;
      setHeight(`${newHeight}px`);
    }
  };

  // Typewriter effect
  useEffect(() => {
    let timer: NodeJS.Timeout;

    const currentPhrase = phrases[index % phrases.length];

    if (!isDeleting) {
      if (text.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setText(currentPhrase.slice(0, text.length + 1));
        }, 80);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 1000);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(currentPhrase.slice(0, text.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, phrases]);

  return (
    <div className="flex min-h-screen bg-white overflow-hidden">
      <Sidebar />

      <div
        className="flex-1 flex flex-col min-h-screen relative"
        style={{
          backgroundImage: `url('/bg2.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.8,
        }}
      >
        <Navbar />

        <div className="flex flex-col items-center flex-1 p-6 pt-[33vh]">
          <div
            className="flex flex-col items-center w-full max-w-3xl mx-auto"
            style={{ marginTop: "-10vh" }}
          >
            <h1 className="text-5xl font-normal mb-12 text-gray-700 tracking-tight opacity-100">
              What can I help you with?
            </h1>

            {/* Prompt Box */}
            <div className="relative w-full">
              <div className="relative bg-white rounded-3xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                <div className="relative">
                  {/* Animated placeholder - only shows when userInput is empty */}
                  {!userInput && (
                    <div
                      className="absolute top-0 left-0 w-full h-full px-6 py-4 pr-14 text-gray-400 pointer-events-none select-none overflow-hidden"
                      style={{ fontSize: "1rem" }}
                    >
                      <span>Ask RoboCode to create </span>
                      <AnimatePresence>
                        {text.split("").map((char, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.05 }}
                          >
                            {char}
                          </motion.span>
                        ))}
                        <motion.span
                          className="inline-block"
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ repeat: Infinity, duration: 1 }}
                        >
                          |
                        </motion.span>
                      </AnimatePresence>
                    </div>
                  )}

                  {/* Actual textarea */}
                  <textarea
                    ref={textareaRef}
                    value={userInput}
                    onChange={handleInput}
                    rows={2}
                    placeholder=""
                    style={{ maxHeight: "10rem" }}
                    className="w-full overflow-y-auto resize-none px-6 py-4 pr-14 rounded-t-3xl bg-transparent focus:outline-none text-base"
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
  );
};

export default Home;