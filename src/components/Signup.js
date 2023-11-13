// src/client/components/Signup.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    number: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour envoyer les données au serveur ou à votre backend
    console.log('Données soumises :', formData);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Inscription</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">Prénom :</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Nom :</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email :</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Mot de passe :</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="number" className="form-label">Numéro :</label>
          <input
            type="text"
            className="form-control"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">S'inscrire</button>
      </form>
    </div>
  );
}

export default Signup;
