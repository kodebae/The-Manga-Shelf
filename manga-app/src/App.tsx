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

/**
* * In Bootstrap everything has a "className". The corresponding data attributes allow us the capability of 
* * assigning styles that can even be customized further with SASS and customized CSS.
* * JSX must have parent elements, must wrap multiple imported components in a parent div tag.
 */ 