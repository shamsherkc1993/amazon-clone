import React from "react";
import Header from "../Header/Header";
import "./ShoppingCart.css";

const ShoppingCart = ({ cart }) => {
  console.log(cart);
  return (
    <>
      <Header />
      <div className="checkOut">
        <div className="checkout-left">
          <img
            src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/logos/OG_image_Squid_Ink.png"
            alt="add"
            className="adds"
          />
          <div>
            <h3>Hello kc</h3>
            <h2 className="checkoutTitle">Your shopping basket</h2>

            {cart?.line_items?.map((item) => {
              return (
                <div className="checkoutProduct" key={item.id}>
                  <img src={item.media.source} alt="prdimg" />
                  <div className="checkoutProduct-info">
                    <p className="infoCheckoutproduct-title">{item.name}</p>
                    <p className="infoCheckoutproduct-price">
                      <strong>
                        {item.price.formatted_wth_symbol} * {item.quantity} =
                        700
                      </strong>
                    </p>
                    <button>Remove from basket</button>
                  </div>
                </div>
              );
            })}

            {/* <div className="checkoutProduct">
              <img
                src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="prdimg"
              />
              <div className="checkoutProduct-info">
                <p className="infoCheckoutproduct-title">Boss Audio System</p>
                <p className="infoCheckoutproduct-price">
                  <strong>$98</strong>
                </p>
                <button>Remove from basket</button>
              </div>
            </div> */}
          </div>
        </div>
        <div className="checkout-right">
          <div className="sub-total">
            <p>
              Subtotal (1 item): <strong>$98.06</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" />
              This order contains a gift
              <br />
            </small>
          </div>
          <button>Proceed to checkout</button>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
