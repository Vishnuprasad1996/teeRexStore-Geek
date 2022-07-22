import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import "./index.css";

const NavBar = () => (
  <nav className="navbar-bg">
    <p>TeeRex Store</p>
    <div className="prod-cart-cont">
      <p>Products</p>
      <Link to="/cart">
        <BsCart3 className="cart-icon" />
      </Link>
    </div>
  </nav>
);

export default NavBar;
