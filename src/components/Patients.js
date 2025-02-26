// import React, { use } from 'react';
// import './Patients.css'; 
// import SearchIcon from './images/icons/search.png';
// import user from './images/icons/user.png'



// const Patients = () => {
//   const patients = [
//     { id: 1, name: 'Patient 1', info: 'Age: 30, Gender: Male', photo: user },
//     { id: 2, name: 'Patient 2', info: 'Age: 25, Gender: Female', photo: '/patient2.jpg' },
//     { id: 3, name: 'Patient 3', info: 'Age: 40, Gender: Male', photo: '/patient3.jpg' },
//     { id: 4, name: 'Patient 4', info: 'Age: 35, Gender: Female', photo: '/patient4.jpg' },
//     { id: 5, name: 'Patient 5', info: 'Age: 28, Gender: Male', photo: '/patient5.jpg' },
//   ];

//   return (
//     <section className="patients-section">
//       <div className="patients-header">
//         <h2>Patients</h2>
//         <div className="search-icon">
//           <img src={SearchIcon} alt="Search" /> {/* Replace with your search icon path */}
//         </div>
//       </div>
//       <div className="patients-list">
//         {patients.map((patient) => (
//           <div key={patient.id} className="patient-card">
//             <div className="patient-photo">
//               <img src={patient.photo} alt={patient.name} />
//             </div>
//             <div className="patient-info">
//               <h3>{patient.name}</h3>
//               <p>{patient.info}</p>
//             </div>
//             <div className="patient-menu">
//               <img src="/three-dots.png" alt="Menu" /> {/* Replace with your three dots icon path */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Patients;

// Patients.js
import React, { useState } from "react";
import "./Patients.css";
import SearchIcon from "./images/icons/search.png";
import moreHoriz from "./images/icons/more_horiz.png";
import initialPatients from './data/patientData'; 

// 🎴 Patient Card Component
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

// 📋 Patient List Component
const PatientList = ({ patients }) => (
  <div className="patients-list">
    {patients.map((patient) => (
      <PatientCard key={patient.id} patient={patient} />
    ))}
  </div>
);

// 🏥 Main Patients Component
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

