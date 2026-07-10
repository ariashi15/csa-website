function Header() {
  return (
    <header className="app-header">
      <div className="header-brand">
        <h1 data-testid="app-title">Chinese Student Association</h1>
        <p>Northwestern University</p>
      </div>
      
      <nav>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#apply">Apply Now!</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;