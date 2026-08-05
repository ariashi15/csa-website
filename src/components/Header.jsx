import { NavLink, useNavigate } from "react-router-dom";
import willie from "../assets/willie-logo.webp";


const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/apply", label: "Apply Now" },
  { to: "/about", label: "About / Our Team" },
  { to: "/contact", label: "Contact" },
];

function Header() {
  // useNavigate lets us redirect programmatically (e.g. from the CTA button)
  // rather than only through clickable <NavLink> elements.
  const navigate = useNavigate();
  return (
    <header className="app-header">
      <div className="header-brand" onClick={() => navigate("/")} role="button" tabIndex={0}>
        <img src={willie} alt="" className="brand-seal" />

        <div>
          <h1 data-testid="app-title">Chinese Student Association</h1>
          <p>Northwestern University</p>
        </div>
      </div>

      <nav aria-label="Primary">
        <ul className="navbar-links">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <button className="header-cta" onClick={() => navigate("/apply")}>
        Join us
      </button>
    </header>
  );
}

export default Header;