import {
    LayoutDashboard,
    Wand2,
    FolderOpen,
    Download,
    Settings
} from "lucide-react";

const items = [

    {
        icon: LayoutDashboard,
        label: "Dashboard"
    },

    {
        icon: Wand2,
        label: "Generate"
    },

    {
        icon: FolderOpen,
        label: "History"
    },

    {
        icon: Download,
        label: "Downloads"
    },

    {
        icon: Settings,
        label: "Settings"
    }

];

export default function Sidebar() {

    return (

        <aside className="w-64 bg-zinc-950 border-r border-zinc-800 h-screen sticky top-16">

            <div className="p-6">

                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-4">

                    Navigation

                </p>

                <div className="space-y-2">

                    {

                        items.map((item) => (

                            <button

                                key={item.label}

                                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-300 hover:bg-indigo-600 hover:text-white transition"

                            >

                                <item.icon size={20} />

                                {item.label}

                            </button>

                        ))

                    }

                </div>

            </div>

            <div className="absolute bottom-8 left-6 right-6">

                <div className="rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 p-5">

                    <h3 className="font-semibold">

                        ForgeAI Pro

                    </h3>

                    <p className="text-sm mt-2 opacity-90">

                        Generate complete software projects in minutes.

                    </p>

                </div>

            </div>

        </aside>

    );

}