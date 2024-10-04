import React, { useState } from 'react';
import { Button } from '@/components/ui/Buttons';
import { Modal } from '@/components/ui/Modal';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Table } from '@/components/ui/Table';

interface Game {
  name: string;
  description: string;
  gameType: string;
  createdAt: Date;
}

const CreateGame: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [isCreateGameModalOpen, setIsCreateGameModalOpen] = useState(false);
  const [isSdkModalOpen, setIsSdkModalOpen] = useState(false);
  const [isCongratsPopupOpen, setIsCongratsPopupOpen] = useState(false);

  const [newGame, setNewGame] = useState<Game>({
    name: '',
    description: '',
    gameType: '',
    createdAt: new Date(),
  });

  // Function to create a game and show SDK modal
  const handleCreateGame = () => {
    setGames([...games, newGame]);
    setIsCreateGameModalOpen(false);
    setIsSdkModalOpen(true);
  };

  // Handle SDK modal close and show congrats popup
  const handleCloseSdkModal = () => {
    setIsSdkModalOpen(false);
    setIsCongratsPopupOpen(true);
  };

  return (
    <div className="p-6">
      <Button className="absolute top-4 right-4" onClick={() => setIsCreateGameModalOpen(true)}>
        Create Game
      </Button>

      {/* Create Game Modal */}
      {isCreateGameModalOpen && (
        <Modal onClose={() => setIsCreateGameModalOpen(false)}>
          <h2>Create a New Game</h2>
          <Input
            label="Game Name"
            value={newGame.name}
            onChange={(e) => setNewGame({ ...newGame, name: e.target.value })}
          />
          <Input
            label="Game Description"
            value={newGame.description}
            onChange={(e) => setNewGame({ ...newGame, description: e.target.value })}
          />
          <Select
            label="Game Type"
            value={newGame.gameType}
            onChange={(e) => setNewGame({ ...newGame, gameType: e.target.value })}
            options={[
              { value: 'arcade', label: 'Arcade' },
              { value: 'adventure', label: 'Adventure' },
              { value: 'battle', label: 'Battle' },
            ]}
          />
          <Button onClick={handleCreateGame}>Submit</Button>
        </Modal>
      )}

      {/* SDK Installation Modal */}
      {isSdkModalOpen && (
        <Modal onClose={handleCloseSdkModal}>
          <h2>Install GamePass SDK</h2>
          <p>Run the following command to install the SDK:</p>
          <code>npm install gamepass-sdk</code>
          <Button onClick={handleCloseSdkModal}>Got it</Button>
        </Modal>
      )}

      {/* Congratulations Popup */}
      {isCongratsPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" onClick={() => setIsCongratsPopupOpen(false)}>
          <div className="bg-white p-8 rounded-lg">
            <h2>Congratulations!</h2>
            <p>You have successfully created your game.</p>
            <Button onClick={() => setIsCongratsPopupOpen(false)}>Close</Button>
          </div>
        </div>
      )}

      {/* Games Table */}
      <Table
        games={games}
        onEdit={(game) => { /* Handle edit */ }}
        onDelete={(game) => setGames(games.filter((g) => g !== game))}
        onConnect={(game) => setIsSdkModalOpen(true)}
      />
    </div>
  );
};

export default CreateGame;
