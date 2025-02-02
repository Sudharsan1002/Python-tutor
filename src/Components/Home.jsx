import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, staggerChildren: 0.3 },
    },
  };

 
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-blue-100 text-gray-800 p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-4xl font-bold mb-4">Welcome to AI Python Tutor!</h1>
      <p className="text-lg text-center max-w-2xl mb-6">
        Learn Python in a fun and interactive way with your personal AI tutor.
        Whether you're a beginner or want to practice coding, this tutor is here
        to help!
      </p>

      <div className="space-x-4">
        <NavLink to="/chat">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition" >
            Start Chat
          </button>
        </NavLink>
        <NavLink to="/lessons">
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
            Learn Python
          </button>
        </NavLink>
      </div>
    </motion.div>
  );
};

export default Home;
