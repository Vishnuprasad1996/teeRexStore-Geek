import Popup from "reactjs-popup";

import "reactjs-popup/dist/index.css";

import "./index.css";

const filterColorList = [
  { color: "Red", id: "RED" },
  { color: "Blue", id: "BLUE" },
  { color: "Green", id: "GREEN" },
];

const filterGenderList = [
  { gender: "Men", id: "MEN" },
  { gender: "Women", id: "WOMEN" },
];

const filterPriceList = [
  { price: "0-Rs.250", id: 250 },
  { price: "Rs.251-450", id: 251 },
  { price: "Rs.450", id: 450 },
];

const filterTypeList = [
  { type: "Polo", id: "POLO" },
  { type: "Hoodie", id: "HOODIE" },
  { type: "Basic", id: "BASIC" },
];

const ProductFilter = (props) => {
  const {
    onChangeFilterColor,
    onChangeFilterGender,
    onChangeFilterPrice,
    onChangeFilterType,
    clearFilterClicked,
  } = props;

  const onClickClearFilterButton = () => {
    clearFilterClicked();
  };

  const changeFilterColor = (event) => {
    onChangeFilterColor(event.target.value);
  };

  const changeFilterGender = (event) => {
    onChangeFilterGender(event.target.value);
  };

  const changeFilterPrice = (event) => {
    onChangeFilterPrice(event.target.value);
  };

  const changeFilterType = (event) => {
    onChangeFilterType(event.target.value);
  };

  return (
    <>
      <div className="filter-desktop-view">
        <div className="clear-button-cont">
          <button
            onClick={onClickClearFilterButton}
            className="clear-filter-button"
            type="button"
          >
            Clear Filter
          </button>
        </div>
        <div className="filter-content-cont">
          <div className="filter-each-item-cont">
            <p className="category-name">Color</p>
            <ul className="list-item-cont">
              {filterColorList.map((eachItem) => (
                <li key={eachItem.id}>
                  <input
                    onChange={changeFilterColor}
                    id={eachItem.id}
                    value={eachItem.color}
                    type="checkbox"
                  />
                  <label className="label-name" htmlFor={eachItem.id}>
                    {eachItem.color}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className="filter-each-item-cont">
            <p className="category-name">Gender</p>
            <ul className="list-item-cont">
              {filterGenderList.map((eachItem) => (
                <li key={eachItem.id}>
                  <input
                    onChange={changeFilterGender}
                    id={eachItem.id}
                    value={eachItem.gender}
                    type="checkbox"
                  />
                  <label className="label-name" htmlFor={eachItem.id}>
                    {eachItem.gender}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className="filter-each-item-cont">
            <p className="category-name">Price</p>
            <ul className="list-item-cont">
              {filterPriceList.map((eachItem) => (
                <li key={eachItem.id}>
                  <input
                    onChange={changeFilterPrice}
                    id={eachItem.id}
                    value={eachItem.id}
                    type="checkbox"
                  />
                  <label className="label-name" htmlFor={eachItem.id}>
                    {eachItem.price}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className="filter-each-item-cont">
            <p className="category-name">Type</p>
            <ul className="list-item-cont">
              {filterTypeList.map((eachItem) => (
                <li key={eachItem.id}>
                  <input
                    onChange={changeFilterType}
                    id={eachItem.id}
                    value={eachItem.type}
                    type="checkbox"
                  />
                  <label className="label-name" htmlFor={eachItem.id}>
                    {eachItem.type}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="filter-mob-view">
        <div className="popup-cont">
          <Popup
            modal
            trigger={
              <button className="trigger-button" type="button">
                Filter
              </button>
            }
          >
            {(close) => (
              <>
                <div className="clear-button-cont">
                  <button
                    onClick={onClickClearFilterButton}
                    className="clear-filter-button"
                    type="button"
                  >
                    Clear Filter
                  </button>
                </div>
                <div className="filter-content-cont">
                  <div className="filter-each-item-cont">
                    <p className="category-name">Color</p>
                    <ul className="list-item-cont">
                      {filterColorList.map((eachItem) => (
                        <li key={eachItem.id}>
                          <input
                            onChange={changeFilterColor}
                            id={eachItem.id}
                            value={eachItem.color}
                            type="checkbox"
                          />
                          <label className="label-name" htmlFor={eachItem.id}>
                            {eachItem.color}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="filter-each-item-cont">
                    <p className="category-name">Gender</p>
                    <ul className="list-item-cont">
                      {filterGenderList.map((eachItem) => (
                        <li key={eachItem.id}>
                          <input
                            onChange={changeFilterGender}
                            id={eachItem.id}
                            value={eachItem.gender}
                            type="checkbox"
                          />
                          <label className="label-name" htmlFor={eachItem.id}>
                            {eachItem.gender}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="filter-each-item-cont">
                    <p className="category-name">Price</p>
                    <ul className="list-item-cont">
                      {filterPriceList.map((eachItem) => (
                        <li key={eachItem.id}>
                          <input
                            onChange={changeFilterPrice}
                            id={eachItem.id}
                            value={eachItem.id}
                            type="checkbox"
                          />
                          <label className="label-name" htmlFor={eachItem.id}>
                            {eachItem.price}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="filter-each-item-cont">
                    <p className="category-name">Type</p>
                    <ul className="list-item-cont">
                      {filterTypeList.map((eachItem) => (
                        <li key={eachItem.id}>
                          <input
                            onChange={changeFilterType}
                            id={eachItem.id}
                            value={eachItem.type}
                            type="checkbox"
                          />
                          <label className="label-name" htmlFor={eachItem.id}>
                            {eachItem.type}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <button
                  className="close-button"
                  type="button"
                  onClick={() => close()}
                >
                  close
                </button>
              </>
            )}
          </Popup>
        </div>
      </div>
    </>
  );
};

export default ProductFilter;
