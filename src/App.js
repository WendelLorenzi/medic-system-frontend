import React from 'react';
import './App.css';
import Header from './components/Header';
//import Modal from './components/Modal';

function App() {
  return (
    <div className="App">
      <Header showButton={true} loggued={false}/>
      {/* <Modal isOpen={false}/> */}
      <h1>Meu Primeiro Projeto React</h1>
    </div>
  );
}

export default App;