import React from "react";
import { Link } from "react-router-dom";
import "../styles/Product.scss";

function Product({ id, title, image, price, rating }) {
  // const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch({
    //   type: "ADD_TO_BASKET",
    //   item: {
    //     id: id,
    //     image: image,
    //     title: title,
    //     price: price,
    //     rating: rating
    //   }
    // });
  };
  return (
    <Link className="product" to={`/product/${id}`}>
      <div className="productInfo">
      </div>
      <img src={image} alt="" />
        <p>{title}</p>
        <p className="productPrice">
        {price}
        </p>
      <button onClick={addToBasket}>Add to Basket</button>
    </Link>
  );
}

export default Product;
