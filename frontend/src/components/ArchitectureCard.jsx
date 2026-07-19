import AgentCard from "./AgentCard";
import { Blocks } from "lucide-react";

export default function ArchitectureCard({ data }) {

    if(!data) return null;

    return(

        <AgentCard

        title="Architecture"

        icon={<Blocks size={24}/>}

        >

            <div className="space-y-6">

                <div>

                    <h3 className="text-zinc-400">

                        Architecture

                    </h3>

                    <p>

                        {data.architecture || "-"}

                    </p>

                </div>

                <div>

                    <h3 className="text-zinc-400">

                        Components

                    </h3>

                    <ul className="list-disc ml-6">

                        {(data.components||[]).map((c,i)=>(

                            <li key={i}>{c}</li>

                        ))}

                    </ul>

                </div>

            </div>

        </AgentCard>

    )

}