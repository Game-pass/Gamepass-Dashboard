import React, { useState } from 'react';
import { Button } from '@/components/ui/Buttons';
import { Modal } from '@/components/ui/Modal';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Table } from '@/components/ui/Table';
import { Game } from '@/components/GameInterface';
import { IoCopyOutline } from 'react-icons/io5';
import Gamepad from "../../assets/img/Frame.png"

const CreateGame: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [isCreateGameModalOpen, setIsCreateGameModalOpen] = useState(false);
  const [isSdkModalOpen, setIsSdkModalOpen] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false); // State for success alert

  const [newGame, setNewGame] = useState<Game>({
    id: Date.now(), // Unique ID based on the current timestamp
    name: '',
    description: '',
    gameType: '',
    createdAt: new Date(),
  });

  // Function to create a game and show SDK modal
  const handleCreateGame = () => {
    const createdGame = { ...newGame, id: Date.now() }; // Create a new game object
    setGames([...games, createdGame]); // Assign unique ID for each new game
    setIsCreateGameModalOpen(false);
    setIsSdkModalOpen(true);
    setShowSuccessAlert(true); // Show success alert

    // Hide the alert after 5 seconds
    setTimeout(() => {
      setShowSuccessAlert(false);
    }, 5000); // Change duration to 5000ms (5 seconds)
  };

  // Handle SDK modal close
  const handleCloseSdkModal = () => {
    setIsSdkModalOpen(false);
  };

  // Handle delete functionality
  const handleDelete = (gameToDelete: Game) => {
    setGames(games.filter((game) => game.id !== gameToDelete.id));
  };

  // Function to copy text to clipboard
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText('npm install gamepass-sdk') // Copy the text to clipboard
      .then(() => {
        alert('Copied to clipboard!'); // Alert the user
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div className="p-6 relative min-h-screen flex flex-col items-center justify-center"> {/* Center the content */}
      {/* Show success alert */}
      {showSuccessAlert && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-sm p-2 rounded shadow-md">
          Game created successfully!
        </div>
      )}

      {/* Show Create Game Button when no games exist */}
      {games.length === 0 ? (
        <div className="flex flex-col items-center mt-[-150px]">
          <img src={Gamepad} alt="GamePass Logo" className="w-150 h-70 mb-2" /> {/* Add margin below logo */}
          <p className="text-lg text-black text-center">Create Your First Game</p> {/* Text is black */}
          <Button className="mt-4" onClick={() => setIsCreateGameModalOpen(true)}> {/* Create Game Button */}
            Create Game
          </Button>
        </div>
      ) : (
        <Table
          games={games}
          onEdit={(game) => { /* Handle edit */ }}
          onDelete={handleDelete}
          onConnect={() => setIsSdkModalOpen(true)}
        />
      )}

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
          <div className='mr-'>
            <Button className="ml-10 text-sm" onClick={handleCreateGame}>Submit</Button>
            <Button className="ml-10 text-sm" onClick={handleCloseSdkModal}>Close</Button>
          </div>
          
          
        </Modal>
      )}

      {/* SDK Installation Modal */}
      {isSdkModalOpen && (
        <Modal onClose={handleCloseSdkModal}>
          <h2 className="text-black" style={{ fontSize: '20px' }}>Install GamePass SDK</h2> 
          <p className="text-black" style={{ fontSize: '20px' }}>Run the following command to install the SDK:</p>
          <div className="flex items-center">
            <code className="text-black" style={{ fontSize: '20px' }}>npm install gamepass-sdk</code>
            <IoCopyOutline
              onClick={handleCopyToClipboard}
              className="ml-2 text-blue-500 cursor-pointer hover:text-blue-600" // Add styles for the icon
              size={20}
            />
          </div>
          
          {/* Container for buttons */}
          <div className="flex justify-end space-x-2 mt-4">
            <Button onClick={handleCloseSdkModal} className="bg-blue-500 hover:bg-blue-600">
              Got it
            </Button>
            <Button onClick={handleCloseSdkModal} className="bg-gray-500 hover:bg-gray-600">
              Close
            </Button>
          </div>                                  
        </Modal>
      )}
    </div>
  );
};

export default CreateGame;
