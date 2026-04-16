import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav">
        <h1 className="logo">GAME MANAGEMENT SYSTEM</h1>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/organizer-login" className={({ isActive }) => (isActive ? "active" : "")}>
              Organizer Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/player-login" className={({ isActive }) => (isActive ? "active" : "")}>
              Player Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
              About
            </NavLink>
          </li>
        </ul>

        <div id="mobile-nav" className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/organizer-login" onClick={() => setMenuOpen(false)}>
            Organizer Login
          </NavLink>
          <NavLink to="/player-login" onClick={() => setMenuOpen(false)}>
            Player Login
          </NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;