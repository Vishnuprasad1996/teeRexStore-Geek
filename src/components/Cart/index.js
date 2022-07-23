import CartItems from "../CartItems";
import NavBar from "../NavBar";
import CartSummary from "../CartSummary";

import CartContext from "../../context/CartContext";

import "./index.css";

const Cart = () => (
  <CartContext.Consumer>
    {(value) => {
      const { cartList, removeAllItems } = value;

      const onClickRemoveAllButton = () => {
        removeAllItems();
      };

      const isItemPresent = cartList.length > 0;

      return (
        <div className="cart-section-bg">
          <NavBar />
          <div className="cart-content-cont">
            <h1 className="h-myCart">My Cart</h1>
            {isItemPresent && (
              <button
                onClick={onClickRemoveAllButton}
                type="button"
                className="remove-all-button"
              >
                Remove All
              </button>
            )}
            <ul className="cart-list-item-cont">
              {cartList.map((eachItem) => (
                <CartItems cartItemDetails={eachItem} key={eachItem.id} />
              ))}
            </ul>
            <CartSummary />
          </div>
        </div>
      );
    }}
  </CartContext.Consumer>
);

export default Cart;
