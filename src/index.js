import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './pages/Home'
import House from './pages/House'
import About from './pages/About'
import Error from './pages/Error'

ReactDOM.render(
    <BrowserRouter>
    <Header /> 
    <Routes>
      <Route path='/' index element={<Home />} />
      <Route path='/about' index element={<About />} /> 
      <Route path='/house' index element={<House />} />
      <Route path='*' index element={<Error />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);

