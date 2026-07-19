import {

Download,

FileJson,

FileText,

Archive

} from "lucide-react";

export default function ExportPanel(){

return(

<div className="grid md:grid-cols-4 gap-4">

<button className="rounded-xl bg-indigo-600 hover:bg-indigo-500 py-4 flex justify-center gap-2">

<FileText size={18}/>

README

</button>

<button className="rounded-xl bg-zinc-900 border border-zinc-800 py-4 flex justify-center gap-2">

<FileJson size={18}/>

JSON

</button>

<button className="rounded-xl bg-zinc-900 border border-zinc-800 py-4 flex justify-center gap-2">

<Archive size={18}/>

ZIP

</button>

<button className="rounded-xl bg-zinc-900 border border-zinc-800 py-4 flex justify-center gap-2">

<Download size={18}/>

Export

</button>

</div>

)

}