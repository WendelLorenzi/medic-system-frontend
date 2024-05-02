import React from 'react';
import './App.css';
import Header from './components/Header';
//import Card from './components/Card';
//import Modal from './components/Modal';

function App() {
  return (
    <div className="App">
      <Header showButton={true} loggued={false}/>
      {/* <Modal isOpen={false}/> */}
      {/* <Card vaccineName={"Febre Amarela"} qtdDose={"1 dose"} date={"17/03/1198"} img={"./public\assets\image-comprovante.svg"} nextDose={"17/03/2023"}/> */}
      <h1>Meu Primeiro Projeto React</h1>
    </div>
  );
}

export default App;