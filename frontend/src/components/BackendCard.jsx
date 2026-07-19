import AgentCard from "./AgentCard";
import { Server } from "lucide-react";

export default function BackendCard({data}){

if(!data) return null;

return(

<AgentCard

title="Backend"

icon={<Server size={24}/>}

>

<div className="space-y-6">

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

APIs

</h3>

<ul className="list-disc ml-6">

{(data.api_endpoints||[]).map((api,i)=>(

<li key={i}>{api}</li>

))}

</ul>

</div>

<div>

<h3 className="text-zinc-400">

Authentication

</h3>

<p>

{data.authentication||"-"}

</p>

</div>

</div>

</AgentCard>

)

}