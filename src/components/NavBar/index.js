import { Link } from "react-router-dom";

import CartContext from "../../context/CartContext";
import { BsCart3 } from "react-icons/bs";
import "./index.css";

const NavBar = () => {
  const renderCartItemLength = () => (
    <CartContext.Consumer>
      {(value) => {
        const { cartList } = value;
        const cartLength = cartList.length;
        return (
          <>
            {cartLength > 0 ? (
              <span className="cart-count-badge">{cartLength}</span>
            ) : null}
          </>
        );
      }}
    </CartContext.Consumer>
  );

  return (
    <nav className="navbar-bg">
      <p className="store-name">TeeRex Store</p>
      <div className="prod-cart-cont">
        <p className="name-product">
          <Link className="nav-link" to="/">
            Products
          </Link>
        </p>
        <Link className="nav-link" to="/cart">
          <div className="cart-cont">
            <BsCart3 className="cart-icon" />
            {renderCartItemLength()}
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
