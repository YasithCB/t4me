import React from "react";
import Meta from "../components/Meta";
import ProductList from "../components/ProductList";
import RoundButton from "../components/RoundButton";
import allProductsList from "../db/allProducts";

const Collection = () => {
  return (
    <>
      <Meta title={"Collection"} />

      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-3 d-none d-md-block">
              <div className="filter-card mb-3">
                <h3 className="filter-title m-0">Shop By Category</h3>
                <p className="fs-extra-small">under development</p>
                <div>
                  <ul className="ps-0">
                    <li>Plain T-shirts</li>
                    <li>Printed T-shirts</li>
                    <li>Rib T-shirts</li>
                    <li>Frocks</li>
                  </ul>
                </div>
              </div>

              <div className="filter-card mb-3">
                <h3 className="filter-title m-0">Filter By</h3>
                <p className="fs-extra-small">under development</p>
                <div>
                  <h4 className="sub-title">Availability</h4>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="" />
                    <label htmlFor="" className="form-check-label">
                      In Stock (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="" />
                    <label htmlFor="" className="form-check-label">
                      Out of Stock (0)
                    </label>
                  </div>

                  <h4 className="sub-title">Price</h4>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control py-1"
                        id="from"
                        placeholder="From"
                      />
                      <label htmlFor="from">From</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control py-1"
                        id="to"
                        placeholder="To"
                      />
                      <label htmlFor="to">To</label>
                    </div>
                  </div>

                  <h4 className="sub-title">Colors</h4>
                  <div>
                    <div>
                      <ul className="colors ps-0">
                        <li style={{ backgroundColor: "black" }}></li>
                        <li
                          style={{
                            backgroundColor: "white",
                            border: "1px solid grey",
                          }}></li>

                        <li style={{ backgroundColor: "red" }}></li>
                        <li style={{ backgroundColor: "rgb(160, 0, 0)" }}></li>
                        <li style={{ backgroundColor: "green" }}></li>
                        <li style={{ backgroundColor: "blue" }}></li>
                        <li style={{ backgroundColor: "rgb(0, 0, 65)" }}></li>
                      </ul>
                    </div>
                  </div>

                  <h4 className="sub-title">Size</h4>
                  <div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="size-1"
                      />
                      <label htmlFor="size-1" className="form-check-label">
                        S (3)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="size-2"
                      />
                      <label htmlFor="size-2" className="form-check-label">
                        M (3)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="size-3"
                      />
                      <label htmlFor="size-3" className="form-check-label">
                        L (3)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="size-4"
                      />
                      <label htmlFor="size-4" className="form-check-label">
                        XL (3)
                      </label>
                    </div>
                  </div>
                  <RoundButton
                    text="Filter"
                    onClick={() => {}}
                    isSelected={true}
                  />
                </div>
              </div>

              <div className="filter-card mb-3">
                <h3 className="filter-title m-0">Product Tags</h3>
                <p className="fs-extra-small">under development</p>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Sunflower
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      BTS
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Peach-Goma
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Heart
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Biker
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Couple
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-9 col-12">
              <div className="filter-sort-grid">
                <div className="d-flex justify-content-end align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="my-0 sub-title">Sort By : </p>
                    <select className="form-select" id="sortBy" name="">
                      <option selected value="manual">
                        Featured
                      </option>
                      <option value="best-selling">Best Selling</option>
                      <option value="title-ascending">
                        Alphabeticall, A-Z
                      </option>
                      <option value="title-descending">
                        Alphabeticall, Z-A
                      </option>
                      <option value="price-ascending">
                        Price, Low to High
                      </option>
                      <option value="price-descending">
                        Price, High to Low
                      </option>
                      <option value="created-ascending">
                        Date, Old to New
                      </option>
                      <option value="created-descending">
                        Date, New to Old
                      </option>
                    </select>
                    <p className="my-0 mx-4 sub-title d-none d-md-block">
                      21 Products
                    </p>
                  </div>
                </div>
              </div>

              <div className="store-product-list py-3 d-flex flex-wrap justify-content-center">
                <ProductList productsList={allProductsList} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
