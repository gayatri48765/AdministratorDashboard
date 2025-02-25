import React from 'react';
import BloodPressureChart from './BloodPressureChart';
import './DiagnoseHistory.css'; // Import the CSS file for styling
import heartBPM from './images/HeartBPM@2x.png'
import RespRate from './images/respiratory rate.png'
import Temperature from './images/temperature.png'

const DiagnoseHistory = ({ diagnosisHistory }) => {
  return (
    <section className="diagnose-history">
      <h2>Diagnosis History</h2>
      <BloodPressureChart diagnosisHistory={diagnosisHistory} />

      {/* 3 divs in a flex row */}
      <div className="info-cards">
        <div className="info-card">
          <img src={RespRate} alt="Icon 1" /> {/* Replace with your image path */}
          <div className="info-text">
            <h5>Respiratory Rate</h5>
            <h1>20 bpm</h1>
            <p>Normal</p>
          </div>
        </div>

        <div className="info-card">
          <img src={Temperature} alt="Icon 2" /> {/* Replace with your image path */}
          <div className="info-text">
            <h5>Temperature</h5>
            <h1>98.6°F</h1>
            <p>Normal</p>
          </div>
        </div>

        <div className="info-card">
          <img src={heartBPM} alt="Icon 3" /> {/* Replace with your image path */}
          <div className="info-text">
            <h5>Heart Rate</h5>
            <h1>78 bpm</h1>
            <p>Lower than Average</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnoseHistory;