import React from "react";

const CartContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
  decreaseCartItem: () => {},
  increaseCartItem: () => {},
  removeAllItems: () => {},
});

export default CartContext;
