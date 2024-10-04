import { useState } from "react";
import Header from "@/component/Header";
import Sidebar from "@/component/Sidebar";
import ComingSoon from "@/component/ComingSoon";
import DashboardContent from "@/component/Contents/Dashboard"
import CreateGame from "../component/Contents/CreateGame";

const Dashboard = () => {
  // State to track the current active view
  const [activeView, setActiveView] = useState<string>("Dashboard");

  const renderContent = () => {
    switch (activeView) {
      case "Dashboard":
        return <h1 className="text-white text-3xl"> < DashboardContent /> </h1>;
      case "Create Games":
        return <h1 className="text-white text-3xl"> < CreateGame /> </h1>;
      case "Mint Assets":
        return <h1 className="text-white text-3xl"> < CreateGame /> </h1>;
      case "Leaderboard":
        return <h1 className="text-white text-3xl"> < CreateGame /> </h1>;
      case "Marketplace":
        return <h1 className="text-white text-3xl"> < CreateGame /> </h1>;
      case "Players":
        return <h1 className="text-white text-3xl">< CreateGame /> </h1>;
      default:
        return <ComingSoon />;
    }
  };

  return (
    <div className="overflow-hidden">
      <Header />

      <div className="flex min-h-screen bg-darkBlue">
        {/* Sidebar */}
        <Sidebar activeView={activeView} setActiveView={setActiveView} />

        {/* Main Content */}
        <main className="flex-1 flex p-5 justify-center bg-black">
          {renderContent()} 
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
