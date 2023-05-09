import React from 'react';
import './App.css';
import { Navbar } from './Layouts/NavbarAndFooter/Navbar';
import { Header } from './Layouts/Home/Header';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
    </div>
  );
}

export default App;

 // in Bootstrap everything has a "className". the corresponding data attributes allow us the capability of 
 // assigning styles that ca even be customized further with SASS and customized CSS
 // JSX must have parent elements, so wrap multiple imported components in a div tag