import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Product() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    // Récupérer les données des produits
    axios.get('http://localhost:3000/products')
      .then(response => setProductData(response.data))
      .catch(error => console.error('Erreur lors de la récupération des données des produits:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Liste des Produits</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {productData.map(product => (
          <div key={product._id.$oid} className="col">
            <div className="card h-100">
              <img src={product.imageLink} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text"><strong>Prix:</strong> {product.price} €</p>
                <p className="card-text"><strong>Stock:</strong> {product.stock}</p>
                <p className="card-text"><strong>Catégorie:</strong> {product.category}</p>
                <p className="card-text"><strong>Marque:</strong> {product.brand}</p>
                <p className="card-text"><strong>Modèle:</strong> {product.model}</p>
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Ratings
                    <span className="badge bg-primary rounded-pill">{product.ratings.length}</span>
                  </li>
                  {product.ratings.map(rating => (
                    <li key={rating.user} className="list-group-item d-flex justify-content-between align-items-center">
                      {rating.user}
                      <span className="badge bg-warning rounded-pill">{rating.rating}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
