import {
    Layers3,
    Server,
    Database,
    FileCode
} from "lucide-react";

export default function ProjectStats({ project }) {

    const planner = project?.project?.planner || {};
    const backend = project?.project?.backend || {};
    const database = project?.project?.database || {};
    const frontend = project?.project?.frontend || {};

    const cards = [

        {
            title: "Modules",
            value:
                planner.objectives?.length || 0,
            icon: Layers3
        },

        {
            title: "API Endpoints",
            value:
                backend.api_endpoints?.length || 0,
            icon: Server
        },

        {
            title: "Tables",
            value:
                database.tables?.length || 0,
            icon: Database
        },

        {
            title: "Pages",
            value:
                frontend.pages?.length || 0,
            icon: FileCode
        }

    ];

    return (

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

            {cards.map(card => {

                const Icon = card.icon;

                return (

                    <div
                        key={card.title}
                        className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
                    >

                        <Icon
                            className="text-indigo-500 mb-4"
                            size={26}
                        />

                        <h2 className="text-3xl font-bold">

                            {card.value}

                        </h2>

                        <p className="text-zinc-400">

                            {card.title}

                        </p>

                    </div>

                );

            })}

        </div>

    );

}