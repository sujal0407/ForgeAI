import ProgressBar from "./ProgressBar";

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

export default function LoadingScreen(){

return(

<div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

<h2 className="text-3xl font-bold">

ForgeAI is generating your project...

</h2>

<p className="text-zinc-400 mt-2">

AI Agents are collaborating together

</p>

<div className="mt-8">

<ProgressBar progress={65}/>

</div>

<div className="mt-10 space-y-4">

{

agents.map(agent=>(

<div

key={agent}

className="flex justify-between border-b border-zinc-800 pb-3"

>

<span>

{agent}

</span>

<span className="text-yellow-400 animate-pulse">

Running...

</span>

</div>

))

}

</div>

</div>

)

}