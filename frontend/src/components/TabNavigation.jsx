import { motion } from "framer-motion";
import {
  LayoutDashboard,
  ClipboardList,
  Search,
  Blocks,
  Server,
  Monitor,
  Database,
  Cloud,
  Bug,
  Shield,
  BookOpen,
} from "lucide-react";

const tabs = [
  { name: "Overview", icon: LayoutDashboard },
  { name: "Planner", icon: ClipboardList },
  { name: "Research", icon: Search },
  { name: "Architecture", icon: Blocks },
  { name: "Backend", icon: Server },
  { name: "Frontend", icon: Monitor },
  { name: "Database", icon: Database },
  { name: "DevOps", icon: Cloud },
  { name: "QA", icon: Bug },
  { name: "Security", icon: Shield },
  { name: "Documentation", icon: BookOpen },
];

export default function TabNavigation({ active, setActive }) {
  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex gap-3 min-w-max">
        {tabs.map((tab) => {
          const Icon = tab.icon;

          return (
            <motion.button
              key={tab.name}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActive(tab.name)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-300 border

                ${
                  active === tab.name
                    ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                    : "bg-zinc-900 border-zinc-800 hover:border-indigo-500 text-zinc-300"
                }
              `}
            >
              <Icon size={18} />
              {tab.name}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}