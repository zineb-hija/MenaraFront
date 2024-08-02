import React from 'react';
import './OrderList.css';

const OrderList = ({ orders }) => {
  return (
    <div className="order-list">
      <h2>Liste des stagiaires</h2>
      <table>
        <thead>
          <tr>
           
            <th>NOM</th>
            <th>PRENOM</th>
            <th>DATE DE NAISSANCE</th>
            <th>DEPARTEMENT</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
             
              <td>{order.nom}</td>
              <td>{order.prenom}</td>
              <td>{order.date}</td>
              <td>{order.departement}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;