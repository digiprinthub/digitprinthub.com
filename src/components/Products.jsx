import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";


import lstImg4 from "../assets/lstimg4.jpg";
import lstImg5 from "../assets/lstimg5.jpg";
import lstImg6 from "../assets/lstimg6.jpg";
import lstImg7 from "../assets/lstimg7.jpg";
import lstImg8 from "../assets/lstimg8.jpg";
import lstImg9 from "../assets/lstimg9.jpg";

const allProducts = [
  {
    id: 1,
    title: "Compact All-in-One Printer for Versatile Use",
    description:
      "This printer offers print, scan, and copy capabilities, making it an efficient solution for home or small business setups. The compact design allows for easy setup, and it connects via USB for fast, reliable use.",
    price: 289.99,
    category: "Deskjet",
    image: lstImg9,
  },
  {
    id: 2,
    title: "Monochrome Laser Printer with Multi-Functionality",
    description:
      "A high-performance laser printer designed for productivity, offering print, copy, and scan functions. Ideal for small office environments where document quality and efficiency are priorities.",
    price: 350.99,
    category: "LaserJet",
    image: lstImg8,
  },
  {
    id: 3,
    title: "Fast Monochrome Laser Printer with Duplex Feature",
    description:
      "This fast and reliable laser printer delivers sharp prints and offers automatic duplexing to save on paper. A great option for homes and offices needing efficient printing solutions.",
    price: 249,
    category: "LaserJet",
    image: lstImg7,
  },
  {
    id: 4,
    title: "Wireless All-in-One Printer for Modern Offices",
    description:
      "A wireless all-in-one printer designed for small offices, offering print, scan, and copy functionalities. Its wireless capabilities allow for flexible setup and seamless integration.",
    price: 290.99,
    category: "LaserJet",
    image: lstImg6,
  },
  {
    id: 5,
    title: "High Capacity Ink Cartridge for Extended Use",
    description:
      "This high-capacity ink cartridge provides a long-lasting ink supply, making it ideal for heavy print jobs in home or office settings. Designed for sharp, clear prints with up to 825 pages per cartridge.",
    price: 39.99,
    category: "Cartridge",
    image: lstImg5,
  },
  {
    id: 6,
    title: "All-in-One Ink Tank Printer with Wireless Connectivity",
    description:
      "An all-in-one printer with an integrated ink tank for high-volume printing. With wireless and USB connectivity, it's perfect for small businesses or home offices needing versatile printing solutions.",
    price: 379.99,
    category: "Smart Tank",
    image: lstImg4,
  },
];

const Products = () => {
  const [filter, setFilter] = useState(allProducts);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const filterProduct = (cat) => {
    const updatedList = allProducts.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => setFilter(allProducts)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("Deskjet")}
          >
            Deskjet
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("LaserJet")}
          >
            LaserJet
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("Cartridge")}
          >
            Cartridge
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("Smart Tank")}
          >
            Smart Tank
          </button>
        </div>

        {filter.map((product) => {
          return (
            <div
              id={product.id}
              key={product.id}
              className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
            >
              <div className="card text-center h-100" key={product.id}>
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text">
                    {product.description.substring(0, 90)}...
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">$ {product.price}</li>
                </ul>
                <div className="card-body">
                  <Link
                    to={"/product/" + product.id}
                    className="btn btn-dark m-1"
                  >
                    Buy Now
                  </Link>
                  <button
                    className="btn btn-dark m-1"
                    onClick={() => {
                      toast.success("Added to cart");
                      addProduct(product);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <ShowProducts />
        </div>
      </div>
    </>
  );
};

export default Products;