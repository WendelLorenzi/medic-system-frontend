import React from 'react';

class Header extends React.Component {
  render() {
    const { showButton, loggued } = this.props;
    return (
      <header className="header" style={{ backgroundColor: '#8FE1D9', height: '87px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #419ED7' }}>
        <div className="header-left" style={{ textAlign: 'left', display: 'flex', alignItems: 'center', padding: "15px" }}>
          <img src="\public\assets\vaccine.png" alt="Ícone" style={{ width: '51px', height: '51px', top: '20px', left: '18px', gap: '0px', opacity: '0px' }} />
          <div className="header-text" style={{ fontFamily: "Averia Libre", fontWeight: 400, fontSize: '36px', color: '#419ED7' }}>
            MyHealth
          </div>
        </div>
        <div className="header-right" style={{ textAlign: 'right', padding: "15px" }}>
          {(!showButton) ? (<></>) : (
            (showButton && !loggued) ? (
              <button className="header-button" style={{ width: '198px', height: '52px', border: '1px solid #419ED7', backgroundColor: '#419ED7', cursor: 'pointer', fontFamily: "Averia Libre", fontWeight: 400, fontSize: '18px', color: '#ffff'}}>
              Já tenho conta
              </button>
            ) : (
              <>
                <button className="header-button1" style={{ width: '188px', height: '52px', border: '1px solid #419ED7', backgroundColor: '#419ED7', cursor: 'pointer', fontFamily: "Averia Libre", fontWeight: 400, fontSize: '18px', marginRight: "22px", color: '#ffff'}}>
                  Minhas Vacinas
                </button>
                <button className="header-button2" style={{ width: '165px', height: '52px', border: '1px solid #419ED7', backgroundColor: '#419ED7', cursor: 'pointer', fontFamily: "Averia Libre", fontWeight: 400, fontSize: '18px', color: '#ffff'}}>
                Logout
                </button>
              </>
            )
          )
          }

        </div>
      </header>
    );
  }
}

Header.defaultProps = {
  showButton: true,
  loggued: false
};

export default Header;