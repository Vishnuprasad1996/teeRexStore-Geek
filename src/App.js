import { Route, Switch } from "react-router-dom";

import { Component } from "react";

import Home from "./components/Home";
import Cart from "./components/Cart";
import CartContext from "./context/CartContext";

import "./App.css";

class App extends Component {
  state = { cartList: [] };

  removeAllItems = () => {
    this.setState({ cartList: [] });
  };

  deleteCartItem = (id) => {
    const { cartList } = this.state;
    const updatedCartList = cartList.filter((eachItem) => eachItem.id !== id);
    this.setState({ cartList: updatedCartList });
  };

  increaseCartItem = (id) => {
    this.setState((prevState) => ({
      cartList: prevState.cartList.map((eachItem) => {
        if (eachItem.id === id) {
          if (eachItem.quantity > eachItem.requiredQty) {
            const updatedQty = eachItem.requiredQty + 1;
            return { ...eachItem, requiredQty: updatedQty };
          }
        }
        return eachItem;
      }),
    }));
  };

  decreaseCartItem = (id) => {
    this.setState((prevState) => ({
      cartList: prevState.cartList.map((eachItem) => {
        if (eachItem.id === id) {
          if (eachItem.requiredQty > 1) {
            const updatedQty = eachItem.requiredQty - 1;
            return { ...eachItem, requiredQty: updatedQty };
          }
        }
        return eachItem;
      }),
    }));
  };

  addCartItem = (product) => {
    const { cartList } = this.state;
    const productData = cartList.find((eachItem) => eachItem.id === product.id);

    if (productData) {
      this.setState((prevState) => ({
        cartList: prevState.cartList.map((eachProduct) => {
          if (eachProduct.id === productData.id) {
            return {
              ...eachProduct,
              reqQty: eachProduct.requiredQty + product.requiredQty,
            };
          }
          return eachProduct;
        }),
      }));
    } else {
      this.setState((prevState) => ({
        cartList: [...prevState.cartList, product],
      }));
    }
  };

  render() {
    const { cartList, errorMsg } = this.state;

    return (
      <CartContext.Provider
        value={{
          cartList,
          errorMsg,
          addCartItem: this.addCartItem,
          deleteCartItem: this.deleteCartItem,
          increaseCartItem: this.increaseCartItem,
          decreaseCartItem: this.decreaseCartItem,
          renderErrorMsg: this.renderErrorMsg,
          removeAllItems: this.removeAllItems,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </CartContext.Provider>
    );
  }
}

export default App;
