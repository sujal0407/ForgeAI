import ReactMarkdown from "react-markdown";

export default function MarkdownViewer({

content

}){

return(

<div className="prose prose-invert max-w-none bg-zinc-900 rounded-2xl border border-zinc-800 p-8">

<ReactMarkdown>

{content}

</ReactMarkdown>

</div>

)

}