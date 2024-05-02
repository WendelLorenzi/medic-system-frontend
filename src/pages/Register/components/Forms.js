import React from 'react';

class RegisterForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      sexo: '',
      data: '',
      email: '',
      senha: '',
      confirmarSenha: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Valores do formulário:', this.state);
  };

  handlePasswordMatch = () => {
    const { senha, confirmarSenha } = this.state;
    return senha === confirmarSenha;
  };

  render() {
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
      marginLeft: '380px'
    };

    return (
      <div style={formularioStyle}>
        <form onSubmit={this.handleSubmit}>
          <div style={inputContainerStyle}>
            <label htmlFor="nome" style={labelStyle}>Nome Completo:</label>
            <input type="text" id="nome" name="nome" style={inputStyle} value={this.state.nome} onChange={this.handleChange} />
          </div>
          <div style={inputContainerStyle}>
            <label htmlFor="sexo" style={labelStyle}>Sexo:</label>
            <div style={{
              marginLeft: '100px'
            }}>
              <input type="radio" id="masculino" name="sexo" value="masculino" checked={this.state.sexo === 'masculino'} onChange={this.handleChange} />
              <label htmlFor="masculino" style={RadioptsConfig}>Masculino</label>
            </div>
            <div>
              <input type="radio" id="feminino" name="sexo" value="feminino" checked={this.state.sexo === 'feminino'} onChange={this.handleChange} />
              <label htmlFor="feminino" style={RadioptsConfig}>Feminino</label>
            </div>
          </div>
          <div style={inputContainerStyle}>
            <label htmlFor="data" style={labelStyle}>Data Nascimento:</label>
            <input type="date" id="data" name="data" style={inputStyle} value={this.state.data} onChange={this.handleChange} />
          </div>
          <div style={inputContainerStyle}>
            <label htmlFor="email" style={labelStyle}>E-mail:</label>
            <input type="email" id="email" name="email" style={inputStyle} value={this.state.email} onChange={this.handleChange} />
          </div>
          <div style={inputContainerStyle}>
            <label htmlFor="senha" style={labelStyle}>Senha:</label>
            <input type="password" id="senha" name="senha" style={inputStyle} value={this.state.senha} onChange={this.handleChange} />
          </div>
          <div style={inputContainerStyle}>
            <label htmlFor="confirmarSenha" style={labelStyle}>Repetir Senha:</label>
            <input type="password" id="confirmarSenha" name="confirmarSenha" style={inputStyle} value={this.state.confirmarSenha} onChange={this.handleChange} />
          </div>
          {!this.handlePasswordMatch() && (
            <div style={NotMathPassText}>
                Senha não confere!
            </div>
          )}
          <div>
            <button style={buttonStyle} disabled={!this.handlePasswordMatch()} onClick={this.handleSubmit}>Cadastrar</button>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterForms;