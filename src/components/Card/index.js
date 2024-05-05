import React from 'react';

const Card = ({ vaccineName, qtdDose, date, img, nextDose, onClick }) => {
    const cardStyle = {
        marginTop: '5%',
        width: '330px',
        height: 'auto',
        marginBottom: '20px',
        boxSizing: 'border-box',
        cursor: 'pointer',
        position: 'relative',
        background: '#ffff',
        borderRadius: '8px',
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
        position: 'relative',
        marginLeft: '40%',
        top: '10px',
        right: '10px',
        fontFamily: 'Averia Libre',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '19.09px',
        textAlign: 'center',
        background: '#3F92C5'
    };

    const dateStyle = {
        width: '100%',
        fontFamily: 'Averia Libre',
        fontSize: '16px',
        fontWeight: '400',
        textAlign: 'center',
        color: '#8B8B8B',
        marginTop: '30px'
    };

    const imageStyle = {
        width: '80%',
        height: 'auto',
        marginLeft: '10%',
        marginTop: '5%'
    };

    const textStyle = {
        width: '100%',
        fontFamily: 'Averia Libre',
        fontSize: '14px',
        fontWeight: '400',
        textAlign: 'center',
        color: '#FD7979',
        marginTop: '2%',
        textAlign: 'end'
    };

    return (
        <div style={cardStyle} onClick={onClick}>
            <div style={titleStyle}>{vaccineName}</div>
            <div style={tagStyle}>{qtdDose}</div>
            <div style={dateStyle}>{date}</div>
            <img src={img} alt="Imagem" style={imageStyle} />
            <div style={textStyle}>Próxima dose em: {nextDose}</div>
        </div>
    );
}

Card.defaultProps = {
    vaccineName: '',
    qtdDose: '',
    date: '',
    img: '',
    nextDose: ''
};

export default Card;