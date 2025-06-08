import React from 'react';

export const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md text-white relative">
        <button onClick={onClose} className="absolute top-3 right-4 text-white text-xl">&times;</button>
        {children}
      </div>
    </div>
  );
};