import React from 'react';
import './App.css';
import Header from './components/Header';
//import Card from './components/Card';
//import Modal from './components/Modal';

function App() {
  const textStyle = {
    color: '#419ED7',
    fontFamily: 'Averia Libre',
    fontWeight: 400,
    fontSize: '55px',
    width: '800px',
    height: '160px',
    marginLeft: '18%',
    marginRigth: '18%',
    marginTop: '10%',
  }

  const buttonStyle = {
    background: '#419ED7',
    color: '#ffff',
    fontFamily: 'Averia Libre',
    fontWeight: 400,
    fontSize: '28px',
    width: '300px',
    height: '60px',
    marginTop: '8%',
  };

  return (
    <div className="App" style={{
      background: "#ADD4D0"
    }}>
      <Header showButton={true} loggued={false}/>
      <div style={{
        overflowY: 'auto',
        height: '120vh',
        padding: "20px"
      }}>
        <div style={textStyle}>
          Controle as suas vacinas e fique seguro
        </div>
        <button style={buttonStyle} onClick={() => window.location.href ='/register'}>
          Criar minha conta
        </button>
        
      </div>
    </div>
  );
}

export default App;