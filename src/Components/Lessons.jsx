import { motion } from "framer-motion";



// ANIMATIONS


const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
};



const lessons = [
  {
    title: "📌 Introduction to Python",
    content: "Python is an easy-to-learn programming language.",
  },
  {
    title: "🔢 Variables & Data Types",
    content: "Variables store values. Example: `x = 10`",
  },
  {
    title: "🔀 Conditional Statements",
    content: "Use `if`, `else` to make decisions in Python.",
  },
  {
    title: "🔁 Loops",
    content: "Loops help repeat tasks. Example: `for i in range(5):`",
  },
];

const Lessons = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-100 p-6"
     
    >
      <h1 className="text-3xl font-bold text-center mb-6">Python Lessons</h1>
      <div className="max-w-2xl mx-auto space-y-6">
        {lessons.map((lesson, index) => (
          <motion.div key={index} className="bg-white p-4 shadow-md rounded-lg">
            <motion.h2
              className="text-xl font-semibold"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              {lesson.title}
            </motion.h2>
            <motion.p
              className="text-gray-700"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              {lesson.content}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Lessons;
