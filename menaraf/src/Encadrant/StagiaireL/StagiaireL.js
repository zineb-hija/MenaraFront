import React, { useState } from 'react';
import OrderList from './OrderList';
import './StagiaireL.css';

function StagiaireL() {
  const interns = [
    { nom: 'Dupont', prenom: 'Jean', email: 'jean.dupont@example.com', dateDeNaissance: '1990-01-01' },
    { nom: 'Martin', prenom: 'Sophie', email: 'sophie.martin@example.com', dateDeNaissance: '1992-05-12' },
    // Ajoutez d'autres stagiaires ici
  ];

  return (
    <div className="App">
      <div className="container">
        <OrderList interns={interns} />
      </div>
    </div>
  );
}

export default StagiaireL;
