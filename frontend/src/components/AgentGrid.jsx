const agents = [

"Planner",

"Research",

"Architecture",

"Backend",

"Frontend",

"Database",

"DevOps",

"QA",

"Security",

"Documentation"

];

export default function AgentGrid(){

return(

<div className="grid md:grid-cols-5 gap-5">

{

agents.map(agent=>(

<div
key={agent}
className="rounded-2xl bg-zinc-900 border border-zinc-800 p-5 hover:border-indigo-500 transition">

<div className="flex justify-between">

<h3>{agent}</h3>

<div className="w-3 h-3 rounded-full bg-green-500"/>

</div>

<p className="text-zinc-500 mt-6">

Completed Successfully

</p>

</div>

))

}

</div>

)

}