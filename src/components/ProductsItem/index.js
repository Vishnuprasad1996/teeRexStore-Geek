import { Component } from "react";
import { BsSearch } from "react-icons/bs";

import ProductCard from "../ProductCard";
import ProductFilter from "../ProductFilter";

import "./index.css";

class ProductsItem extends Component {
  state = {
    productList: [],
    searchInput: "",
  };

  componentDidMount() {
    this.getProductList();
  }

  getProductList = async () => {
    const response = await fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    );
    const data = await response.json();
    this.setState({ productList: data });
  };

  onEnterSearchInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  getFilteredProductList = () => {
    const { productList, searchInput } = this.state;
    const getProductList = productList.filter(
      (eachList) =>
        eachList.name.toLowerCase().includes(searchInput) &&
        eachList.color.includes("")
    );
    return getProductList;
  };

  render() {
    const { searchInput } = this.state;
    const getProductList = this.getFilteredProductList();

    return (
      <div className="filter-prod-cont">
        <ProductFilter />
        <div className="products-cont">
          <div className="search-cont">
            <input
              onChange={this.onEnterSearchInput}
              value={searchInput}
              placeholder="search for products"
              className="search-input"
              type="search"
            />
            <button className="search-button">
              <BsSearch className="search-icon" />
            </button>
          </div>
          <ul className="product-list-item-cont">
            {getProductList.map((eachList) => (
              <ProductCard productDetails={eachList} key={eachList.id} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductsItem;
