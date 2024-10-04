import React from "react";
import DashboardIcon from "../assets/icons/dashboard-square.png";
import CreateGamesIcon from "../assets/icons/creategame.png";
import MintAssetsIcon from "../assets/icons/mintassets.png";
import LeaderboardIcon from "../assets/icons/leaderboard.png";
import MarketplaceIcon from "../assets/icons/marketplace.png";
import PlayersIcon from "../assets/icons/players.png";
import AdminIcon from "../assets/icons/female_DP.png";

interface SidebarProps {
  activeView: string;
  setActiveView: React.Dispatch<React.SetStateAction<string>>;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
  const menuItems = [
    { label: "Dashboard", icon: DashboardIcon },
    { label: "Create Games", icon: CreateGamesIcon },
    { label: "Mint Assets", icon: MintAssetsIcon },
    { label: "Leaderboard", icon: LeaderboardIcon },
    { label: "Marketplace", icon: MarketplaceIcon },
    { label: "Players", icon: PlayersIcon },
  ];

  return (
    <aside className="w-64 bg-[#0c1131] text-white flex flex-col justify-between">
      <nav className="flex flex-col p-4 space-y-8">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            onClick={() => setActiveView(item.label)} // Set active item on click
            className={`flex items-center p-2 space-x-3 rounded-md cursor-pointer 
              ${activeView === item.label ? "bg-blue-700" : "hover:bg-darkBlue"}
            `}
          >
            <img src={item.icon} alt={item.label} className="w-6 h-6" />
            <span className="text-lg">{item.label}</span>
          </a>
        ))}
      </nav>

      {/* User Profile */}
      <div className="absolute bottom-5 left-4 flex items-center p-4">
          <img src={AdminIcon} alt="Admin" className="w-10 h-10 rounded-full" />
          <div className="ml-3">
            <h4 className="text-sm font-medium">Samson John</h4>
            <p className="text-xs">Admin</p>
          </div>
        </div>
    </aside>
  );
};

export default Sidebar;
