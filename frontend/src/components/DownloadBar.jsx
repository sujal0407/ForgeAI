import {
  Download,
  FileJson,
  Copy,
  FileText
} from "lucide-react";
import toast from "react-hot-toast";

export default function DownloadBar({ project }) {
  const downloadJSON = () => {
    const blob = new Blob(
      [JSON.stringify(project, null, 2)],
      { type: "application/json" }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "ForgeAI_Project.json";

    a.click();

    URL.revokeObjectURL(url);
  };

  const downloadREADME = () => {
    const readme =
      project?.project?.documentation?.README || "";

    const blob = new Blob([readme], {
      type: "text/markdown",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "README.md";

    a.click();

    URL.revokeObjectURL(url);
  };

  const copyJSON = async () => {
    await navigator.clipboard.writeText(
      JSON.stringify(project, null, 2)
    );

    toast.success("Copied to clipboard");
  };

  return (
    <div className="flex flex-wrap gap-4">

      <button
        onClick={downloadREADME}
        className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-5 py-3 rounded-xl"
      >
        <FileText size={18} />
        README
      </button>

      <button
        onClick={downloadJSON}
        className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 px-5 py-3 rounded-xl"
      >
        <FileJson size={18} />
        JSON
      </button>

      <button
        onClick={copyJSON}
        className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 px-5 py-3 rounded-xl"
      >
        <Copy size={18} />
        Copy
      </button>

    </div>
  );
}