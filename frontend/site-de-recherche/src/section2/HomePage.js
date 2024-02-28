import React from 'react';
import Picture from '../assets/Job.jpg';
import '../styles/HomePage.css';

function HomePage() {
  return (
    <div className="container">
      <div>
        <h2>Bienvenue à la page web Dukore pour employeurs</h2>
        <p>Publiez votre offre en quelques étapes et retrouver le candidat qu'il vous faut dans votre équipe</p>
      </div> 
      <div className="row accueil">
        <div className="col s12 m6">
          <img src={Picture} alt="Picture"/>
        </div>
        <div className="col s12 m6 center-align">
          <h2>Recherchons ensemble votre talent idéal</h2>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
