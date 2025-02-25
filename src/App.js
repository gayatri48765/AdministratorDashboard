import {React, useState, useEffect } from 'react';
import { fetchPatientData } from './services/api';
import Patients from './components/Patients';
import Header from './components/Header';
import DiagnoseSection from './components/DiagnoseSection';
import PatientInfo from './components/PatientInfo';
import LabResults from './components/LabResults';
import './App.css';
import './styles.css';

function App() {
  const [patientData, setPatientData] = useState(null); // State to store patient data
  const [error, setError] = useState(null); // State to handle errors
  const [loading, setLoading] = useState(true); // State to handle loading state



   // Fetch patient data from the API
   useEffect(() => {
    const getPatientData = async () => {
      try {
        const data = await fetchPatientData(); // Use the API service
        setPatientData(data.find((item) => item.name === "Jessica Taylor"));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getPatientData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
    <Header/>
    {
      !loading?
      (<div className="main-section">
      {/* <div className="column-1"> */}
        <Patients/>
      {/* </div> */}
      {/* <div className="column-2"> */}
        <DiagnoseSection diagnosisHistory={patientData.diagnosis_history} diagnostic_list={patientData.diagnostic_list}/>
      {/* </div> */}
      {/* <div className="column-3"> */}
        <PatientInfo patientData={patientData} />
      {/* </div> */}
    </div>)
      :''
    }
    
  </div>
  );
}

export default App;
