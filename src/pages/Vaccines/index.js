import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';
import { getAllVaccines } from '../../firebase/firestore';

function Vaccines() {
  const [searchText, setSearchText] = useState('');
  const [cardData, setCardData] = useState([]);

  const handleCardClick = (id) => {
    window.location.href = `/edit-vaccine/${id}`;
  };

  const getAll = async () => {
    const vaccines = await getAllVaccines();
    setCardData(vaccines);
  };

  useEffect(() => {
    getAll();
  }, []);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const filteredCards = cardData.filter(card =>
    card.vaccine.toLowerCase().includes(searchText.toLowerCase())
  );

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '20px',
  };
  
  const cardStyle = {
    width: '30%', // Mudança de 30% para que haja no máximo 3 cards na horizontal
    marginBottom: '20px',
    boxSizing: 'border-box',
  };

  const responsiveStyle = {
    width: '100%', // Ajuste para ocupar toda a largura em telas menores
    maxWidth: '350px', // Largura máxima para evitar que os cards fiquem muito grandes
  };

  return (
    <div className="vaccines" style={{ background: "#ADD4D0" }}>
      <Header showButton={true} loggued={true}/>
      <div style={{ overflowY: 'auto', height: '120vh', padding: "20px" }}>
        <input
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          placeholder="PESQUISAR VACINA..."
          style={{ marginBottom: '20px', width: '98%', padding: '10px', fontSize: '16px', fontFamily: 'Averia Libre' }}
        />
        <div style={containerStyle}>
            {filteredCards.map(card => (
                <Card 
                key={card.id} 
                vaccineName={card.vaccine} 
                qtdDose={card.dose} 
                date={card.data} 
                img={card.comprovante} 
                nextDose={card.proxima}
                onClick={() => handleCardClick(card.id)}
                style={{...cardStyle,...responsiveStyle }} 
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Vaccines;