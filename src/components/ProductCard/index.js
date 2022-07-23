import { Component } from "react";

import "./index.css";
import CartContext from "../../context/CartContext";

class ProductCard extends Component {
  state = { requiredQty: 1 };

  render() {
    return (
      <CartContext.Consumer>
        {(value) => {
          const { addCartItem } = value;
          const { requiredQty } = this.state;
          const { productDetails } = this.props;
          const { name, currency, imageURL, price } = productDetails;
          const onClickAddCartItems = () => {
            addCartItem({ ...productDetails, requiredQty });
          };
          return (
            <li className="list-item">
              <img className="product-image" src={imageURL} alt={name} />
              <div className="button-name-cont">
                <div>
                  <p className="name">{name}</p>
                  <p className="price">
                    {currency} {price}
                  </p>
                </div>
                <button
                  onClick={onClickAddCartItems}
                  className="button-add-cart"
                >
                  Add to Cart
                </button>
              </div>
            </li>
          );
        }}
      </CartContext.Consumer>
    );
  }
}

export default ProductCard;
