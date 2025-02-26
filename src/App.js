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
  const [patientData, setPatientData] = useState(null);  
  const [error, setError] = useState(null);  
  const [loading, setLoading] = useState(true);  


   useEffect(() => {
    const getPatientData = async () => {
      try {
        const data = await fetchPatientData();  
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
        <Patients/>
     
        <DiagnoseSection diagnosisHistory={patientData.diagnosis_history} diagnostic_list={patientData.diagnostic_list}/>
       
        <PatientInfo patientData={patientData} />
      
    </div>)
      :''
    }
    
  </div>
  );
}

export default App;
