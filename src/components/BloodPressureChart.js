// components/BloodPressureChart/BloodPressureChart.js
import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import './bloodPressureChart.css';


Chart.register(...registerables); // Register all Chart.js components

const BloodPressureChart = ({diagnosisHistory}) => {
  const chartRef = useRef(null); // Ref for the chart canvas

  useEffect(() => {
  
  // Extract the first 5 records
  const firstFiveRecords = diagnosisHistory.slice(0, 5);
  
  // Initialize systolic and diastolic arrays
  const systolicValues = firstFiveRecords.map(record => record.blood_pressure.systolic.value);
  const diastolicValues = firstFiveRecords.map(record => record.blood_pressure.diastolic.value);
  
  // Define the updated data object
  const data = {
      labels: firstFiveRecords.map((record, index) => `Record ${index + 1}`), // Generic labels
      datasets: [
          {
              label: 'Systolic Blood Pressure',
              data: systolicValues,
              borderColor: '#FF6200', // Orange color for systolic
              backgroundColor: 'rgba(255, 98, 0, 0.2)', // Light orange fill
              borderWidth: 2,
              tension: 0.4, // Smooth line
          },
          {
              label: 'Diastolic Blood Pressure',
              data: diastolicValues,
              borderColor: '#007BC7', // Blue color for diastolic
              backgroundColor: 'rgba(0, 123, 199, 0.2)', // Light blue fill
              borderWidth: 2,
              tension: 0.4, // Smooth line
          },
      ],
  };
  
  // Output result to console (for debugging)
  console.log(data);
  

    // const data = {
    //   labels: ['Oct, 2023', 'Nov, 2023', 'Dec, 2023', 'Jan, 2024', 'Feb, 2024', 'Mar, 2024'], // Years
    //   datasets: [
    //     {
    //       label: 'Systolic Blood Pressure',
    //       data: [120, 125, 130, 128, 132], // Example data
    //       borderColor: '#FF6200', // Orange color for systolic
    //       backgroundColor: 'rgba(255, 98, 0, 0.2)', // Light orange fill
    //       borderWidth: 2,
    //       tension: 0.4, // Smooth line
    //     },
    //     {
    //       label: 'Diastolic Blood Pressure',
    //       data: [80, 82, 85, 83, 84], // Example data
    //       borderColor: '#007BC7', // Blue color for diastolic
    //       backgroundColor: 'rgba(0, 123, 199, 0.2)', // Light blue fill
    //       borderWidth: 2,
    //       tension: 0.4, // Smooth line
    //     },
    //   ],
    // };

    // Chart configuration
    const config = {
      type: 'line', // Line chart
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: false,
            title: {
              display: true,
              text: 'Blood Pressure (mmHg)',
            },
          },
          x: {
            title: {
              display: true,
              text: 'Year',
            },
          },
        },
        plugins: {
          legend: {
            position: 'top', // Position of the legend
          },
          tooltip: {
            enabled: true, // Enable tooltips
          },
        },
      },
    };

    // Create the chart
    const chart = new Chart(chartRef.current, config);

    // Cleanup function to destroy the chart on unmount
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="blood-pressure-chart">
      <h2>Blood Pressure Over Time</h2>
      <div className="chart-container">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default BloodPressureChart;