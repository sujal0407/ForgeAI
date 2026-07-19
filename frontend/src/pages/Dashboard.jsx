import { useState } from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Hero from "../components/hero";      // <-- because your file is hero.jsx
import PromptInput from "../components/PromptInput";
import LoadingScreen from "../components/LoadingScreen";
import Footer from "../components/Footer";
import TabNavigation from "../components/TabNavigation";
import Overview from "../components/Overview";
import DownloadBar from "../components/DownloadBar";

import PlannerCard from "../components/PlannerCard";
import ResearchCard from "../components/ResearchCard";
import ArchitectureCard from "../components/ArchitectureCard";
import BackendCard from "../components/BackendCard";
import FrontendCard from "../components/FrontendCard";
import DatabaseCard from "../components/DatabaseCard";
import DevOpsCard from "../components/DevOpsCard";
import QACard from "../components/QACard";
import SecurityCard from "../components/SecurityCard";
import DocumentationCard from "../components/DocumentationCard";

export default function Dashboard() {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");

  const data = project?.project || {};

  const renderContent = () => {
    switch (activeTab) {
      case "Overview":
        return <Overview project={project} />;

      case "Planner":
        return <PlannerCard data={data.planner} />;

      case "Research":
        return <ResearchCard data={data.research} />;

      case "Architecture":
        return <ArchitectureCard data={data.architecture} />;

      case "Backend":
        return <BackendCard data={data.backend} />;

      case "Frontend":
        return <FrontendCard data={data.frontend} />;

      case "Database":
        return <DatabaseCard data={data.database} />;

      case "DevOps":
        return <DevOpsCard data={data.devops} />;

      case "QA":
        return <QACard data={data.qa} />;

      case "Security":
        return <SecurityCard data={data.security} />;

      case "Documentation":
        return (
          <DocumentationCard
            data={data.documentation}
          />
        );

      default:
        return <Overview project={project} />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      <Header />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 overflow-y-auto">

          <div className="max-w-7xl mx-auto px-10 py-10">

            <Hero />

            <div className="mt-12">
              <PromptInput
                setProject={setProject}
                setLoading={setLoading}
              />
            </div>

            {loading && (
              <div className="mt-12">
                <LoadingScreen />
              </div>
            )}

            {!loading && project && (
              <>
                <div className="mt-14">
                  <TabNavigation
                    active={activeTab}
                    setActive={setActiveTab}
                  />
                </div>

                <div className="mt-10">
                  {renderContent()}
                </div>

                <div className="mt-10">
                  <DownloadBar
                    project={project}
                  />
                </div>
              </>
            )}

            <Footer />

          </div>

        </main>

      </div>

    </div>
  );
}