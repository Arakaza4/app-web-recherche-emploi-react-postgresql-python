import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/connexion.css'

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isEmployeur] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();


    try {
      const response = await fetch('URL_DU_BACKEND/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {

        if (isEmployeur) {
          navigate('/employeur');
        } else {
          navigate('/chercheur');
        }
      } else {

        setEmailError('Email ou mot de passe incorrect');
      }
    } catch (error) {
  
      console.error('Erreur de connexion:', error);
    }
  }

  return (
    <div className='connexion'>
      <h2>Connexion sur Dukore</h2>
      <form onSubmit={handleLogin}>
        <div className='container-connexion'>
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
        <button type="submit">Se connecter</button>
      </form>
      <div>
        <p>Vous n'avez pas de compte ?</p>
        <button>
          <Link to="/register">Créer un compte</Link>
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
