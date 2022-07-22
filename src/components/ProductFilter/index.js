import "./index.css";

const ProductFilter = () => (
  <div className="filter-cont">
    <div className="filter-content-cont">
      <div className="filter-each-item-cont">
        <p className="category-name">Color</p>
        <div>
          <input id="red" type="checkbox" />
          <label className="label-name" htmlFor="red">
            Red
          </label>
        </div>
        <div>
          <input id="blue" type="checkbox" />
          <label className="label-name" htmlFor="blue">
            Blue
          </label>
        </div>
        <div>
          <input id="green" type="checkbox" />
          <label className="label-name" htmlFor="green">
            Green
          </label>
        </div>
      </div>
      <div className="filter-each-item-cont">
        <p className="category-name">Gender</p>
        <div>
          <input id="men" type="checkbox" />
          <label className="label-name" htmlFor="men">
            Men
          </label>
        </div>
        <div>
          <input id="women" type="checkbox" />
          <label className="label-name" htmlFor="women">
            Women
          </label>
        </div>
      </div>
      <div className="filter-each-item-cont">
        <p className="category-name">Price</p>
        <div>
          <input id="low" type="checkbox" />
          <label className="label-name" htmlFor="low">
            0-Rs.250
          </label>
        </div>
        <div>
          <input id="med" type="checkbox" />
          <label className="label-name" htmlFor="med">
            Rs.251-450
          </label>
        </div>
        <div>
          <input id="high" type="checkbox" />
          <label className="label-name" htmlFor="high">
            Rs.450
          </label>
        </div>
      </div>
      <div className="filter-each-item-cont">
        <p className="category-name">Type</p>
        <div>
          <input id="polo" type="checkbox" />
          <label className="label-name" htmlFor="polo">
            Polo
          </label>
        </div>
        <div>
          <input id="hoodie" type="checkbox" />
          <label className="label-name" htmlFor="hoodie">
            Hoodie
          </label>
        </div>
        <div>
          <input id="basic" type="checkbox" />
          <label className="label-name" htmlFor="basic">
            Basic
          </label>
        </div>
      </div>
    </div>
  </div>
);

export default ProductFilter;
