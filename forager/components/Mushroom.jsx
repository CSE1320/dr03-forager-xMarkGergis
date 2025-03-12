import React from "react";
import { PlusCircle } from "lucide-react";

const Mushroom = ({ image, name, scientificName, facts, description, onAdd }) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="border rounded-lg overflow-hidden shadow-md mb-4">
        <img src={image} alt={name} className="w-full object-cover" />
      </div>
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
          <p className="text-gray-500 italic">{scientificName}</p>
        </div>
        <button onClick={onAdd} className="bg-green-600 text-white p-2 rounded-full shadow">
          <PlusCircle size={24} />
        </button>
      </div>
      <div className="bg-red-700 text-white p-4 rounded-lg mb-4">
        <h3 className="font-bold">Fast Facts</h3>
        {facts.map((fact, index) => (
          <p key={index} className="text-sm">{fact}</p>
        ))}
      </div>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
};

export default Mushroom;