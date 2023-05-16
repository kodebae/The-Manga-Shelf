export const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>
      <div className='container-fluid'>
        <span className='navbar-brand'>The Manga Shelf</span>
          <button className='navbar-toggler'type='button'
          data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown' aria-extended='false'
          aria-label='Toggle Navigation'>
        <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Home</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Search Manga</a>
            </li>
            </ul>
            <form className="form d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-light ms-auto" type="submit">Search</button>
            </form>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item m-1'>
                <a type='button' className='btn btn-outline-light ml-2 mt-2' href='#'>Sign In</a>
              </li>
            </ul>
          </div>
      </div>
    </nav>
    )
}

/**
 * * Collapsible nav bar is attached to target and div with same ID creates a toggled nav bar. 
 * * The navbar features built in responsiveness. It auto scales with the screen size. 
 * 
 */