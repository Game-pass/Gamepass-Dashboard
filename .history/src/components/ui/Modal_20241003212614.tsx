import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ children, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" onClick={onClose}>
    <div className="bg-white p-11 rounded-lg" onClick={(e) => e.stopPropagation()}>
      {children}
      <button 
        onClick={onClose} 
        className="mt-4 bg-red-500 text-sm text-white rounded pt-pb- pr-4 pl-4"
        
        >
            Close
        </button>
    </div>
  </div>
);
