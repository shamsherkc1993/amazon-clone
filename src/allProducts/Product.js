import React from "react";
import "./products.css";

const Product = ({ allProduct, addToCart }) => {
  console.log(addToCart);
  return (
    <div className="product-wrap">
      {allProduct.map((items) => {
        return (
          <div className="product" key={items.id}>
            <img src={items.image.url} alt="productimg" />
            <h3>{items.name}</h3>
            <p>{items.price.formatted_with_code}</p>
            <button onClick={() => addToCart(items.id, 1)}>Add to cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
