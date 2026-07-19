import { useState } from "react";
import { SendHorizonal } from "lucide-react";
import api from "../services/api";
import toast from "react-hot-toast";

export default function PromptInput({ setProject, setLoading }) {

  const [idea, setIdea] = useState("");

  async function generateProject() {

    if (!idea.trim()) {

      toast.error("Please enter your project idea");

      return;

    }

    try {

      setLoading(true);

        const res = await api.post("/generate", {
        idea,
        });

        console.log("ForgeAI Response");
        console.log(res.data);

        setProject(res.data);       

      toast.success("Project generated successfully");

    }

    catch (err) {

      toast.error("Generation failed");

      console.error(err);

    }

    finally {

      setLoading(false);

    }

  }

  return (

    <div className="max-w-5xl mx-auto">

      <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8">

        <textarea

          rows={7}

          value={idea}

          onChange={(e) => setIdea(e.target.value)}

          placeholder="Example: Build an AI Resume Screening System using FastAPI, React and PostgreSQL..."

          className="w-full bg-transparent outline-none resize-none text-lg text-white placeholder:text-zinc-500"

        />

        <div className="flex justify-end mt-6">

          <button

            onClick={generateProject}

            className="bg-indigo-600 hover:bg-indigo-500 transition px-8 py-4 rounded-xl flex items-center gap-3 font-semibold"

          >

            <SendHorizonal size={20} />

            Generate Project

          </button>

        </div>

      </div>

    </div>

  );

}