"use client";

import { useState, useEffect } from "react";

const Filter = ({ onClose, onFilterChange, initialFilters }) => {
  const [selected, setSelected] = useState(initialFilters || { tag: [], region: [], type: [] });

  useEffect(() => {
    if (initialFilters) {
      setSelected(initialFilters);
    }
  }, [initialFilters]);

  const handleSelect = (category, item) => {
    setSelected((prev) => {
      const isSelected = prev[category].includes(item);
      const updatedCategory = isSelected
        ? prev[category].filter((i) => i !== item)
        : [...prev[category], item];

      const updatedFilters = { ...prev, [category]: updatedCategory };
      onFilterChange(updatedFilters);
      return updatedFilters;
    });
  };

  const options = {
    tag: ["Favorites", "Recents"],
    region: ["Texas", "North America", "South America", "Asia", "Europe", "Africa"],
    type: ["Poisonous", "Medicinal", "Mythical", "Good for Broths"],
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-4 rounded-xl w-72 shadow">
        <div className="flex justify-center relative">
          <h2 className="text-lg font-bold">FILTER</h2>
          <button onClick={onClose} className="absolute right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {Object.entries(options).map(([category, items]) => (
          <div key={category} className="mt-3">
            <h3 className="text-sm font-bold">{category}</h3>
            <div className="flex flex-wrap gap-1 mt-1">
              {items.map((item) => (
                <button
                  key={item}
                  className={`px-2 py-1 text-xs rounded-full ${
                    selected[category].includes(item) ? "bg-[#589477] text-white" : "bg-gray-300 text-gray-700"
                  }`}
                  onClick={() => handleSelect(category, item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;