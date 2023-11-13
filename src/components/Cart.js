import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cart() {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    // Récupérer les données du panier
    axios.get('http://localhost:3000/cart')
      .then(response => setCartData(response.data))
      .catch(error => console.error('Erreur lors de la récupération des données du panier:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Mon Panier</h1>
      <ul className="list-group">
        {cartData.map(item => (
          <li key={item._id.$oid} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5 className="mb-0">{item.title}</h5>
              <p className="mb-0">{item.description}</p>
            </div>
            <span className="badge bg-primary rounded-pill">Quantité: {item.quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
