import React from 'react';
import { Button } from './Buttons';

interface Game {
  name: string;
  description: string;
  gameType: string;
  createdAt: Date;
}

interface TableProps {
  games: Game[];
  onEdit: (game: Game) => void;
  onDelete: (game: Game) => void;
  onConnect: (game: Game) => void;
}

export const Table: React.FC<TableProps> = ({ games, onEdit, onDelete, onConnect }) => (
  <div className="overflow-x-auto">
    <table className="w-full mt-4 border-collapse border border-gray-300">
      <thead>
        <tr className="bg-[gray-100]">
          <th className="px-4 py-2 border border-[#2C39B2] text-left">Name</th>
          <th className="px-4 py-2 border border-[#2C39B2] text-left">Description</th>
          <th className="px-4 py-2 border border-[#2C39B2] text-left">Type</th>
          <th className="px-4 py-2 border border-[#2C39B2] text-left">Created At</th>
          <th className="px-4 py-2 border border-[#2C39B2] text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {games.map((game, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="px-4 py-2 border border-[#2C39B2]">{game.name}</td>
            <td className="px-4 py-2 border border-[#2C39B2]">{game.description}</td>
            <td className="px-4 py-2 border border-[#2C39B2]">{game.gameType}</td>
            <td className="px-4 py-2 border border-[#2C39B2]">{game.createdAt.toLocaleString()}</td>
            <td className="px-4 py-2 border border-[#2C39B2] space-x-2">
              <Button onClick={() => onEdit(game)} className="mr-2 bg-blue-500 hover:bg-blue-600">
                Edit
              </Button>
              <Button onClick={() => onDelete(game)} className="mr-2 bg-red-500 hover:bg-red-600">
                Delete
              </Button>
              <Button onClick={() => onConnect(game)} className="bg-green-500 hover:bg-green-600">
                Connect
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
