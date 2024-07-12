import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Login from './Page/Login/Login';
import Register from './Page/Register/Register';
import Home from './Page/Home/Home'; // Exemple de composant pour la page d'accueil
import NotFound from './Page/Home/NotFound'; // Exemple de composant pour une page 404

const App = () => {
  return (
    <Router>
      <CssBaseline /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />  {/* Route pour gérer les 404 */}
      </Routes>
    </Router>
  );
};

export default App;
