import React from 'react';
import './OrderList.css';

const OrderList = ({ orders, onRowClick}) => {
  return (
    <div className="order-list">
      <h2>Liste des encadrants</h2>
      <table>
        <thead>
          <tr>
           
            <th>NOM</th>
            <th>PRENOM</th>
            <th>EMAIL</th>
            <th>DATE DE NAISSANCE</th>
            <th>DEPARTEMENT</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} onClick={() => onRowClick(order)}>
             
              <td>{order.nom}</td>
              <td>{order.prenom}</td>
              <td>{order.date}</td>
              <td>{order.email}</td>
              <td>{order.departement}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;