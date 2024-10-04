import React from 'react';
import GameControllerIcon from '../assets/img/Frame.png';

const ComingSoon: React.FC = () => {
  return (
    <div className="text-center">
      <img src={GameControllerIcon} alt="Game Controller" className="mx-auto mb-4" />
      <h1 className="text-2xl text-gray-300">Coming Soon...</h1>
    </div>
  );
};

export default ComingSoon;
