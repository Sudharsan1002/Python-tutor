import { useEffect, useState } from "react";
import { askGeminiAI } from "../Api";
import {  BiSend } from "react-icons/bi";
import {  FaRobot } from "react-icons/fa6";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, staggerChildren: 0.3 },
  },
};

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    const aiResponse = await askGeminiAI(input);
    const botMessage = { role: "assistant", content: aiResponse };

    setMessages((prev) => [...prev, botMessage]);
    setLoading(false);
  };

  return (
    <motion.div
      className="flex justify-around items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="bg-white p-5 rounded-lg shadow-lg w-full min-w-lg max-w-3xl ">
        <h2 className="text-lg font-bold">Ask your AI Python tutor</h2>

        {/* Chat */}

        <div className="h-72 overflow-y-auto bg-gray-100 p-3 rounded-lg shadow-inner">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex mb-2 ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.role === "assistant" && (
                <FaRobot className="w-100 h-12 mr-3 text-gray-700 border border-gray-500 rounded-full p-2 shadow-lg animate-pulse" />
              )}
              <p
                className={`p-2 rounded-lg ${
                  msg.role === "user" ? "bg-blue-400 text-white" : "bg-gray-300"
                }`}
              >
                {msg.content}
              </p>
            </div>
          ))}
          {loading && (
            <p className="text-gray-500 italic text-sm">AI is thinking...</p>
          )}
        </div>

        <div className="mt-3 flex">
          <input
            type="text"
            className="flex-1 p-2 border rounded-l-lg"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault(); 
                handleSend();
              }
            }}
            placeholder="Ask a python question"
          />

          <button
            onClick={handleSend}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 "
          >
            <BiSend />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Chatbot;
