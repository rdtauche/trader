// Here we are importing a CSS file as a dependency
import "../styles/Header.css";
import project2Logo from "../assets/charlotte.jpeg";
import { Link } from "react-router-dom";


function Header() {
  return (
    <header className="subnav-hero-section3">
      <img id="logo3" src={project2Logo} alt="Logo"></img>
      <div class="div1">
  <div class="overlay-text">Tauchert Investments</div>
</div>
      <ul className="subnav-hero-subnav">
        <li><Link to="/landing">Home</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/">SignIn</Link></li>
      </ul>
    </header>
  );
}

export default Header;
