import React from 'react';
import './css/labResults.css'; 
import downloadIcon from './images/icons/download_FILL0_wght300_GRAD0_opsz24 (1).svg'

const LabResults = ({ labResults }) => {
  const results = labResults || ['Result 1', 'Result 2', 'Result 3', 'Result 4', 'Result 5'];
  const handleItemClick = (result) => {
    console.log('Clicked:', result);
  };

  return (
    <div className="lab-results">
      <h2>Lab Results</h2>
      <div className="scrollable-list">
        {results.map((result, index) => (
          <div
            key={index}
            className="list-item"
            onClick={() => handleItemClick(result)}
          >
            <span>{result}</span>
            <img src={downloadIcon}/>  
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabResults;