import React, { useState } from 'react';
import '../styles/footer.css';

function Footer() {
  const [isContactFormVisible, setContactFormVisible] = useState(false);

  const toggleContactForm = () => {
    setContactFormVisible(!isContactFormVisible);
  };

  return (
    <footer>
      <div className="container">
        <div>
          <p>&copy; 2023 Dukore</p>
          <div className="contact-links">
            <a
              href="#"
              onClick={toggleContactForm}
              id="contact-link"
            >
              Besoin d'aide ?
            </a>
            {isContactFormVisible && (
              <div id="contact-form-container">
                <h1>Formulaire de contact</h1>
                <form id="contact-form">
                  <div>
                    <label for="name">Nom :</label>
                    <input
                      type="text"
                      id="name"
                      required
                    />
                  </div>
                  <div>
                    <label for="email">Email :</label>
                    <input
                      type="email"
                      id="email"
                      required
                    />
                  </div>
                  <div>
                    <label for="message">Message :</label>
                    <textarea
                      id="message"
                      required
                    ></textarea>
                  </div>
                  <button type="submit">Envoyer</button>
                </form>
              </div>
            )}
          </div>
        </div>
        <div className="contact-info">
          <div className="phone">Téléphone : +1 234 567 890</div>
          <div className="email">E-mail : contact@dukore.com</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
