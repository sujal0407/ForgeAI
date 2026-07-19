import AgentCard from "./AgentCard";
import { ClipboardList } from "lucide-react";

export default function PlannerCard({ data }) {
  if (!data) return null;

  return (
    <AgentCard
      title="Planner"
      icon={<ClipboardList size={24} />}
    >
      <div className="space-y-5">

        <div>
          <h3 className="text-zinc-400 mb-2">Project Name</h3>
          <p className="text-lg font-semibold">
            {data.project_name || "-"}
          </p>
        </div>

        <div>
          <h3 className="text-zinc-400 mb-2">
            Problem Statement
          </h3>
          <p>{data.problem_statement || "-"}</p>
        </div>

        <div>
          <h3 className="text-zinc-400 mb-2">
            Objectives
          </h3>

          <ul className="list-disc ml-6 space-y-2">

            {(data.objectives || []).map((item, i) => (

              <li key={i}>{item}</li>

            ))}

          </ul>

        </div>

      </div>
    </AgentCard>
  );
}