import React, { useState } from 'react';
import { Button } from '@/components/ui/Buttons';
import { Modal } from '@/components/ui/Modal';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Table } from '@/components/ui/Table';
import { Game } from '@/components/GameInterface';

const CreateGame: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [isCreateGameModalOpen, setIsCreateGameModalOpen] = useState(false);
  const [isSdkModalOpen, setIsSdkModalOpen] = useState(false);
  const [isCongratsPopupOpen, setIsCongratsPopupOpen] = useState(false);

  const [newGame, setNewGame] = useState<Game>({
    id: Date.now(), // Unique ID based on the current timestamp
    name: '',
    description: '',
    gameType: '',
    createdAt: new Date(),
  });

  // Function to create a game and show SDK modal
  const handleCreateGame = () => {
    setGames([...games, { ...newGame, id: Date.now() }]); // Assign unique ID for each new game
    setIsCreateGameModalOpen(false);
    setIsSdkModalOpen(true);
  };

  // Handle SDK modal close and show congrats popup
  const handleCloseSdkModal = () => {
    setIsSdkModalOpen(false);
    setIsCongratsPopupOpen(true);
  };

  // Handle delete functionality
  const handleDelete = (gameToDelete: Game) => {
    setGames(games.filter((game) => game.id !== gameToDelete.id));
  };

  return (
    <div className="p-6 relative"> {/* Add relative to the container */}
      {/* Show Create Game Button when no games exist */}
      {games.length === 0 ? (
        <div className="flex items-center justify-center">
          <img src="/logo.svg" alt="GamePass Logo" className="w-12 h-12 mr-2" />
          <p className="text-lg text-black">Create Your First Game</p> {/* Text is black */}
        </div>
      ) : (
        <Table
          games={games}
          onEdit={(game) => { /* Handle edit */ }}
          onDelete={handleDelete}
          onConnect={() => setIsSdkModalOpen(true)}
        />
      )}

      {/* Create Game Button */}
      <Button className="absolute top-4 right-4" onClick={() => setIsCreateGameModalOpen(true)}>
        Create Game
      </Button>
      <br />

      {/* Create Game Modal */}
      {isCreateGameModalOpen && (
        <Modal onClose={() => setIsCreateGameModalOpen(false)}>
          <h2 className="text-black font-bold" style={{ fontSize: "20px" }}>Create a New Game</h2> {/* H2 text is black */}
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
          <Button className="ml-10 text-sm" onClick={handleCreateGame}>Submit</Button>
        </Modal>
      )}

      {/* SDK Installation Modal */}
      {isSdkModalOpen && (
        <Modal onClose={handleCloseSdkModal}>
          <h2 className="text-black">Install GamePass SDK</h2> {/* H2 text is black */}
          <p className="text-black">Run the following command to install the SDK:</p> {/* P text is black */}
          <code >npm install gamepass-sdk</code>
          <Button onClick={handleCloseSdkModal}>Got it</Button>
        </Modal>
      )}

      {/* Congratulations Popup */}
      {isCongratsPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" onClick={() => setIsCongratsPopupOpen(false)}>
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-black">Congratulations!</h2> {/* H2 text is black */}
            <p className="text-black">You have successfully created your game.</p> {/* P text is black */}
            <Button className="text-xs" onClick={() => setIsCongratsPopupOpen(false)}>Close</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateGame;
