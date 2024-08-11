import React, { useEffect, useState } from 'react';
import OrderList from './OrderList';
import OrderForm from './OrderForm';
import './EncadrantC.css';
import { createOrder, fetchOrders, updateOrder } from '../../services/axiosConfig';
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

  useEffect(() => {
    const loadOrders = async () => {
      const currentUser = getCurrentUser();
    if (!currentUser) {
      console.error('User not logged in');
      return;
    }
    const userId = currentUser.id;
    console.log('Current User:', currentUser); // Debugging: Log current user info
    console.log('User ID:', userId); // Debugging: Log the user ID being used
    
      try {
        const response = await fetchOrders(userId); // Pass any filters if needed
        console.log('Orders fetched:', response.data); // Debugging: Log the fetched orders
        setOrders(response.data); // Assuming the API response contains the list of orders
      } catch (error) {
        console.error('Error fetching order:', error.response ? error.response.data : error.message);
      }
    };

    loadOrders();
  }, []);

  const addOrder = async() => {
    const currentUser = getCurrentUser();
    if (!currentUser) {
      console.error('User not logged in');
      return;
    }
    const userId = currentUser.id;

    try {
      if (selectedOrder) {
        const username = selectedOrder.username;
        await updateOrder(username, userId, formData);
        setOrders(orders.map(order => order === selectedOrder ? formData : order));
        setSelectedOrder(null);
      } else {
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
    setFormData({
      date: order.date || '',
      nom: order.nom || '',
      prenom: order.prenom || '',
      password: order.password || '',  // Ensure password is always defined
      username: order.username || '',
      email: order.email || '',
      departement: order.departement || ''
    });
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
