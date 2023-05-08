import React from 'react';
import './App.css';

function App() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>
      <div className='container-fluid'>
        <span className='navbar-brand'>The Manga Shelf</span>
        <button className='navbar-toggler'type='button'
        data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
        aria-controls='navbarNavDropdown' aria-extended='false'
        aria-label='Toggle Navigation'
        >
          <span className='navbar-toggler-icon'></span>
          <div className='collapse navbar-collapse' id='navbarNavDropdown'>

          </div>
        </button>
      </div>

    </nav>
  );
}

export default App;

 