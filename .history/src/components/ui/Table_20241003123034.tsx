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
  <table className="w-full mt-4 border-collapse">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Type</th>
        <th>Created At</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {games.map((game, index) => (
        <tr key={index}>
          <td>{game.name}</td>
          <td>{game.description}</td>
          <td>{game.gameType}</td>
          <td>{game.createdAt.toLocaleString()}</td>
          <td>
            <Button onClick={() => onEdit(game)}>Edit</Button>
            <Button onClick={() => onDelete(game)}>Delete</Button>
            <Button onClick={() => onConnect(game)}>Connect</Button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
