import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface CardData {
  title: string;
  content: string;
  chart?: boolean;
  list?: string[];
}

const Dashboard: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 9; // 9 cards per page for a 3x3 layout

  // Card Data (sample data for display)
  const cards: CardData[] = [
    { title: "Player Streak Stats", content: "Daily, Weekly, Monthly streaks", chart: true },
    { title: "Achievements Overview", content: "Players completing challenges", chart: true },
    { title: "API Usage", content: "API call statistics" },
    { title: "Top Players", content: "Most active players" },
    { title: "Developer Tools", content: "Quick SDK tools for testing" },
    { title: "Notifications", content: "New updates and alerts" },
    { title: "Player Statistics", content: "Player-level statistics overview", chart: true },
    { title: "GamePass Subscriptions", content: "Subscription activity", chart: true },
    { title: "Latest Updates", content: "Changelog and recent updates" },
  ];

  // Pagination logic
  const displayedCards = cards.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Handle page change
  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="pl-20 pr-20 pt-10 pb-5 rounded-lg bg-gray-100 ">

      {/* 3x3 Cards Layout with square cards */}
      <div className="grid grid-cols-3 gap-4">
        {displayedCards.map((card, index) => (
          <Card 
          key={index} 
          className="p-4 hover:shadow-lg transition-shadow duration-300 h-40 w-80 flex flex-col justify-between">
          <div className="flex-grow">
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <p className="mt-2 text-gray-700 text-sm">{card.content}</p>
            {card.list && (
              <ul className="mt-2 text-sm">
                {card.list.map((item, idx) => (
                  <li key={idx} className="text-gray-600">• {item}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="mt-4">
            <Button variant="outline" className="w-full">View Details</Button>
          </div>
        </Card>
        
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <Pagination
          totalPages={Math.ceil(cards.length / itemsPerPage)}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="flex space-x-2">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`px-4 py-2 rounded ${
            currentPage === index + 1 ? "bg-darkBlue text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Dashboard;
