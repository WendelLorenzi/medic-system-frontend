import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
//import Login from './pages/Login';
import RecoverPass from './pages/RecoverPass';
import RegisterVaccine from './pages/NewVaccine';
//import App from './App';
// import About from './About';
// import Contact from './Contact';
// import NotFound from './NotFound';

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<RegisterVaccine />} />
      <Route path="/recover" element={<RecoverPass />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  </Router>,
  document.getElementById('root')
);