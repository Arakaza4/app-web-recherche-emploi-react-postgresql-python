
import React, { useState } from 'react';

function RegistrationForm({ onRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    onRegister({ email, password, username });
  };

  return (
    <div className='inscription'>
      <form onSubmit={handleRegister}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nom d'utilisateur"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Inscription</button>
    </form>
    </div>
  );
}

export default RegistrationForm;
