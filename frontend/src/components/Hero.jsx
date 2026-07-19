import { Sparkles, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-center max-w-4xl mx-auto py-12"
    >
      <div className="inline-flex items-center gap-2 bg-indigo-600/20 text-indigo-400 px-4 py-2 rounded-full border border-indigo-500/30">
        <Sparkles size={18} />
        <span className="text-sm font-medium">
          AI Powered Software Engineering
        </span>
      </div>

      <h1 className="text-6xl font-black mt-8 text-white leading-tight">
        Build Complete
        <br />
        Software Projects
        <br />
        <span className="text-indigo-500">
          using AI Agents
        </span>
      </h1>

      <p className="text-zinc-400 text-lg mt-8 leading-8 max-w-2xl mx-auto">
        Transform your software idea into architecture,
        backend, frontend, database, documentation,
        testing and deployment plans within minutes.
      </p>

      <div className="flex justify-center gap-5 mt-10">

        <button className="bg-indigo-600 hover:bg-indigo-500 transition px-7 py-4 rounded-xl flex items-center gap-3 text-lg font-semibold">

          <Rocket size={20} />

          Generate Project

        </button>

        <button className="border border-zinc-700 hover:border-indigo-500 transition px-7 py-4 rounded-xl">

          View Demo

        </button>

      </div>

    </motion.div>
  );
}