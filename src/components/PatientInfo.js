// components/PatientInfo/PatientInfo.js
import React from 'react'
import './css/PatientInfo.css';
import Layer2 from '../components/images/users/Layer 2@2x.png'
import BirthIcon from './images/icons/BirthIcon.svg'
import FemaleIcon from './images/icons/FemaleIcon.svg'
import PhoneIcon from "./images/icons/PhoneIcon.svg"
import InsuranceIcon from './images/icons/InsuranceIcon.svg'
import LabResults from './LabResults';

const PatientInfo = ({patientData}) => {
  return (
    <section className='column-3'>
      <div className='patient-info'>
      <div className="profile-picture">
        <img src={patientData?.profile_picture } alt="Profile" />
      </div>
      <h2 className="patient-name">{patientData?.name || 'No Name Available'}</h2>
      <div className="info-sections">
        <div className="info-item">
          <img src={BirthIcon}  className="info-icon"/>  
          <div className="info-content">
            <h3>Date of Birth</h3>
            <p>{patientData?.date_of_birth || 'N/A'}</p>
          </div>
        </div>

        <div className="info-item">
        <img src={FemaleIcon}  className="info-icon"/>  
          <div className="info-content">
            <h3>Gender</h3>
            <p>{patientData?.gender || 'N/A'}</p>
          </div>
        </div>

        <div className="info-item">
        <img src={PhoneIcon}  className="info-icon"/>  
          <div className="info-content">
            <h3>Contact Info</h3>
            <p>{patientData?.phone_number || 'N/A'}</p>
          </div>
        </div>

        <div className="info-item">
        <img src={PhoneIcon}  className="info-icon"/>  
          <div className="info-content">
            <h3>Emergency Contact</h3>
            <p>{patientData?.emergency_contact || 'N/A'}</p>
          </div>
        </div>

        <div className="info-item">
        <img src={InsuranceIcon}  className="info-icon"/>  
          <div className="info-content">
            <h3>Insurance Provider</h3>
            <p>{patientData?.insurance_type  || 'N/A'}</p>
          </div>
        </div>
      </div>
      <button className="action-button">Show All Information</button>
      </div>
      <LabResults labResults={patientData.lab_results}></LabResults>
    </section>
  );
};

export default PatientInfo;