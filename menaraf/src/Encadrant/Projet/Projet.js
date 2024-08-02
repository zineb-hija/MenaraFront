import React, { useState } from 'react';
import OrderList from './OrderList';
import OrderForm from './OrderForm';
import './Projet.css';

function Projet() {
  const [orders, setOrders] = useState([]);
  const [formData, setFormData] = useState({
    dated: '',
    datef: '',
    titre: '',
    description: ''
  });
  const [selectedOrder, setSelectedOrder] = useState(null);

  const addOrder = () => {
    if (selectedOrder) {
      setOrders(orders.map(order => order === selectedOrder ? formData : order));
      setSelectedOrder(null);
    } else {
      const newOrder = {
        dated: formData.dated,
        titre: formData.titre,
        description: formData.description,
        datef: formData.datef,
      };
      setOrders([...orders, newOrder]);
    }
    setFormData({
      dated: '',
      datef: '',
      titre: '',
      description: ''
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
        dated: '',
        datef: '',
        titre: '',
        description: ''
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

export default Projet;
