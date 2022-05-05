import React from "react";
import "../styles/Checkout.scss";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct.js";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Checkout() {
  // const [{ basket }, dispatch] = useStateValue();
  const basket = 2;
  return (
    <div className="checkout">
      <div className="checkoutLeft">
        <Link to="/">
          <img
            className="checkoutAd"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg"
            alt=""
          />
        </Link>
        <div>
          <h2 className="checkoutTitle">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkoutRight">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
