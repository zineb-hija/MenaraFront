import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Sidebar from './RH/Sidebar';
import Header from './RH/Header';
import Dashboard2 from './Encadrant/Accueil/Dashboard2';
import Horaire from './RH/Horaire/Horaire';
import EncadrantC from './RH/EncadrantCrud/EncadrantC';
import StagiaireC from './RH/StagiaireCrud/StagiaireC';
import StagiaireL from './Encadrant/StagiaireL/StagiaireL';
import Projet from './Encadrant/Projet/Projet';
import RoleBasedRoute from './routes/RoleBasedRoute';
import Dashboard from './RH/Dashboard/Dashboard';
import Header2 from './Encadrant/Header2';
import Login from './Login/Login';

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <div className="container">
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/encadrant" element={<RoleBasedRoute allowedRoles={['ENCADRANT']}><Header2 /><Dashboard2 /></RoleBasedRoute>} />
              <Route path="/horaire" element={<RoleBasedRoute allowedRoles={['RH']}><Header /><Horaire /></RoleBasedRoute>} />
              <Route path="/addencadrant" element={<RoleBasedRoute allowedRoles={['RH']}><Header /><EncadrantC /></RoleBasedRoute>} />
              <Route path="/addstagiaire" element={<RoleBasedRoute allowedRoles={['RH']}><Header /><StagiaireC /></RoleBasedRoute>} />
              <Route path="/stagiaireL" element={<RoleBasedRoute allowedRoles={['ENCADRANT']}><Header2 /><StagiaireL /></RoleBasedRoute>} />
              <Route path="/rh" element={<RoleBasedRoute allowedRoles={['RH']}><Header /><Dashboard /></RoleBasedRoute>} />
              <Route path="/stagiaire" element={<RoleBasedRoute allowedRoles={['STAGIAIRE']}><Header2 /><Dashboard2 /></RoleBasedRoute>} />
              <Route path="/projet" element={<RoleBasedRoute allowedRoles={['ENCADRANT']}><Header2 /><Projet /></RoleBasedRoute>} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </div>
        </div>
      </Router>
    </DndProvider>
  );
};

export default App;
