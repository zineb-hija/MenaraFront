import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const Horaire = () => {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    start: '',
    end: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAddEvent = () => {
    const newEvent = {
      title: `${formData.nom} ${formData.prenom} (${formData.email})`,
      start: new Date(formData.start),
      end: new Date(formData.end)
    };
    setEvents([...events, newEvent]);
    setFormData({
      nom: '',
      prenom: '',
      email: '',
      start: '',
      end: ''
    });
  };

  return (
    <div>
      <h2>Ajouter des stagiaires à l'horaire</h2>
      <div className="form-group">
        <label>Nom</label>
        <input
          type="text"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          placeholder="Entrez le nom"
        />
      </div>
      <div className="form-group">
        <label>Prénom</label>
        <input
          type="text"
          name="prenom"
          value={formData.prenom}
          onChange={handleChange}
          placeholder="Entrez le prénom"
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="zineb@gmail.com"
        />
      </div>
      <div className="form-group">
        <label>Heure de début</label>
        <input
          type="datetime-local"
          name="start"
          value={formData.start}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Heure de fin</label>
        <input
          type="datetime-local"
          name="end"
          value={formData.end}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleAddEvent}>Ajouter</button>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: '50px' }}
      />
    </div>
  );
};

export default Horaire;
