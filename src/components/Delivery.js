import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
  const [collections, setCollections] = useState([]);
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    // Récupérer les collections et les documents du tableau de bord
    axios.get('http://localhost:3000/dashboard')
      .then(response => {
        setCollections(response.data.collections);
        setDocuments(response.data.documents);
      })
      .catch(error => console.error('Erreur lors de la récupération des données du tableau de bord:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Tableau de bord</h1>
      <div>
        <h2>Collections</h2>
        <ul className="list-group">
          {collections.map(collection => (
            <li key={collection} className="list-group-item">{collection}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h2>Documents</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">OrderId</th>
              <th scope="col">Address</th>
              <th scope="col">Delivery Status</th>
              {/* Ajouter d'autres en-têtes de colonnes au besoin */}
            </tr>
          </thead>
          <tbody>
            {documents.map(document => (
              <tr key={document._id.$oid}>
                <td>{document.orderId}</td>
                <td>
                  <p>Street: {document.address.street}</p>
                  <p>City: {document.address.city}</p>
                  <p>Zip Code: {document.address.zipCode}</p>
                  <p>Country: {document.address.country}</p>
                </td>
                <td>
                  <div className="progress">
                    <div
                      className={`progress-bar bg-${getColorForDeliveryStatus(document.deliveryStatus)}`}
                      role="progressbar"
                      style={{ width: '100%' }}
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {document.deliveryStatus}
                    </div>
                  </div>
                </td>
                {/* Ajouter d'autres colonnes au besoin */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Fonction pour obtenir la couleur de la progressBar en fonction du statut de livraison
const getColorForDeliveryStatus = (status) => {
  switch (status) {
    case 'En cours de traitement':
      return 'primary';
    case 'Expédié':
      return 'success';
    case 'En transit':
      return 'warning';
    case 'Livrée':
      return 'info';
    case 'En attente':
      return 'secondary';
    default:
      return 'light';
  }
};

export default Dashboard;
