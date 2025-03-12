import React from "react";
import { AlertTriangle } from "lucide-react";

const MushroomCard = ({ image, name, matchPercentage, danger }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-40 border rounded-lg overflow-hidden shadow-md">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        {matchPercentage !== undefined && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
            {matchPercentage}%
            {danger && <AlertTriangle size={12} className="text-white" />}
          </div>
        )}
        {matchPercentage === undefined && danger && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
            <AlertTriangle size={12} className="text-white" />
          </div>
        )}
      </div>
      <p className="text-center text-sm font-semibold mt-2">{name}</p>
    </div>
  );
};

export default MushroomCard;
