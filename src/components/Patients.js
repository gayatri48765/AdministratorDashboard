import React, { useState } from "react";
import "./css/Patients.css";
import SearchIcon from "./images/icons/search.png";
import moreHoriz from "./images/icons/more_horiz.png";
import initialPatients from './data/patientData'; 

const PatientCard = ({ patient }) => (
  <div className="patient-card">
    <div className="patient-photo">
      <img src={patient.photo} alt={patient.name} />
    </div>
    <div className="patientList-info">
      <h3>{patient.name}</h3>
      <p>{patient.gender}, {patient.age}</p>
    </div>
    <div className="patient-menu">
      <img src={moreHoriz} alt="Menu" />
    </div>
  </div>
);

const PatientList = ({ patients }) => (
  <div className="patients-list">
    {patients.map((patient) => (
      <PatientCard key={patient.id} patient={patient} />
    ))}
  </div>
);

const Patients = () => {
  const [patients] = useState(initialPatients);

  return (
    <section className="column-1 patients-section">
      <div className="patients-header">
        <h2>Patients</h2>
        <div className="search-icon">
          <img src={SearchIcon} alt="Search" />
        </div>
      </div>
      <PatientList patients={patients} />
    </section>
  );
};

export default Patients;

