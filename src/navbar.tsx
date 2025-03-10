import './navbar.css'

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <img src="./src/assets/logo_icon_navbar.png" />
        <span>SchemaFlow</span>
      </div>
      <div className="navbar-buttons">
        <a href="/" className="active">
          Schema view
        </a>
        <a href="/configuration">Configuration</a>
        <a href="/about">About the app</a>
      </div>
    </nav>
  )
}

export default Navbar
