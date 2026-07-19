import AgentCard from "./AgentCard";
import { Database } from "lucide-react";

export default function DatabaseCard({data}){

if(!data) return null;

return(

<AgentCard

title="Database"

icon={<Database size={24}/>}

>

<div className="space-y-5">

<div>

<h3 className="text-zinc-400">

Database

</h3>

<p>

{data.database || "-"}

</p>

</div>

<div>

<h3 className="text-zinc-400">

Tables

</h3>

<ul className="list-disc ml-6">

{(data.tables||[]).map((table,i)=>(

<li key={i}>{table}</li>

))}

</ul>

</div>

</div>

</AgentCard>

)

}