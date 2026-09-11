import { useState } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  'TECH',
  'BAGS & WALLETS',
  'WORK ESSENTIALS',
  'GIFTING',
  'COLLECTIONS',
  'SHOP BY APPLE',
  'NEW ARRIVALS',
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <button
          className="navbar__hamburger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <a href="/" className="navbar__logo">
          daily<strong>objects</strong>
        </a>

        <nav className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__icons">
          <button className="navbar__icon-btn" aria-label="Search">
            🔍
          </button>
          <button className="navbar__icon-btn" aria-label="Account">
            👤
          </button>
          <button className="navbar__icon-btn" aria-label="Cart">
            🛍️
            <span className="navbar__cart-count">0</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
