import AgentCard from "./AgentCard";
import { Search } from "lucide-react";

export default function ResearchCard({ data }) {
  if (!data) return null;

  return (
    <AgentCard title="Research" icon={<Search size={24} />}>
      <div className="space-y-6">

        <div>
          <h3 className="text-zinc-400 mb-2">Technology Stack</h3>

          <ul className="list-disc ml-6 space-y-2">
            {(data.tech_stack || []).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-zinc-400 mb-2">Competitors</h3>

          <ul className="list-disc ml-6 space-y-2">
            {(data.competitors || []).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-zinc-400 mb-2">Recommendations</h3>

          <p>{data.recommendations || "-"}</p>
        </div>

      </div>
    </AgentCard>
  );
}