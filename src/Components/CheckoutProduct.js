import React from "react";
import "../styles/CheckoutProduct.scss";
import { useStateValue } from "./StateProvider";
import FlipMove from "react-flip-move";

function CheckoutProduct({ id, title, image, price, rating }) {
  // const [{ basket }, dispatch] = useStateValue();
  const basket = 2;

  const removeFromBasket = () => {
    // dispatch({
    //   type: "REMOVE_FROM_BASKET",
    //   id: id
    // });
  };

  return (
    <FlipMove>
      <div className="checkoutProduct">
        <img className="checkoutProductImage" src={image} alt="" />
        <div className="checkoutProductInfo">
          <p className="checkoutProductTile">{title}</p>
          <p className="checkoutProductPrice">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProductRating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
      </div>
    </FlipMove>
  );
}

export default CheckoutProduct;
