import { BsDashSquare, BsPlusSquare } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";

import CartContext from "../../context/CartContext";

import "./index.css";

const CartItems = (props) => (
  <CartContext.Consumer>
    {(value) => {
      const { deleteCartItem, decreaseCartItem, increaseCartItem } = value;
      const { cartItemDetails } = props;
      const { id, imageURL, name, price, requiredQty } = cartItemDetails;

      const onClickCloseIcon = () => {
        deleteCartItem(id);
      };

      const onClickPlusIcon = () => {
        increaseCartItem(id);
      };

      const onClickMinusIcon = () => {
        decreaseCartItem(id);
      };

      const totalPrice = price * requiredQty;

      return (
        <>
          <li className="cart-list-container">
            <div className="cart-image-name-price-cont">
              <img className="cart-img" src={imageURL} alt={name} />
              <div>
                <p className="sm-name">{name}</p>
                <p className="sm-name">Rs.{price}</p>
              </div>
            </div>
            <div className="plus-minus-cont">
              <button
                className="button"
                onClick={onClickMinusIcon}
                type="button"
              >
                <BsDashSquare />
              </button>
              <p className="sm-name">{requiredQty}</p>
              <button
                className="button"
                onClick={onClickPlusIcon}
                type="button"
              >
                <BsPlusSquare />
              </button>
            </div>
            <p className="sm-name">Rs.{totalPrice}</p>
            <button className="button" onClick={onClickCloseIcon} type="button">
              <AiFillCloseCircle />
            </button>
          </li>
        </>
      );
    }}
  </CartContext.Consumer>
);

export default CartItems;
