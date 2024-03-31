import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Menu from './Components/Menu';
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <div>
      <Home />
      <AboutUs />
      <Menu />
      <ContactUs />
    </div>
  );
}

export default App;
