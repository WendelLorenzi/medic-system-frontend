import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Login from './pages/Login';
import RecoverPass from './pages/RecoverPass';
import RegisterVaccine from './pages/NewVaccine';
import EditVaccine from './pages/EditVaccine';
import App from './App';
import Register from './pages/Register';
import Vaccines from './pages/Vaccines';
import { AuthProvider } from './contexts/auth';

ReactDOM.render(
  <Router>
    <AuthProvider>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/recover" element={<RecoverPass />} />
        <Route path="/edit-vaccine/:id" element={<EditVaccine />} />
        <Route path="/register-vaccine" element={<RegisterVaccine />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route exact path="/vaccines" element={<Vaccines />} />
      </Routes>
    </AuthProvider>
  </Router>,
  document.getElementById('root')
);