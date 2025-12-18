import { Link, NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="nav">
        <Link to="/" className="logo">
          <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="Logo" />
        </Link>

        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/github">Github</NavLink></li>
        </ul>
      </div>
    </header>
  )
}
