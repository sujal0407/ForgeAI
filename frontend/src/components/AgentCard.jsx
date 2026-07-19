import { motion } from "framer-motion";

export default function AgentCard({
    title,
    icon,
    children
}) {

    return (

        <motion.div
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            whileHover={{y:-5}}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-lg"
        >

            <div className="flex items-center gap-3 mb-6">

                <div className="text-indigo-500">

                    {icon}

                </div>

                <h2 className="text-xl font-bold">

                    {title}

                </h2>

            </div>

            {children}

        </motion.div>

    );

}