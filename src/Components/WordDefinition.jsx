import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const WordDefinition = ({ data }) => {
  if (!data || !data.definition) return <p className="text-center text-muted">No definitions found.</p>;

  return (
    <div className="mt-4 text-center p-3" style={{ backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <h3 className="text-success">Word: {data.word}</h3>
      <h5 className="text-secondary">Definition:</h5>
      <p className="lead">{data.definition}</p>
    </div>
  );
};

export default WordDefinition;
