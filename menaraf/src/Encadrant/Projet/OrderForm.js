import React from 'react';
import './OrderForm.css';

const OrderForm = ({ formData, setFormData, addOrder, deleteOrder }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleClear = () => {
    setFormData({
      dated: '',
      datef: '',
      titre: '',
      description: ''
    });
  };

  return (
    <div className="order-form">
      <div className="form-group">
        <label>Titre</label>
        <input type="text" name="titre" value={formData.titre} onChange={handleChange} placeholder="Entrez le titre" />
      </div>
      <div className="form-group">
        <label>Description</label>
        <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Entrez la description" />
      </div>
      <div className="form-group">
        <label>Date de début</label>
        <input type="date" name="dated" value={formData.dated} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Date de fin</label>
        <input type="date" name="datef" value={formData.datef} onChange={handleChange} />
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
