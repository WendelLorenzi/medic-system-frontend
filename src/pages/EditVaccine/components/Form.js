import React, { useState, useEffect } from 'react';
import Modal from '../../../components/Modal';
import { useParams } from 'react-router-dom';
import { getVaccineById, updateVaccine } from '../../../firebase/firestore';

const EditVaccineForms = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    data: '',
    dose: '',
    vaccine: '',
    proxima: '',
    comprovante: null,
    openModal: false // Adicionado ao estado inicial
  });

  const getVaccine = async (cardId) => {
    const vaccine = await getVaccineById(cardId);
    console.log('vaccine', vaccine)
    setFormData({...vaccine, openModal: false});
  };

  useEffect(() => {
    getVaccine(id);
  }, []);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateVaccine(id, {
      comprovante: formData.comprovante,
      data: formData.data,
      dose: formData.dose,
      vaccine: formData.vaccine,
      proxima: formData.proxima
    });
    console.log('Valores do formulário:', formData);
  };

  const handleModal = () => {
    setFormData({ ...formData, openModal: true });
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setFormData({ ...formData, comprovante: event.target.result });
    };

    reader.readAsDataURL(file);
  };

    const formularioStyle = {
      width: '1250px',
      position: 'absolute',
      top: '25%',
      left: '60%px',
      paddingLeft: '50px'
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
        fontFamily: 'Averia Libre',
        alignContent: 'center',
        textAlign: 'center'
      };

      const topRightButtonStyle = {
        position: 'absolute',
        width: '130px',
        height: '40px',
        right: '20px',
        backgroundColor: '#FD7979',
        color: 'white',
        fontSize: '18px',
        fontWeight: 'bold',
        border: '1px',
        //borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
        fontFamily: 'Averia Libre'
      };

      const { openModal } = formData;
    return (
      <>
      <button style={topRightButtonStyle} onClick={handleModal}>
      <img src="../../../public/assets/trashIcon.png" alt={""} />
        Excuir
      </button>
      <div style={formularioStyle}>
        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
            {openModal && (
                 <Modal isOpen={true} cardId={id}/>
            )}
        <div style={{
          marginLeft: '4.5%',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center'
        }}>
            <label htmlFor="data" style={labelStyle}>Data da Vacinação:</label>
            <input type="date" id="data" name="data" style={inputStyle} value={formData.data} onChange={handleChange} />
          </div>
          <div style={{
          marginLeft: '15%',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center'
        }}>
            <label htmlFor="nome" style={labelVaccineName}>Vacina:</label>
            <input type="text" id="nome" name="nome" style={{
                    width: '23%',
                    height: '46px',
                    fontSize: '26px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    padding: '5px',
                    color: "#3F92C5",
                    fontFamily: 'Averia Libre',
                    fontWeight: 400,
                    marginLeft: '12px'
            }} value={formData.vaccine} onChange={handleChange} />
          </div>
          <div style={{
          marginLeft: '16.5%',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center'
        }}>
            <label htmlFor="dose" style={labelStyle}>Dose:</label>
            <div>
              <input type="radio" id="1dose" name="dose" value="1a" checked={formData.dose === '1a'} onChange={handleChange} />
              <label htmlFor="1aDose" style={RadioptsConfig}>1a. dose</label>
            </div>
            <div>
              <input type="radio" id="2dose" name="dose" value="2a" checked={formData.dose === '2a'} onChange={handleChange} />
              <label htmlFor="2aDose" style={RadioptsConfig}>2a. dose</label>
            </div>
            <div>
              <input type="radio" id="3dose" name="dose" value="3a" checked={formData.dose === '3a'} onChange={handleChange} />
              <label htmlFor="3aDose" style={RadioptsConfig}>3a. dose</label>
            </div>
            <div>
              <input type="radio" id="reforco" name="dose" value="reforco" checked={formData.dose === 'reforco'} onChange={handleChange} />
              <label htmlFor="reforco" style={RadioptsConfig}>Reforço</label>
            </div>
            <div>
              <input type="radio" id="unica" name="dose" value="unica" checked={formData.dose === 'unica'} onChange={handleChange} />
              <label htmlFor="unica" style={RadioptsConfig}>Dose única</label>
            </div>
          </div>
          <div style={inputContainerStyle}>
          <label htmlFor="data" style={labelStyle}>Comprovante da vacina:</label>
            <input type="file" id="comprovante" name="comprovante" style={{ display: 'none' }} onChange={handleFileSelect} />
            <label htmlFor="comprovante" style={buttonImgStyle}>
              Selecionar imagem...
            </label>
          </div>
          {formData.comprovante && (
            <div style={inputContainerStyle}>
              <img src={formData.comprovante} alt="Imagem selecionada" style={{ maxWidth: '100%', maxHeight: '200px', marginLeft: '23%' }} />
            </div>
          )}
          <div style={{
          marginLeft: '4.3%',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center'
        }}>
            <label htmlFor="data" style={labelStyle}>Próxima Vacinação:</label>
            <input type="date" id="proxima" name="proxima" style={inputStyle} value={formData.proxima} onChange={handleChange} />
          </div>
          <div>
            <button style={buttonStyle} onClick={handleSubmit}>Salvar Alterações</button>
          </div>
        </form>
      </div>
      </>
    );
}

export default EditVaccineForms;