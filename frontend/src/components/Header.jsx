import { BrainCircuit, GitBranch, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="h-16 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md flex justify-between items-center px-8 sticky top-0 z-50"
    >
      <div className="flex items-center gap-3">
        <BrainCircuit size={32} className="text-indigo-500" />

        <div>
          <h1 className="text-xl font-bold text-white">
            ForgeAI
          </h1>

          <p className="text-xs text-zinc-400">
            AI Software Engineering Platform
          </p>
        </div>
      </div>

      <div className="flex gap-3">

        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-indigo-500 transition">

          <GitBranch size={18} />

          GitHub

        </button>

        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition">

          <Sparkles size={18} />

          AI Powered

        </button>

      </div>
    </motion.header>
  );
}