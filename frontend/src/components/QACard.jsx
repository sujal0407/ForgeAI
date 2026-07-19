import AgentCard from "./AgentCard";
import { Bug } from "lucide-react";

export default function QACard({ data }) {
  if (!data) return null;

  return (
    <AgentCard title="Quality Assurance" icon={<Bug size={24} />}>
      <div className="space-y-6">

        <div>
          <h3 className="text-zinc-400">Testing Strategy</h3>
          <p>{data.testing_strategy || "-"}</p>
        </div>

        <div>
          <h3 className="text-zinc-400">Test Cases</h3>

          <ul className="list-disc ml-6 space-y-2">
            {(data.test_cases || []).map((test, index) => (
              <li key={index}>{test}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-zinc-400">Coverage Goal</h3>
          <p>{data.coverage || "-"}</p>
        </div>

      </div>
    </AgentCard>
  );
}