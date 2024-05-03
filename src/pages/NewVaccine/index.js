import React from 'react';
import Header from '../../components/Header';
import RegisterVaccineForms from './components/Form';

function RegisterVaccine() {
  return (
    <div className="Register" style={{
      background: "#ADD4D0"
    }}>
      <Header showButton={true} loggued={true}/>
      <div style={{
        overflowY: 'auto',
        height: '120vh',
        padding: "20px"
      }}>
        <RegisterVaccineForms />
      </div>
    </div>
  );
}

export default RegisterVaccine;