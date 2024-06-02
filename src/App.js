import Header from "./Header/Header";
import Product from "./allProducts/Product";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="banner">
        <img
          src="https://m.media-amazon.com/images/I/71YTsbTxBsL._SX3000_.jpg"
          alt=""
        />
      </div>
      <Product />
    </div>
  );
}

export default App;
