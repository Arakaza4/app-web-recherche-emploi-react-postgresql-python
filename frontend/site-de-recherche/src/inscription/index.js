import React, { useState } from 'react';
import "../styles/inscription.css";

function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [accountExists, setAccountExists] = useState(false);

  const handleRegistration = (e) => {
    e.preventDefault();
    if (!isEmailValid(email)) {
      setEmailError('Adresse email invalide');
      return;
    }

    setEmailError('');

    if (accountExists) {
      alert('Adresse email déjà utilisée. Veuillez vous connecter.');

    } else {

      alert('Compte créé avec succès.');

    }
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className='inscription'>
      <h2>Créer un compte</h2>
      <form onSubmit={handleRegistration}>
        <div className='container-inscription'>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError('');
            }}
          />
        </div>
        {emailError && <p className="error-message">{emailError}</p>}
        <div>
          <label>Mot de passe:</label>
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Créer un compte</button>
      </form>
      <div>
        {accountExists && <p>Adresse email déjà utilisée. Veuillez vous connecter.</p>}
        <p>Vous avez déjà un compte ?</p>
        <button>
          <a href="/login">Se connecter</a>
        </button>
      </div>
    </div>
  );
}

export default RegistrationForm;