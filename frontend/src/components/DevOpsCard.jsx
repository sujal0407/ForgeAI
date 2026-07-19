import AgentCard from "./AgentCard";
import { Cloud } from "lucide-react";

export default function DevOpsCard({ data }) {
  if (!data) return null;

  return (
    <AgentCard title="DevOps" icon={<Cloud size={24} />}>
      <div className="space-y-6">

        <div>
          <h3 className="text-zinc-400">Deployment</h3>
          <p>{data.deployment || "-"}</p>
        </div>

        <div>
          <h3 className="text-zinc-400">CI/CD</h3>
          <p>{data.cicd || "-"}</p>
        </div>

        <div>
          <h3 className="text-zinc-400">Docker</h3>
          <p>{data.docker || "-"}</p>
        </div>

        <div>
          <h3 className="text-zinc-400">Cloud Provider</h3>
          <p>{data.cloud || "-"}</p>
        </div>

      </div>
    </AgentCard>
  );
}