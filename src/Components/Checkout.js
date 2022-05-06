import React from "react";
import "../styles/Checkout.scss";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct.js";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../Redux/actions/product";

function Checkout() {
  const dispatch = useDispatch()
  const baskets = useSelector(state => state.product.checkoutBasket);
  const listProduct = useSelector(state => state.product.listProducts);

  const searchProduct = baskets.map(productID => {
      return listProduct.find(x => x.id === productID)
  })
  const calculateTotalPrice = searchProduct.reduce((prev, current) => prev + current.price , 0)

  const removeFromBasket = (data) => {
    dispatch(removeProduct(data));
  };

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
         {searchProduct.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.name}
              image={item.images[0].url}
              price={item.price}
              category={item.category}
              removeFromBasket={removeFromBasket}
            />
          ))} 
        </div>
      </div>

      <div className="checkoutRight">
        <Subtotal price ={calculateTotalPrice} product={searchProduct} />
      </div>
    </div>
  );
}

export default Checkout;
