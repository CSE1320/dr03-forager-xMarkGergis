"use client";

import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Search from "../../components/Search";
import PillList from "../../components/PillList";
import MushroomList from "../../components/MushroomList";
import FilterSettings from "../../components/FilterSettings";
import filtersData from "../../data/filters";
import mushroomsData from "../../data/mushrooms";

export default function DashboardPage() {
  const [filters] = useState(filtersData);
  const [selectedFilters, setSelectedFilters] = useState({ tag: [], region: [], type: [] });
  const [mushrooms, setMushrooms] = useState(mushroomsData);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    filterMushrooms(selectedFilters);
  }, [selectedFilters]);

  const handleSearch = (query) => {
    const filteredMushrooms = mushroomsData.filter((mushroom) =>
      mushroom.name.toLowerCase().includes(query.toLowerCase())
    );
    setMushrooms(filteredMushrooms);
  };

  const handleFilterChange = (updatedFilters) => {
    setSelectedFilters(updatedFilters);
  };

  const filterMushrooms = (filters) => {
    let filteredMushrooms = mushroomsData;
    
    if (filters.type.length) {
      filteredMushrooms = filteredMushrooms.filter((mushroom) => 
        filters.type.includes("Poisonous") ? mushroom.danger : !mushroom.danger
      );
    }
    
    setMushrooms(filteredMushrooms);
  };

  return (
    <div className="p-6">
      <NavBar />
      <div className="text-green-800">
        <p className="text-xl font-semibold">Hi,</p>
        <h1 className="text-2xl font-bold ml-4">Chantelle!</h1>
      </div>
      
      <div className="mt-4">
        <Search onSearch={handleSearch} onFilterClick={() => setShowFilter(true)} />
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-bold">My Collection</h2>
        <PillList pills={filters.filter(pill => selectedFilters[pill.category]?.includes(pill.label))} activeFilters={selectedFilters} onPillClick={(pill) => console.log("Filter selected:", pill)} />
        <MushroomList mushrooms={mushrooms} />
      </div>

      {showFilter && <FilterSettings onClose={() => setShowFilter(false)} onFilterChange={handleFilterChange} initialFilters={selectedFilters} />}
    </div>
  );
}