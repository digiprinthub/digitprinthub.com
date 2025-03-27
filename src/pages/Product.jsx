import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import { Footer, Navbar } from "../components";

// Import images
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

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const productId = parseInt(id);
    const selectedProduct = allProducts.find(p => p.id === productId);
    setProduct(selectedProduct);

    if (selectedProduct) {
      const similar = allProducts.filter(p => p.category === selectedProduct.category && p.id !== productId);
      setSimilarProducts(similar);
    }
  }, [id]);

  const ShowProduct = () => {
    if (!product) return null;

    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 col-sm-12 py-3">
              <img
                className="img-fluid"
                src={product.image}
                alt={product.title}
                width="400px"
                height="400px"
              />
            </div>
            <div className="col-md-6 col-md-6 py-5">
              <h4 className="text-uppercase text-muted">{product.category}</h4>
              <h1 className="display-5">{product.title}</h1>
              <h3 className="display-6 my-4">${product.price}</h3>
              <p className="lead">{product.description}</p>
              <button
                className="btn btn-outline-dark"
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </button>
              <Link to="/cart" className="btn btn-dark mx-3">
                Go to Cart
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };

  const ShowSimilarProduct = () => {
    return (
      <>
        <div className="py-4 my-4">
          <div className="d-flex">
            {similarProducts.map((item) => {
              return (
                <div key={item.id} className="card mx-4 text-center">
                  <img
                    className="card-img-top p-3"
                    src={item.image}
                    alt="Card"
                    height={300}
                    width={300}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {item.title.substring(0, 15)}...
                    </h5>
                  </div>
                  <div className="card-body">
                    <Link
                      to={"/product/" + item.id}
                      className="btn btn-dark m-1"
                    >
                      Buy Now
                    </Link>
                    <button
                      className="btn btn-dark m-1"
                      onClick={() => addProduct(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row"><ShowProduct /></div>
        <div className="row my-5 py-5">
          <div className="d-none d-md-block">
          <h2 className="">You may also Like</h2>
            <Marquee
              pauseOnHover={true}
              pauseOnClick={true}
              speed={50}
            >
              <ShowSimilarProduct />
            </Marquee>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;