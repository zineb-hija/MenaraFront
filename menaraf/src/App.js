import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Sidebar from './RH/Sidebar';
import Header from './RH/Header';
import Dashboard from './Encadrant/Accueil/Dashboard';
import Horaire from './RH/Horaire/Horaire';
import EncadrantC from './RH/EncadrantCrud/EncadrantC';
import StagiaireC from './RH/StagiaireCrud/StagiaireC';
import StagiaireL from './Encadrant/StagiaireL/StagiaireL';
import Projet from './Encadrant/Projet/Projet';
import Sidebar2 from './Encadrant/Sidebar2';
import Header2 from './Encadrant/Header2';

const App = () => {
  return (
  <DndProvider backend={HTML5Backend}>
    <Router>
      <div className="container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/horaire" element={<Horaire />} />
            <Route path="/encadrant" element={<EncadrantC />} />
            <Route path="/stagiaire" element={<StagiaireC />} />
           
          </Routes>
        </div>
      </div>
      <div className="container">
        <Sidebar2 />
        <div className="main-content">
          <Header2 />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/stagiaireL" element={<StagiaireL />} />
            <Route path="/projet" element={<Projet />}/>
          </Routes>
        </div>
      </div>
    </Router></DndProvider>
  );
};

export default App;



