import React from "react"; 
import SearchBar from "./Components/SearchBar"; 
import WordDefinition from "./Components/WordDefinition"; 
import { useState } from "react"; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const App = () => {
  const [wordData, setWordData] = useState(null);

  const handleWordFetch = (data) => {
    setWordData(data);
  };

  return (
    <div className="container mt-5 p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h1 className="text-center text-primary mb-4">Dictionary App</h1>
      <SearchBar onSearch={handleWordFetch} />
      <WordDefinition data={wordData} />
    </div>
  );
};

export default App;
