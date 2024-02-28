
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

function AuthenticationForm() {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <h2>{isLogin ? 'Connexion' : 'Créer un compte'}</h2>
      {isLogin ? <LoginForm /> : <RegistrationForm />}
      <button onClick={handleToggleForm}>
        {isLogin ? 'Créer un compte' : 'Déjà un compte ? Se connecter'}
      </button>
    </div>
  );
}

export default AuthenticationForm;
