import React, { useEffect, useState } from 'react'
import Chatbot from './Components/Chatbot'
import Lessons from './Components/Lessons';
import { NavLink, Route, Router, Routes } from 'react-router';
import Home from './Components/Home';
import Quiz from './Components/Quiz';
import Navbar from './Components/Navbar';
import Settings from './Components/Settings';

const App = () => {
  const [apiKey, setApiKey] = useState("")

    useEffect(() => {
      const savedKey = localStorage.getItem("geminiApiKey");
      if (savedKey) setApiKey(savedKey);
    }, []);
      
      const handleKeyChange = (e) => {
          const newKey = e.target.value
          setApiKey(newKey)
          localStorage.setItem("geminiApiKey", newKey)
      }

  return (
    <div className='container mx-auto p-4 rounded-2xl'>
      {/* <div className="bg-gray-800 text-white p-4 flex justify-center space-x-6">
        <NavLink to="/" className="hover:text-yellow-400">
          🏠 Home
        </NavLink>
        <NavLink to="/lessons" className="hover:text-yellow-400">
          📚 Learn
        </NavLink>
        <NavLink to="/chat" className="hover:text-yellow-400">
          🤖 Chat
        </NavLink>
        <NavLink to="/settings" className="hover:text-yellow-400">
          ⚙️ Settings
        </NavLink>
        <NavLink to="/quiz" className="hover:text-yellow-400">
          🎯 Quiz
        </NavLink>
      </div> */}

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/chat" element={<Chatbot apikey={apiKey} />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App