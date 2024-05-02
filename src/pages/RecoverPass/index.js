import React from 'react';
import Header from '../../components/Header';
import RecoverPassForm from './components/Form';

function RecoverPass() {
  return (
    <div className="RecoverPass" style={{
      background: "#ADD4D0"
    }}>
      <Header showButton={false} loggued={false}/>
      <div style={{
        overflowY: 'auto',
        height: '100vh',
        padding: "20px"
      }}>
        <RecoverPassForm />
      </div>
    </div>
  );
}

export default RecoverPass;