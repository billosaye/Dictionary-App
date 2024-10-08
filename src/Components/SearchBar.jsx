import React, { useState } from 'react';
import fetchWordData from '../Utils/fetchWordData';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const SearchBar = ({ onSearch }) => { 
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    if (search.trim() !== "") {
      try {
        const wordData = await fetchWordData(
          "https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary",
          search
        );
        onSearch(wordData); 
        setSearch("");
      } catch (error) {
        console.error("Error fetching word data:", error);
      }
    }
  };

  return (
    <div className="d-flex justify-content-center mb-3">
      <input
        className="form-control me-2 w-50"
        type="text"
        placeholder="Enter word"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <button onClick={handleSearch} className="btn btn-primary">Search</button>
    </div>
  );
};

export default SearchBar;
