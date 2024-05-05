import React, { useState } from 'react';
import { doPasswordReset } from '../../../firebase/auth';

const RecoverPassForm = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await doPasswordReset(email);
  };

  const formularioStyle = {
    width: '700px',
    height: '400px',
    position: 'absolute',
    top: '200px',
    left: '330px'
  };

  const inputContainerStyle = {
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center'
  };

  const labelStyle = {
    marginRight: '10px',
    fontFamily: 'Averia Libre',
    fontSize: '26px',
    fontWeight: 400,
    color: '#ffff'
  };

  const inputStyle = {
    width: '80%',
    height: '46px',
    fontSize: '26px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '5px',
    color: "#3F92C5",
    fontFamily: 'Averia Libre',
    fontWeight: 400
  };

  const buttonStyle = {
    width: '200px',
    height: '50px',
    backgroundColor: '#37BD6D',
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
    border: '1px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '80px',
    marginLeft: '40%',
    fontFamily: 'Averia Libre'
  };

  return (
    <div style={formularioStyle}>
      <form onSubmit={handleSubmit}>
        <div style={inputContainerStyle}>
          <label htmlFor="email" style={labelStyle}>E-mail:</label>
          <input type="email" id="email" name="email" style={inputStyle} value={email} onChange={handleChange} />
        </div>

        <div>
          <button style={buttonStyle} onClick={handleSubmit}>Redefinir Senha</button>
        </div>

      </form>
    </div>
  );
};

export default RecoverPassForm;