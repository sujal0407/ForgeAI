import ReactMarkdown from "react-markdown";

export default function OutputViewer({

title,

content

}){

return(

<div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6">

<h2 className="text-2xl font-bold mb-6">

{title}

</h2>

<div className="prose prose-invert max-w-none">

<ReactMarkdown>

{content}

</ReactMarkdown>

</div>

</div>

)

}