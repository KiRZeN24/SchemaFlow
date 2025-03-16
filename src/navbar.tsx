import { NavbarProps } from './interfaces'
import './navbar.css'

const Navbar: React.FC<NavbarProps> = ({ onAboutClick, onSchemaClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <img src="./src/assets/logo_icon_navbar.png" />
        <span>SchemaFlow</span>
      </div>
      <div className="navbar-buttons">
        <button onClick={onSchemaClick} className="active">
          Schema view
        </button>
        <a href="/configuration">Configuration</a>
        <button onClick={onAboutClick}>About the app</button>
      </div>
    </nav>
  )
}

export default Navbar
