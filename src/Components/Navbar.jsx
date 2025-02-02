import React from "react";
import { LiaPython } from "react-icons/lia";
import { SiPythonanywhere } from "react-icons/si";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-800 px-2">
      <div className="text-5xl font-bold font-serif text-white "><LiaPython/></div>
      <div className=" text-white p-4 flex justify-center space-x-6">
        <NavLink to="/" className="hover:text-yellow-400">
          🏠 Home
        </NavLink>
        <NavLink to="/lessons" className="hover:text-yellow-400">
          📚 Learn
        </NavLink>
        <NavLink to="/chat" className="hover:text-yellow-400">
          🤖 Chat
        </NavLink>

        <NavLink to="/quiz" className="hover:text-yellow-400">
          🎯 Quiz
        </NavLink>
      </div>
      <div>
        <NavLink to="/settings" className="hover:text-yellow-400 text-white">
          ⚙️ Settings
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
