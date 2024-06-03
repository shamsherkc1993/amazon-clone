import Header from "./Header/Header";
import Product from "./allProducts/Product";
import commerce from "./libss/commerce";
import React, { useEffect, useState } from "react";

function App() {
  const [allProduct, setAllProduct] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(commerce.products);

  console.log(cart);

  const fetchProducts = async () => {
    const response = await commerce.products.list();
    setAllProduct(response.data);
  };

  const addToCart = async (productId, qty) => {
    const response = await commerce.cart.add(productId, qty);
    setCart(response);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Header cart={cart} />
      <div className="banner">
        <img
          src="https://m.media-amazon.com/images/I/71YTsbTxBsL._SX3000_.jpg"
          alt=""
        />
      </div>
      <Product allProduct={allProduct} addToCart={addToCart} />
    </div>
  );
}

export default App;
