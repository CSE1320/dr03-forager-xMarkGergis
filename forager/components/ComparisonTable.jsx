import React from "react";
import MushroomCard from "./MushroomCard";

const ComparisonTable = ({ userMushroom, comparedMushroom, characteristics }) => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex justify-center gap-6 mb-4">
        <MushroomCard 
          image={userMushroom.image} 
          name="Your Photo" 
        />
        <MushroomCard 
          image={comparedMushroom.image} 
          name={comparedMushroom.name} 
          matchPercentage={comparedMushroom.matchPercentage} 
          danger={comparedMushroom.danger} 
        />
      </div>
      <table className="w-full border-collapse border border-gray-300 text-left">
        <tbody>
          {characteristics.map((char, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2 text-gray-600 flex items-center gap-2">
                <span>❌</span> {char.userValue}
              </td>
              <td className="border border-gray-300 px-4 py-2 font-bold">{char.label}</td>
              <td className="border border-gray-300 px-4 py-2">{char.comparedValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;