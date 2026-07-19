import { BrainCircuit } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-800 py-8">

      <div className="flex justify-between items-center">

        <div className="flex items-center gap-3">

          <BrainCircuit className="text-indigo-500" />

          <div>

            <h2 className="font-bold">

              ForgeAI

            </h2>

            <p className="text-sm text-zinc-500">

              AI Software Engineering Platform

            </p>

          </div>

        </div>

        <p className="text-zinc-500">

          © 2026 ForgeAI

        </p>

      </div>

    </footer>
  );
}