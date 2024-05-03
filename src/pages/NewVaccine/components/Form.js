import React from 'react';

class RegisterVaccineForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      dose: '',
      vaccine: '',
      proxima: ''
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
      width: '1250px',
      height: '670px',
      position: 'absolute',
      top: '30%',
      left: '60%px'
    };

    const inputContainerStyle = {
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center'
    };

    const labelStyle = {
      marginRight: '1%',
      fontFamily: 'Averia Libre',
      fontSize: '26px',
      fontWeight: 400,
      color: '#ffff'
    };

    const labelVaccineName = {
        marginRight: '12%',
        fontFamily: 'Averia Libre',
        fontSize: '26px',
        fontWeight: 400,
        color: '#ffff'
      };

    const inputStyle = {
      width: '20%',
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

    const buttonImgStyle = {
        width: '300px',
        height: '47px',
        backgroundColor: '#419ED7',
        color: 'white',
        fontSize: '18px',
        fontWeight: 'bold',
        border: '1px',
        borderRadius: '5px',
        cursor: 'pointer',
        //marginTop: '80px',
        //marginLeft: '380px',
        fontFamily: 'Averia Libre'
      };

    return (
      <div style={formularioStyle}>
        <form onSubmit={this.handleSubmit}>
        <div style={inputContainerStyle}>
            <label htmlFor="data" style={labelStyle}>Data da Vacinação:</label>
            <input type="date" id="data" name="data" style={inputStyle} value={this.state.data} onChange={this.handleChange} />
          </div>
          <div style={inputContainerStyle}>
            <label htmlFor="nome" style={labelVaccineName}>Vacina:</label>
            <input type="text" id="nome" name="nome" style={inputStyle} value={this.state.vaccine} onChange={this.handleChange} />
          </div>
          <div style={inputContainerStyle}>
            <label htmlFor="dose" style={labelStyle}>Dose:</label>
            <div style={{
              marginLeft: '12%'
            }}>
              <input type="radio" id="1dose" name="dose" value="1a" checked={this.state.dose === '1a'} onChange={this.handleChange} />
              <label htmlFor="1aDose" style={RadioptsConfig}>1a. dose</label>
            </div>
            <div>
              <input type="radio" id="2dose" name="dose" value="2a" checked={this.state.dose === '2a'} onChange={this.handleChange} />
              <label htmlFor="2aDose" style={RadioptsConfig}>2a. dose</label>
            </div>
            <div>
              <input type="radio" id="3dose" name="dose" value="3a" checked={this.state.dose === '3a'} onChange={this.handleChange} />
              <label htmlFor="3aDose" style={RadioptsConfig}>3a. dose</label>
            </div>
            <div>
              <input type="radio" id="reforco" name="dose" value="reforco" checked={this.state.dose === 'reforco'} onChange={this.handleChange} />
              <label htmlFor="reforco" style={RadioptsConfig}>Reforço</label>
            </div>
            <div>
              <input type="radio" id="unica" name="dose" value="unica" checked={this.state.dose === 'unica'} onChange={this.handleChange} />
              <label htmlFor="unica" style={RadioptsConfig}>Dose única</label>
            </div>
          </div>
          <div style={inputContainerStyle}>
          <label htmlFor="data" style={labelStyle}>Comprovante da vacina:</label>
            <button style={buttonImgStyle}>
                Selecionar imagem...
            </button>
          </div>
          <div style={inputContainerStyle}>
            <label htmlFor="data" style={labelStyle}>Próxima Vacinação:</label>
            <input type="date" id="proxima" name="proxima" style={inputStyle} value={this.state.proxima} onChange={this.handleChange} />
          </div>
          <div>
            <button style={buttonStyle} onClick={this.handleSubmit}>Cadastrar</button>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterVaccineForms;