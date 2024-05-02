import React from 'react';

class Card extends React.Component {
  render() {

    const { vaccineName, qtdDose, date, img, nextDose } = this.props;

    const cardStyle = {
      width: '330px',
      height: '321px',
      position: 'fixed',
      top: '215px',
      left: '159px',
      opacity: '0px'
    };

    const titleStyle = {
      fontFamily: 'Averia Libre',
      fontSize: '36px',
      fontWeight: '400',
      lineHeight: '43px',
      textAlign: 'center'
    };

    const tagStyle = {
      width: '88px',
      height: '20px',
      position: 'fixed',
      left: '280px',
      fontFamily: 'Averia Libre',
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '19.09px',
      textAlign: 'center',
      background: '#3F92C5'
    };

    const dateStyle = {
      width: '118px',
      height: '21px',
      position: 'fixed',
      left: '285px',
      fontFamily: 'Averia Libre',
      fontSize: '16px',
      fontWeight: '400',
      textAlign: 'left',
      color: '#8B8B8B',
      marginTop: '30px'
    };

    const imageStyle = {
        width: '299px',
        height: '146px',
        position: 'fixed',
        left: '173px',
        marginTop: '70px'
      };

      const textStyle = {
        width: '305px',
        height: '18px',
        position: 'fixed',
        left: '172px',
        gap: '0px',
        opacity: '0px',
        fontFamily: 'Averia Libre',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '19.09px',
        textAlign: 'right',
        color: '#FD7979',
        marginTop: '240px'
      };

    return (
      <div style={cardStyle}>
        <div style={titleStyle}>{vaccineName}</div>
        <div style={tagStyle}>{qtdDose}</div>
        <div style={dateStyle}>{date}</div>
        <div  style={imageStyle}>
            <img src={img} alt="Imagem" />
        </div>
        <div style={textStyle}>Próxima dose em: {nextDose}</div>
      </div>
    );
  }
}

Card.defaultProps = {
    vaccineName: '',
    qtdDose: '',
    date: '',
    img: '',
    nextDose: ''
  };

export default Card;