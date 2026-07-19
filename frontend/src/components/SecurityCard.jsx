import AgentCard from "./AgentCard";
import { Shield } from "lucide-react";

export default function SecurityCard({ data }) {
  if (!data) return null;

  return (
    <AgentCard title="Security Review" icon={<Shield size={24} />}>
      <div className="space-y-6">

        <div>
          <h3 className="text-zinc-400">Authentication</h3>
          <p>{data.authentication || "-"}</p>
        </div>

        <div>
          <h3 className="text-zinc-400">Authorization</h3>
          <p>{data.authorization || "-"}</p>
        </div>

        <div>
          <h3 className="text-zinc-400">Best Practices</h3>

          <ul className="list-disc ml-6 space-y-2">
            {(data.best_practices || []).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

      </div>
    </AgentCard>
  );
}