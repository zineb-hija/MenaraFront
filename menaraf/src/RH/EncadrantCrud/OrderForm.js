import React from 'react';
import './OrderForm.css';

const OrderForm = ({ formData, setFormData, addOrder, deleteOrder}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleClear = () => {
    setFormData({
      date: '',
      nom: '',
      prenom: '',
      username:'',
      password:'',
      email:'',
      departement: ''
    });
  };

  return (
    <div className="order-form">
      
      <div className="form-group">
        <label>Nom</label>
        <input type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Entrez le nom" />
      </div>
      <div className="form-group">
        <label>Prenom</label>
        <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} placeholder="Entrez le prenom" />
      </div>
      <div className="form-group">
        <label>Username</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Entrez username" />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Entrez le password" />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="zineb@gmail.com" />
      </div>
      <div className="form-group">
        <label>Date de naissance</label>
        <input type="text" name="date" value={formData.date} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Departement</label>
        <select name="departement" value={formData.departement} onChange={handleChange}>
          <option value="">Sélectionnez le departement</option>
          <option value="Informatique">Informatique</option>
          <option value="GC">GC</option>
          <option value="GIndustriel">G Industriel</option>
        </select>
      </div>
      
      <div className="action-buttons">
        <button className="add" title="Ajouter" onMouseEnter={() => console.log('Ajouter')} onClick={addOrder}>+</button>
        <button className="save" title="Valider" onMouseEnter={() => console.log('Valider')} onClick={addOrder}>✓</button>
        <button className="clear" title="Vider" onMouseEnter={() => console.log('Vider')} onClick={handleClear}>x</button>
        <button className="delete" title="Supprimer" onMouseEnter={() => console.log('Supprimer')}onClick={deleteOrder}>🗑</button>
      </div>
    </div>
  );
};

export default OrderForm;
