import React, { useState } from 'react';
import '../styles/PostDescription.css';

function Description() {
  const [intitule, setIntitule] = useState('');
  const [candidat, setCandidat] = useState('');
  const [lieu, setLieu] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const postDataSubmit = async (e) => {
    e.preventDefault();
    const offer = {
      intitule,
      candidat,
      lieu,
      selectedOption,
      publicationDate: '2023-10-26',
      bio: 'Description de l\'offre',
      companyId: 1
    };
    const response = await fetch('http://127.0.0.1:7200/offer/', {
      method: 'POST',
      body: new URLSearchParams(offer),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <div>
      <div id="description-post" className="container-creation">
        <form onSubmit={postDataSubmit} className="Creation-form">
          <div>
            <label htmlFor="intitule" className="label-creation">Intitulé du poste</label>
            <input
              type="text"
              id="intitule"
              name="intitule"
              required
              className="input-creation"
              value={intitule}
              onChange={(e) => setIntitule(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="candidat" className="label-creation">Nombre de candidats pour ce poste</label>
            <input
              type="text"
              id="candidat"
              name="candidat"
              required
              className="input-creation"
              value={candidat}
              onChange={(e) => setCandidat(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="location" className="label-creation">Lieu de travail</label>
            <select
              id="location"
              className="input-creation"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="Choisir votre lieu de travail">Choisir votre lieu de travail</option>
              <option value="Sur site">Sur site</option>
              <option value="En télétravail">En télétravail</option>
              <option value="Les deux">Les deux</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Description;
