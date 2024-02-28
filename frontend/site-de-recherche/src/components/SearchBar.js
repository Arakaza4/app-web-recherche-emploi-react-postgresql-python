import React, { useState } from 'react';
import '../styles/SearchBar.css';

function SearchBar() {
  const [keywords, setKeywords] = useState('');
  const [location, setLocation] = useState('');
  const [isDateVisible, setDateVisible] = useState(false);
  const [isSalaryVisible, setSalaryVisible] = useState(false);
  const [isContractVisible, setContractVisible] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    // Je vais joutez ici la logique de recherche en utilisant les valeurs de keywords et location
  };

  return (
    <div className="container">
      <div className="row-search">
        <div className="col s12 m4 l4 center-align-Search">
          <div className="input-field-search">
            <i className="material-icons prefix">search</i>
            <input
              type="text"
              id="keywords"
              name="keywords"
              className="validate"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              placeholder="Mots-clés ou entreprise"
            />
          </div>
        </div>
        <div className="col s12 m4 l4 center-align-Search">
          <div className="input-field-search">
            <i className="material-icons prefix">location_on</i>
            <input
              type="text"
              id="location"
              name="location"
              className="validate"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Ville ou code postal"
            />
          </div>
        </div>
        <div className="col s12 m4 l4 center-align-Search">
          <button className="btn waves-effect waves-light blue" type="submit" onClick={handleSearch}>
            <h2>Rechercher</h2>
          </button>
        </div>
      </div>
      <div className="specificity">
        <div className="toggle-content">
          <h3 onClick={() => setDateVisible(!isDateVisible)}>Date de publication</h3>
          {isDateVisible && (
            <div>
              <p>Dernières 24h</p>
              <p>Moins d'une semaine</p>
              <p>Moins d'un mois</p>
            </div>
          )}
        </div>
        <div className="toggle-content">
          <h3 onClick={() => setSalaryVisible(!isSalaryVisible)}>Salaires</h3>
          {isSalaryVisible && (
            <div>
              <p>Moins de 2 000€/mois</p>
              <p>Moins de 3 000€/mois</p>
              <p>Moins de 4 000€/mois</p>
              <p>4 000€ et plus/mois</p>
            </div>
          )}
        </div>
        <div className="toggle-content">
          <h3 onClick={() => setContractVisible(!isContractVisible)}>Type de contrat</h3>
          {isContractVisible && (
            <div>
              <p>CDI</p>
              <p>CDD</p>
              <p>Alternance</p>
              <p>Stage</p>
              <p>Temps plein</p>
              <p>Temps partiel</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
