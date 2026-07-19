import AgentCard from "./AgentCard";
import { BookOpen } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function DocumentationCard({data}){

if(!data) return null;

return(

<AgentCard

title="Documentation"

icon={<BookOpen size={24}/>}

>

<div className="prose prose-invert max-w-none">

<ReactMarkdown>

{data.README || "# No Documentation"}

</ReactMarkdown>

</div>

</AgentCard>

)

}