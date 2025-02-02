import React, { useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, staggerChildren: 0.3 },
  },
};

const questions = [
  {
    question: "What is the output of `print(5 + 3)`?",
    options: ["53", "8", "5+3"],
    answer: "8",
  },
  {
    question: "Which keyword is used to define a function?",
    options: ["func", "define", "def"],
    answer: "def",
  },
  {
    question: "How do you write a loop?",
    options: ["for i in range(5):", "loop i = 5", "repeat(5)"],
    answer: "for i in range(5):",
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) setScore(score + 1);
    if (currentQuestion < questions.length - 1)
      setCurrentQuestion(currentQuestion + 1);
    else setShowResult(true);
  };
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-yellow-100 p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-3xl font-bold mb-6">Python Quiz</h1>
      {!showResult ? (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
          <h2 className="text-lg font-semibold mb-4">
            {questions[currentQuestion].question}
          </h2>
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="block w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <h2 className="text-2xl font-semibold">
          Your Score:{score}/{questions.length}
        </h2>
      )}
    </motion.div>
  );
};

export default Quiz;
