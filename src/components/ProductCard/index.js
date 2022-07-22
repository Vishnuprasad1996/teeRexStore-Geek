import "./index.css";

const ProductCard = (props) => {
  const { productDetails, onClickCartButton } = props;
  const { id, name, currency, imageURL, price } = productDetails;

  const onAddCartItems = () => {
    onClickCartButton(id);
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
        <button onClick={onAddCartItems} className="button-add-cart">
          Add to Cart
        </button>
      </div>
    </li>
  );
};

export default ProductCard;
