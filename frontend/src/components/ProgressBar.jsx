import { motion } from "framer-motion";

export default function ProgressBar({ progress }) {
  return (
    <div className="w-full">

      <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1 }}
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500"
        />

      </div>

      <div className="flex justify-between mt-3">

        <span className="text-zinc-400">

          AI Progress

        </span>

        <span className="font-semibold">

          {progress}%

        </span>

      </div>

    </div>
  );
}