import React from 'react';

function Help() {
  return (
    <div>
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
  );
}

export default Help;
