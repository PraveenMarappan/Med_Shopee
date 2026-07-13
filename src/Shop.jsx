import React, { useState } from "react";
import "./shop.css";
import image from "../public/bgshop.png";

function Shop() {
  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      name: "Dolo 650",
      price: 20,
      image: "/public/paracetamol.png",
    },
    {
      id: 2,
      name: "Crocin",
      price: 18,
      image: "/public/crocin.png",
    },
    {
      id: 3,
      name: "Dettol",
      price: 99,
      image: "/public/dettol.png",
    },
    {
      id: 4,
      name: "Ensure",
      price: 875,
      image: "/public/ensure.png",
    },
    {
      id: 5,
      name: "Volini",
      price: 85,
      image: "/public/volini.png",
    },
    {
      id: 6,
      name: "Moisturising Cream",
      price: 360,
      image: "/public/nivea.png",
    },
  ];

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <img src={image} className="img" alt="Background" />

      <div className="text">
        <h1>Shop Medicines & Health Care</h1>
        <br />

        <p>
          Find the best medicine & healthcare products for you and your family
        </p>

        <br />

        {/* Search Box */}
        <div className="b1">
          <input
            type="text"
            placeholder="🔍 Search for medicines, products..."
            className="b2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />


          <button className="b3">Search</button>
        </div>

        <br />

        <h3>Categories</h3>

        <div className="categories">
          <button>💊<br />Tablets</button>

          <button>❤️<br />Wellness</button>

          <button>🍼<br />Baby Care</button>

          <button>🧴<br />Skin Care</button>

          <button>🩺<br />Devices</button>
        </div>

        <h3>Popular Products</h3>

        <div className="c">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div className="card" key={item.id}>
                <center>
                  <img src={item.image} alt={item.name} />
                </center>

                <br />
                <br />

                <h1 className="p">{item.name}</h1>

                <p className="p">Rupees: {item.price}</p>

                <br />

                <button>Buy Now</button>
              </div>
            ))
          ) : (
            <h2 style={{ marginTop: "30px" }}>No products found.</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default Shop;