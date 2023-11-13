import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Récupérer les données du tableau de bord (assurez-vous d'ajuster l'URL)
    axios.get('http://localhost:3000/dashboard')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Erreur lors de la récupération des données du tableau de bord:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Tableau de bord</h1>
      <ul className="list-group">
        {products.map(product => (
          <li key={product._id.$oid} className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5 className="mb-0">{product.title}</h5>
                <p className="mb-0">{product.description}</p>
              </div>
              <span className={`badge bg-${getColorForModel(product.model)} rounded-pill`}>
                {product.model}
              </span>
            </div>
            <ProgressBar now={getPercentage(product.stock)} label={`${product.stock} disponibles`} />
          </li>
        ))}
      </ul>
    </div>
  );
}

// Fonction utilitaire pour obtenir la couleur associée à chaque modèle
const getColorForModel = (model) => {
  switch (model.toLowerCase()) {
    case 'air zoom pegasus 38':
      return 'primary';
    case 'autre modèle':
      return 'success';
    // Ajoutez d'autres modèles avec leurs couleurs associées ici
    default:
      return 'secondary';
  }
};

// Fonction utilitaire pour obtenir le pourcentage pour la ProgressBar
const getPercentage = (value) => {
  // Assurez-vous que la valeur ne dépasse pas 100
  return Math.min(value, 100);
};

export default Dashboard;
