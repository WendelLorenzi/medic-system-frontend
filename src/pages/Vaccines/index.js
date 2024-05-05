import React, { useState } from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';

function Vaccines() {
  // Estado para armazenar o texto de busca
  const [searchText, setSearchText] = useState('');
  const [selectedCardData, setSelectedCardData] = useState(null);

  const handleCardClick = (data) => {
    // Armazena os dados do Card clicado no estado
    setSelectedCardData(data);
    // Redireciona para a rota '/edit-vaccine'
    //history.push('/edit-vaccine');
  };

  // Lista de dados dos cards (substitua pelos seus próprios dados)
  const cardData = [
    { vaccineName: 'teste1', qtdDose: '1 dose', date: '17/03/1998', img: '/', nextDose: '17/03/2024' },
    { vaccineName: 'teste2', qtdDose: '1 dose', date: '17/03/1998', img: '/', nextDose: '17/03/2024' },
    { vaccineName: 'teste3', qtdDose: '1 dose', date: '17/03/1998', img: '/', nextDose: '17/03/2024' },
    { vaccineName: 'teste4', qtdDose: '1 dose', date: '17/03/1998', img: '/', nextDose: '17/03/2024' }
    // Adicione mais dados de cards conforme necessário
  ];

  // Função para lidar com a alteração no input de busca
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  // Função para filtrar os cards com base no texto de busca
  const filteredCards = cardData.filter(card =>
    card.vaccineName.toLowerCase().includes(searchText.toLowerCase())
  );

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '20px', // Adiciona uma margem entre os cards
  };
  
  const cardStyle = {
    width: '30%',
    marginBottom: '20px',
    boxSizing: 'border-box', // Garante que a largura inclua padding e border
  };

  const responsiveStyle = window.innerWidth <= 768? { width: '45%' } : { width: '30%' };

  return (
    <div className="vaccines" style={{ background: "#ADD4D0" }}>
      <Header showButton={true} loggued={true}/>
      <div style={{ overflowY: 'auto', height: '120vh', padding: "20px" }}>
        {/* Input de busca */}
        <input
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          placeholder="PESQUISAR VACINA..."
          style={{ marginBottom: '20px', width: '98%', padding: '10px', fontSize: '16px', fontFamily: 'Averia Libre' }}
        />

        {/* Renderização dos cards */}
        <div style={containerStyle}>
            {filteredCards.map(card => (
                <Card 
                key={card.vaccineName} 
                vaccineName={card.vaccineName} 
                qtdDose={card.qtdDose} 
                date={card.date} 
                img={card.img} 
                nextDose={card.nextDose}
                //onClick={handleCardClick(card)}
                style={{...cardStyle,...responsiveStyle }} 
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Vaccines;