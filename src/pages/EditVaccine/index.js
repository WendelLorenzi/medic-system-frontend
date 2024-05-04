import React from 'react';
import Header from '../../components/Header';
import EditVaccineForms from './components/Form';

function EditVaccine() {
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
        <EditVaccineForms />
      </div>
    </div>
  );
}

export default EditVaccine;