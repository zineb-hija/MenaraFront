import React, { useState } from 'react';
import OrderList from './OrderList';
import OrderForm from './OrderForm';
import './EncadrantC.css';

function EncadrantC() {
  const [orders, setOrders] = useState([]);
  const [formData, setFormData] = useState({
    date: '',
    nom: '',
    prenom: '',
    email:'',
    departement: ''
  });
  const [selectedOrder, setSelectedOrder] = useState(null);

  const addOrder = () => {
    if (selectedOrder) {
      setOrders(orders.map(order => order === selectedOrder ? formData : order));
      setSelectedOrder(null);
    } else {
      const newOrder = {
        date: formData.date,
        nom: formData.nom,
        prenom: formData.prenom,
        email: formData.email,
        departement: formData.departement,
      };
      setOrders([...orders, newOrder]);
    }
    setFormData({
      date: '',
      nom: '',
      prenom: '',
      email:'',
      departement: ''
    });
  };

  const handleRowClick = (order) => {
    setFormData(order);
    setSelectedOrder(order);
  };

  const deleteOrder = () => {
    if (selectedOrder) {
      setOrders(orders.filter(order => order !== selectedOrder));
      setFormData({
        date: '',
        nom: '',
        prenom: '',
        email:'',
        departement: ''
      });
      setSelectedOrder(null);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <OrderList orders={orders} onRowClick={handleRowClick} />
        <OrderForm
          formData={formData}
          setFormData={setFormData}
          addOrder={addOrder}
          deleteOrder={deleteOrder}
        />
      </div>
    </div>
  );
}

export default EncadrantC;
