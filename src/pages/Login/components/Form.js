import React, { useState } from "react";
import { useAuth } from '../../../contexts/auth';
import { doSignInWithEmailAndPassword } from '../../../firebase/auth';
import { Navigate } from 'react-router-dom'

function LoginForms() {
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  });

  const [isSigningIn, setIsSigningIn] = useState(false);
  const { userLoggedIn } = useAuth();
  console.log('userLoggedIn', userLoggedIn)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(formData.email, formData.senha);
    }
    // console.log('Valores do formulário:', formData);
  };

  const handleForgotPassword = () => {
    // Define a rota de redirecionamento para a página de redefinição de senha
    window.location.href ='/recover';
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

  const buttonStylePassnot = {
    width: '200px',
    height: '25px',
    backgroundColor: '#ADD4D0',
    color: '#419ED7',
    fontSize: '20px',
    fontWeight: 700,
    cursor: 'pointer',
    marginTop: '100px',
    marginLeft: '40%',
    fontFamily: 'Averia Libre'
  };

  return (
    <div style={formularioStyle}>
      {userLoggedIn && (<Navigate to={'/vaccines'} replace={true} />)}
      <form onSubmit={handleSubmit}>
        <div style={inputContainerStyle}>
          <label htmlFor="email" style={labelStyle}>E-mail:</label>
          <input type="email" id="email" name="email" style={inputStyle} value={formData.email} onChange={handleChange} />
        </div>
        <div style={inputContainerStyle}>
          <label htmlFor="senha" style={labelStyle}>Senha:</label>
          <input type="password" id="senha" name="senha" style={inputStyle} value={formData.senha} onChange={handleChange} />
        </div>

        <div>
          <button style={buttonStyle} onClick={handleSubmit}>
            Entrar
            {isSigningIn && (
              "Entrando.."
            )}
          </button>
        </div>

        <div>
          <button style={buttonStylePassnot} onClick={handleForgotPassword}>Esqueci a senha</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForms;