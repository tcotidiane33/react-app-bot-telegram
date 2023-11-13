// src/client/components/Login.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
      <h1 className="text-center mb-4">Se connecter</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="btn btn-primary">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;
