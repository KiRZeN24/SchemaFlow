import "./navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">SchemaFlow</div>
      <a href="/" className="href">Schema view</a>
      <a href="/configuration" className="href">Configuration</a>
      <a href="/about" className="href">About the app</a>
    </nav>
  );
};

export default Navbar;

