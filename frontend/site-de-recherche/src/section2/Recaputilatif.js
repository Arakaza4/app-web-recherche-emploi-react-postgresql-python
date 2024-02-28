import React from 'react';

function SummaryPage({ data }) {
  return (
    <div className="container">
      <h1>Récapitulatif de l'offre d'emploi</h1>

      <div>
        <h2>Informations sur l'entreprise :</h2>
        <p>Nom de l'entreprise : {data.nom}</p>
        <p>Adresse e-mail : {data.email}</p>
      </div>

      <div>
        <h2>Informations sur le poste :</h2>
        <p>Intitulé du poste : {data.intitule}</p>
        <p>Nombre de candidats : {data.candidat}</p>
        <p>Lieu de travail : {data.lieu}</p>
        <p>Option de travail : {data.selectedOption}</p>
      </div>
    </div>
  );
}

export default SummaryPage;
