import AgentCard from "./AgentCard";
import { Monitor } from "lucide-react";

export default function FrontendCard({data}){

if(!data) return null;

return(

<AgentCard

title="Frontend"

icon={<Monitor size={24}/>}

>

<div className="space-y-5">

<div>

<h3 className="text-zinc-400">

Framework

</h3>

<p>

{data.framework || "-"}

</p>

</div>

<div>

<h3 className="text-zinc-400">

Pages

</h3>

<ul className="list-disc ml-6">

{(data.pages||[]).map((page,i)=>(

<li key={i}>{page}</li>

))}

</ul>

</div>

</div>

</AgentCard>

)

}