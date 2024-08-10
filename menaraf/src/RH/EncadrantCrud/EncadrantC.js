import React, { useState } from 'react';
import OrderList from './OrderList';
import OrderForm from './OrderForm';
import './EncadrantC.css';
import { createOrder, updateOrder } from '../../services/axiosConfig';
import { getCurrentUser } from '../../services/authService';

function EncadrantC() {
  const [orders, setOrders] = useState([]);
  const [formData, setFormData] = useState({
    date: '',
    nom: '',
    prenom: '',
    password:'',
    username:'',
    email:'',
    departement: ''
  });
  const [selectedOrder, setSelectedOrder] = useState(null);

  const addOrder = async() => {
    const userId = localStorage.getItem('userId'); // Retrieve as string
    if (userId) {
      // Optionally convert to number if needed
      // const userIdNumber = parseInt(userId, 10);
      console.log('User ID:', userId); // Check value
    } else {
      console.error('User ID is missing or invalid');
    }
    try {
      if (selectedOrder) {
        await updateOrder(selectedOrder.id, userId, formData);
        setOrders(orders.map(order => order === selectedOrder ? formData : order));
        setSelectedOrder(null);

      } else {
        // For adding a new order
        const response = await createOrder(formData, userId);
        setOrders([...orders, response.data]); 
      }
  
      setFormData({
        date: '',
        nom: '',
        prenom: '',
        password:'',
        username:'',
        email: '',
        departement: ''
      });
    } catch (error) {
      console.error('Error saving order:', error);
    }
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
        password:'',
        username:'',
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
