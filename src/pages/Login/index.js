import React from 'react';
import Header from '../../components/Header';
import LoginForms from './components/Form';

function Login() {
  return (
    <div className="Login" style={{
      background: "#ADD4D0"
    }}>
      <Header showButton={false} loggued={false}/>
      <div style={{
        overflowY: 'auto',
        height: '100vh',
        padding: "20px"
      }}>
        <LoginForms />
      </div>
    </div>
  );
}

export default Login;