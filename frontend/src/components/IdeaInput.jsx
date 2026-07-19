import { useState } from "react";
import api from "../services/api";

export default function IdeaInput() {
    const [idea, setIdea] = useState("");
    const [loading, setLoading] = useState(false);
    const [project, setProject] = useState(null);
    const [error, setError] = useState("");

    const generateProject = async () => {

        if (!idea.trim()) {
            alert("Please enter a project idea.");
            return;
        }

        setLoading(true);
        setError("");
        setProject(null);

        try {

            console.log("Generating project...");

            const response = await api.post("/generate", {
                idea,
            });

            console.log(response.data);

            setProject(response.data.project);

        } catch (err) {

            console.error(err);

            setError(
                err.response?.data?.detail ||
                "Something went wrong while generating the project."
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <div className="bg-slate-900 rounded-xl p-6">

            <h2 className="text-xl font-semibold mb-4">
                Describe Your Software Idea
            </h2>

            <textarea
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                className="w-full h-40 bg-slate-950 rounded-lg border border-slate-700 p-4"
                placeholder="Example: Build an AI Resume Screening Platform..."
            />

            <button
                onClick={generateProject}
                disabled={loading}
                className="mt-5 w-full bg-blue-600 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
                {loading ? "Generating..." : "🚀 Generate Project"}
            </button>

            {error && (
                <div className="mt-4 bg-red-900 p-4 rounded-lg">
                    {error}
                </div>
            )}

            {project && (

                <div className="mt-6 space-y-6">

                    <div className="bg-slate-800 p-4 rounded-lg">
                        <h3 className="font-bold text-lg mb-2">
                            Planner
                        </h3>

                        <pre className="whitespace-pre-wrap text-sm">
                            {JSON.stringify(project.planner, null, 2)}
                        </pre>
                    </div>

                    <div className="bg-slate-800 p-4 rounded-lg">
                        <h3 className="font-bold text-lg mb-2">
                            Architecture
                        </h3>

                        <pre className="whitespace-pre-wrap text-sm">
                            {JSON.stringify(project.architecture, null, 2)}
                        </pre>
                    </div>

                    <div className="bg-slate-800 p-4 rounded-lg">
                        <h3 className="font-bold text-lg mb-2">
                            Frontend
                        </h3>

                        <pre className="whitespace-pre-wrap text-sm">
                            {JSON.stringify(project.frontend, null, 2)}
                        </pre>
                    </div>

                    <div className="bg-slate-800 p-4 rounded-lg">
                        <h3 className="font-bold text-lg mb-2">
                            Backend
                        </h3>

                        <pre className="whitespace-pre-wrap text-sm">
                            {JSON.stringify(project.backend, null, 2)}
                        </pre>
                    </div>

                </div>

            )}

        </div>
    );
}