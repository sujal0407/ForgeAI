import ProjectStats from "./ProjectStats";
import AgentGrid from "./AgentGrid";
import Timeline from "./Timeline";
import ActivityFeed from "./ActivityFeed";

export default function Overview({ project }) {

  return (

    <div className="space-y-8">

      <ProjectStats project={project} />

      <AgentGrid />

      <div className="grid lg:grid-cols-2 gap-8">

        <Timeline />

        <ActivityFeed />

      </div>

    </div>

  );

}