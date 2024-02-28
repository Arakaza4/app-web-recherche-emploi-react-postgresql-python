
import React, { useState } from 'react';
import Header from '../components/header';
import HomePage from './HomePage';
import FormPage from './CreationPage';
import Description from './PostDescription';
import '../styles/section2.css'

function EmployerSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    intitule: '',
    candidat: '',
    lieu: '',
    selectedOption: '',
  });
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleDataSubmit = (data) => {
    setFormData({ ...formData, ...data });
    handleNext();
  };

  const postDataSubmit = async () => {

    const combinedData = { ...formData };
    
    try {
      const response = await fetch('http://127.0.0.1:7200/offer/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(combinedData),
      });

      if (response.status === 201) {
        const responseData = await response.json();
        setSuccessMessage('Offre créée avec succès !');
      } else {
        setErrorMessage("Une erreur s'est produite lors de la création de l'offre.");
      }
    } catch (error) {
      setErrorMessage("Une erreur s'est produite lors de la requête au backend : " + error.message);
    }
  };

  return (
    <div>
      <Header />
      {currentPage === 1 && <HomePage />}
      {currentPage === 2 && <FormPage onDataSubmit={handleDataSubmit} />}
      {currentPage === 3 && <Description />}

      <div className='pages'>
  {currentPage === 1 && (
    <button onClick={handleNext}>Publier votre offre ici</button>
  )}
  {currentPage === 2 && (
    <>
      <button onClick={handlePrev}>Page précédente</button>
      <button onClick={handleNext}>Page suivante</button>
    </>
  )}
  {currentPage === 3 && (
    <>
      <button onClick={handlePrev}>Page précédente</button>
      <button onClick={postDataSubmit}>Envoyer votre offre</button>
    </>
  )}
</div>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default EmployerSection;
