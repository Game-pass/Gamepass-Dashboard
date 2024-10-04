import React from 'react';

interface InputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ label, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-sm font-bold text-gray-700">{label}</label>
    <input className="mt-1 block w-full p-2 border rounded text-black text-sm" value={value} onChange={onChange} />
  </div>
);
