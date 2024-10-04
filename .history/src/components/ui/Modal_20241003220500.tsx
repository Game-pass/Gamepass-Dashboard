import React from 'react';
import { Button } from './Buttons';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ onClose, children }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg">
      {children}
      <Button onClick={onClose}>Close</Button>
    </div>
  </div>
);
