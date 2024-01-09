import React, { useState } from "react";

function Card() {
  let [product, setProduct] = useState({
    id: 101,
    title: "Krunch Combo",
    desc: "1 Krunch burger + 1 Regular fries + 1 Regular drink",
    image:
      "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-krunch_variant_0-2023-05-31115706.png",
    price: 520,
  });

  const [counter, setCounter] = useState(1);

  const handleIncrement = () => {
    setCounter(counter + 1);
    const copyProduct = { ...product }
    copyProduct.price = copyProduct.price + 520
    setProduct(copyProduct)
    };
  
  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      const copyProduct = { ...product }
      copyProduct.price = copyProduct.price - 520
      setProduct(copyProduct)
      };
    };


  return (
    <div className="container">
      <div className="card text-white bg-dark mb-3" style={{ width: "18rem" }}>
        <img
          src={product.image}
          className="card-img-top"
          alt={product.title}
        />
        <div className="card-body">
          <h5 className="card-title"> {product.title} </h5>
          <p className="card-text">{product.desc}</p>
          <div>
            <button className="btn btn-danger" onClick={handleIncrement}>
              +
            </button>
            <span className="Text m-3">{counter}</span>
            <button
              className="btn btn-danger"
              disabled={counter === 0}
              onClick={handleDecrement}
            >
              -
            </button>
            <h5>Rs. {product.price}</h5>
          </div>
        </div>
      </div>
    </div>
  );
  }

export default Card;
