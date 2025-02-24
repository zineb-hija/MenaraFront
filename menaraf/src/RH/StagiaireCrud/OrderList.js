import React from 'react';
import './OrderList.css';

const OrderList = ({ orders, onRowClick}) => {
  return (
    <div className="order-list">
      <h2>Liste des stagiaires</h2>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Email</th>
            <th>Date de naissance</th>
            <th>Encadrant</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} onClick={() => onRowClick(order)}>
             
              <td>{order.nom}</td>
              <td>{order.prenom}</td>
              <td>{order.email}</td>
              <td>{order.date}</td>
              <td>{order.encadrant}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;