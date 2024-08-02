import React from 'react';
import './App2.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Sidebar from './Sidebar2';
import Header from './Header2';
import Dashboard from './Accueil/Dashboard';
import StagiaireL from './StagiaireL/StagiaireL';
import Projet from './Projet/Projet';

const App2 = () => {
  return (
  <DndProvider backend={HTML5Backend}>
    <Router>
    
      <div className="container">
        <Sidebar />
        <div className="main-content">
          <Header />
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

export default App2;



