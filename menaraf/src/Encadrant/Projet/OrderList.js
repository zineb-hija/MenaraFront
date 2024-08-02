import React from 'react';
import './OrderList.css';

const OrderList = ({ orders, onRowClick }) => {
  return (
    <div className="order-list">
      <h2>Liste des projets</h2>
      <table>
        <thead>
          <tr>
            <th>Titre</th>
            <th>Description</th>
            <th>Date de début</th>
            <th>Date de fin</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} onClick={() => onRowClick(order)}>
              <td>{order.titre}</td>
              <td>{order.description}</td>
              <td>{order.dated}</td>
              <td>{order.datef}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
