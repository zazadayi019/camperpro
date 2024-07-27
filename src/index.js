import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/navbar';
import MotorComponent from './components/motor';
import CaravanComponent from './components/caravan/caravan';
import TuningComponent from './components/tuning/tuning';
import UsedCarComponent from './components/usedcar/usedcar';
import FooterComponent from './components/footer';
import CampingPlaceComponent from './components/campingplace/campingplace';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  
  <NavbarComponent />

  <Routes>
    <Route path="/motor" element={<MotorComponent />}/>
    <Route path="/caravan" element={<CaravanComponent />}/>
    <Route path="/tuning" element={<TuningComponent />}/>+
    <Route path="/usedcar" element={<UsedCarComponent />}/>
    <Route path="/campingplace" element={<CampingPlaceComponent />}/>
  </Routes>

  <FooterComponent/>

  </BrowserRouter>
  );
