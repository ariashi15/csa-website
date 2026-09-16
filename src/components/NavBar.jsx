import { NavLink } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <NavLink className="navbar__brand" to="/">
        <img className="navbar__logo" src="src/assets/images/csalogo.png"/>
        Northwestern CSA
      </NavLink>
      <div className="navbar__links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/our-team">Our Team</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/apply">How to Join</NavLink>
      </div>
    </nav>
  )
}

export default NavBar
