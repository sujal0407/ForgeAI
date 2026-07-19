import {
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

const timeline = [
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

export default function Timeline() {
  return (
    <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6">

      <h2 className="text-2xl font-bold mb-8">

        AI Execution Timeline

      </h2>

      <div className="space-y-6">

        {timeline.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.name}
              className="flex items-center justify-between"
            >

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-indigo-600/20 flex items-center justify-center">

                  <Icon className="text-indigo-500" />

                </div>

                <div>

                  <h3 className="font-semibold">

                    {item.name}

                  </h3>

                  <p className="text-zinc-500 text-sm">

                    Completed Successfully

                  </p>

                </div>

              </div>

              <div className="w-3 h-3 rounded-full bg-green-500" />

            </div>

          );

        })}

      </div>

    </div>
  );
}