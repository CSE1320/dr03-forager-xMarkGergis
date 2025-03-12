import React, { useState } from "react";
import { Search as SearchIcon, Filter } from "lucide-react";

const Search = ({ onSearch, onFilterClick }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm w-full max-w-md">
      <SearchIcon className="text-gray-400" size={20} />
      <input
        type="text"
        placeholder="Search for a mushroom"
        className="flex-grow px-2 outline-none text-gray-700"
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={onFilterClick} className="text-gray-600">
        <Filter size={20} />
      </button>
    </div>
  );
};

export default Search;
