import { div } from "framer-motion/client";
import React, { useState, useEffect } from "react";

const Settings = () => {
  const [apiKey, setApiKey] = useState("");

useEffect(() => {
  if (typeof window !== "undefined") {
    
    const savedKey = localStorage.getItem("geminiApiKey");
    if (savedKey) {
      setApiKey(savedKey);
    } else {
      setApiKey("your-default-api-key"); 
    }
  }
}, []);


  const handleKeyChange = (e) => {
    const newKey = e.target.value;
    setApiKey(newKey);
    localStorage.setItem("geminiApiKey", newKey);
  };

  return (
    <div className="">
      <div className="  flex flex-col justify-around items-center p-6 bg-gray-400">
        <h1 className="text-3xl font-bold mb-4">⚙️ API Key Settings</h1>
        <input
          type="password"
          className="p-3 rounded-lg shadow-md bg-white border focus:ring-2 focus:ring-blue-500"
          value={apiKey}
          onChange={handleKeyChange}
          placeholder="Enter Gemini API Key"
        />
      </div>
    </div>
  );
};

export default Settings;
