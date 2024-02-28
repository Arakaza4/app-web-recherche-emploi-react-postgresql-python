import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import logo from "./assets/logo.jpg";
import LoginForm from './connexion/index';
import RegistrationForm from './inscription/index';
import Chercheur from './section1/section1';
import EmployerSection from './section2/section2';
import './App.css';

function Home() {
  return (
    <div className='container-home'>
      <div className='home'>
        <h1>Bienvenue sur notre site d'emplois</h1>
        <img src={logo} alt="Logo"/>
      </div>
      <p>Vous voulez continuez en tant que :</p>
      <Link to="/chercheur">Chercheur d'emploi</Link>
      <Link to="/employer">Employeur</Link>
    </div>
  );
}

function App() {
  const [userType, setUserType] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm setUserType={setUserType} />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/chercher" element={<Navigate to="/login" replace />} />
        <Route path="/employeur" element={<Navigate to="/login" replace />} />
        <Route path="/chercheur" element={<Chercheur />} />
        <Route path="/employer" element={<EmployerSection />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
