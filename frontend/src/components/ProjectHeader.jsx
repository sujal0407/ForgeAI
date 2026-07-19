import { CheckCircle } from "lucide-react";

export default function ProjectHeader({ title }) {
  return (
    <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-8">

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold">

            {title}

          </h1>

          <p className="text-zinc-400 mt-2">

            Generated successfully using ForgeAI

          </p>

        </div>

        <CheckCircle
          className="text-green-500"
          size={42}
        />

      </div>

    </div>
  );
}