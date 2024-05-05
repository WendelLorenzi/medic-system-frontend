import React, { useState } from 'react';
import { useAuth } from '../../../contexts/auth';
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth';
import { Navigate } from 'react-router-dom'
import { createUser } from '../../../firebase/firestore';

function RegisterForms() {
  const [formData, setFormData] = useState({
    nome: '',
    sexo: '',
    data: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  });

  const [isRegistering, setIsRegistering] = useState(false);
  const { userLoggedIn } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isRegistering) {
      setIsRegistering(true);
      await createUser(formData);
      await doCreateUserWithEmailAndPassword(formData.email, formData.senha);
    }
    // console.log('Valores do formulário:', formData);
  };

  const handlePasswordMatch = () => {
    const { senha, confirmarSenha } = formData;
    return senha === confirmarSenha;
  };

  const formularioStyle = {
    width: '865px',
    height: '582px',
    position: 'absolute',
    top: '200px',
    left: '286px'
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

  const RadioptsConfig = {
    color: '#ffff',
    fontFamily: 'Averia Libre',
    fontWeight: 400,
    fontSize: '26px'
  };

  const NotMathPassText = {
    color: '#FD7979',
    fontFamily: 'Averia Libre',
    fontWeight: 400,
    fontSize: '20px'
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
    marginLeft: '380px',
    fontFamily: 'Averia Libre'
  };

  return (
    <div style={formularioStyle}>
      {userLoggedIn && (<Navigate to={'/vaccines'} replace={true} />)}
      <form onSubmit={handleSubmit}>
        <div style={inputContainerStyle}>
          <label htmlFor="nome" style={labelStyle}>Nome Completo:</label>
          <input type="text" id="nome" name="nome" style={inputStyle} value={formData.nome} onChange={handleChange} />
        </div>
        <div style={inputContainerStyle}>
          <label htmlFor="sexo" style={labelStyle}>Sexo:</label>
          <div style={{
            marginLeft: '100px'
          }}>
            <input type="radio" id="masculino" name="sexo" value="masculino" checked={formData.sexo === 'masculino'} onChange={handleChange} />
            <label htmlFor="masculino" style={RadioptsConfig}>Masculino</label>
          </div>
          <div>
            <input type="radio" id="feminino" name="sexo" value="feminino" checked={formData.sexo === 'feminino'} onChange={handleChange} />
            <label htmlFor="feminino" style={RadioptsConfig}>Feminino</label>
          </div>
        </div>
        <div style={inputContainerStyle}>
          <label htmlFor="data" style={labelStyle}>Data Nascimento:</label>
          <input type="date" id="data" name="data" style={inputStyle} value={formData.data} onChange={handleChange} />
        </div>
        <div style={inputContainerStyle}>
          <label htmlFor="email" style={labelStyle}>E-mail:</label>
          <input type="email" id="email" name="email" style={inputStyle} value={formData.email} onChange={handleChange} />
        </div>
        <div style={inputContainerStyle}>
          <label htmlFor="senha" style={labelStyle}>Senha:</label>
          <input type="password" id="senha" name="senha" style={inputStyle} value={formData.senha} onChange={handleChange} />
        </div>
        <div style={inputContainerStyle}>
          <label htmlFor="confirmarSenha" style={labelStyle}>Repetir Senha:</label>
          <input type="password" id="confirmarSenha" name="confirmarSenha" style={inputStyle} value={formData.confirmarSenha} onChange={handleChange} />
        </div>
        {!handlePasswordMatch() && (
          <div style={NotMathPassText}>
            Senha não confere!
          </div>
        )}
        <div>
          <button style={buttonStyle} disabled={!handlePasswordMatch()} onClick={handleSubmit}>
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForms;