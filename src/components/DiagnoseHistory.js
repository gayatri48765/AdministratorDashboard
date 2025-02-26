import React from 'react';
import BloodPressureChart from './BloodPressureChart';
import './css/DiagnoseHistory.css'; 
import heartBPM from './images/HeartBPM@2x.png'
import RespRate from './images/respiratory rate.png'
import Temperature from './images/temperature.png'

const DiagnoseHistory = ({ diagnosisHistory }) => {

  const { value: heartRate } = diagnosisHistory[0].heart_rate;
const { value: respiratoryRate } = diagnosisHistory[0].respiratory_rate;
const { value: temperature } = diagnosisHistory[0].temperature;
  return (
    <div className="diagnose-history">
      <h2>Diagnosis History</h2>
      <BloodPressureChart diagnosisHistory={diagnosisHistory} />

      <div className="info-cards">
        <div className="info-card">
          <img src={RespRate} alt="Icon 1" />  
          <div className="info-text">
            <h5>Respiratory Rate</h5>
            <h1>{respiratoryRate}bpm</h1>
            <p>Normal</p>
          </div>
        </div>

        <div className="info-card">
          <img src={Temperature} alt="Icon 2" />  
          <div className="info-text">
            <h5>Temperature</h5>
            <h1>{temperature}°F</h1>
            <p>Normal</p>
          </div>
        </div>

        <div className="info-card">
          <img src={heartBPM} alt="Icon 3" />
          <div className="info-text">
            <h5>Heart Rate</h5>
            <h1>{heartRate}bpm</h1>
            <p>Lower than Average</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnoseHistory;