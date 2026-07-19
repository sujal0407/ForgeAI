const activities = [

"Planner finished project planning",

"Research selected technology stack",

"Architecture generated",

"Backend APIs created",

"Frontend components designed",

"Database schema generated",

"DevOps pipeline configured",

"QA strategy generated",

"Security review completed",

"README generated"

];

export default function ActivityFeed(){

return(

<div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6">

<h2 className="text-2xl font-bold mb-6">

Recent Activity

</h2>

<div className="space-y-4">

{

activities.map((activity,index)=>(

<div
key={index}
className="border-l-2 border-indigo-500 pl-4">

<p>

{activity}

</p>

</div>

))

}

</div>

</div>

)

}