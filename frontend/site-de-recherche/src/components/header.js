import React, { useEffect } from 'react';
import M from 'materialize-css';
import logo from '../assets/logo.jpg';
import '../styles/header.css';

function Header({ currentSection, setCurrentSection }) {
  useEffect(() => {

    M.AutoInit();
  }, []);

  return (
    <header>
      <nav>
        <div>
          <div>
            <img src={logo} alt="Logo"/>
          </div>
           
        </div>
      </nav>
    </header>
  );
}

export default Header;
