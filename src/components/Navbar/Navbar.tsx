import "./Navbar.css";
import logo from "../../assets/Tedooo-logo.png";
import SearchField from "./SearchField/SearchField";
import NavComponent from "./NavComponent/NavComponent";

const Navbar: React.FC = () => {
  return (
    <div className="navbar-main-section">
      <div>
        <img src={logo} alt="Tedooo logo" />
        <SearchField />
      </div>
      <NavComponent />
    </div>
  );
};

export default Navbar;
