import React, { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js';
import './css/bloodPressureChart.css';
import expandIcon from './images/icons/expand.png'
import arrowUp from './images/icons/ArrowUp.svg'

import arrowDown from './images/icons/ArrowDown.svg'

Chart.register(...registerables);  

const BloodPressureChart = ({diagnosisHistory}) => {
  const chartRef = useRef(null); // Ref for the chart canvas
  const [highestDiastolic,setHighestDiastolic]=useState({})
  const [highestSystolic,setHighestSystolic]=useState({})


  useEffect(() => {
  const firstFiveRecords = diagnosisHistory.slice(0, 5);
  const systolicValues = firstFiveRecords.map(record => record.blood_pressure.systolic.value);
  const diastolicValues = firstFiveRecords.map(record => record.blood_pressure.diastolic.value);
  console.log(firstFiveRecords)

  let highestSystolic = { value: -Infinity, levels: "" };
let highestDiastolic = { value: -Infinity, levels: "" };

firstFiveRecords.forEach(record => {
    const { systolic, diastolic } = record.blood_pressure;

    if (systolic.value > highestSystolic.value) {
      setHighestSystolic( { value: systolic.value, levels: systolic.levels })
    }

    if (diastolic.value > highestDiastolic.value) {
        setHighestDiastolic( { value: diastolic.value, levels: diastolic.levels })
    }
});

  const data = {
      labels: firstFiveRecords.map((record, index) => ` ${record.month.slice(0,3)},${record.year}`), // Generic labels
      datasets: [
          {
              label: 'Systolic Blood Pressure',
              data: systolicValues,
              borderColor: '#E66FD2',  
              backgroundColor: '#E66FD2',
              borderWidth: 2,
              tension: 0.4,
          },
          {
              label: 'Diastolic Blood Pressure',
              data: diastolicValues,
              borderColor: '#8C6FE6',  
              backgroundColor: '#8C6FE6',  
              borderWidth: 2,
              tension: 0.4,  
          },
      ],
  };
  console.log(data);

    const config = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false, 
        scales: {
          y: {
            beginAtZero: false,
            title: {
              display: true,
            },
          },
          x: {
            title: {
              display: true,
            },
          },
        },
        plugins: {
          legend: {
            display: false,  
          },
          tooltip: {
            enabled: true, 
          },
        },
      },
    };
    const chart = new Chart(chartRef.current, config);

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="blood-pressure-chart">
    <div >
      <div className='bp-heading'><h2>Blood Pressure</h2><p>Last 6 months<img className="expand-icon" src={expandIcon}/></p></div>
      <div className="chart-container">
        <div className='canvas'>
        <canvas style={{height:'263px', width:'100%', maxWidth:'480px'}} ref={chartRef}></canvas>
        </div>
      </div>
    </div>
     <div className='chart-info'>
     <div>
     <h3>
<span className="circle-1"></span> Systolic
</h3>
     <h1>{highestSystolic.value}</h1>
     <p><img src={arrowUp} className="arrowUp"/>{highestSystolic.levels}</p>
   </div>
   <div>
     <h3><span className="circle-2"></span>Systolic</h3>
     <h1>{highestDiastolic.value}</h1>
     <p><img src={arrowDown} className="arrowDown"/> {highestDiastolic.levels}</p>
   </div>
   
   </div>
   </div>
  );
};

export default BloodPressureChart;