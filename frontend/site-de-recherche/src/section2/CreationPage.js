import React, { useState } from 'react';
import '../styles/CreationPage.css';

function FormPage({ onDataSubmit }) {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');

  const handleNext = () => {
    // Ici, je vais effectuer l'envoi des données au backend
    const formData = {
      nom,
      email,
      telephone,
    };
    onDataSubmit(formData); // Envoyer les données au composant parent
  };

  return (
    <div className="container-creation">
      <form action="#" method="post" className="Creation-form">
        <div>
          <label htmlFor="nom" className="label-creation">
            Nom de l'entreprise
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            required
            className="input-creation"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="label-creation">
            Votre adresse mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="input-creation"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="telephone" className="label-creation">
            Numéro de téléphone
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            required
            className="input-creation"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default FormPage;
