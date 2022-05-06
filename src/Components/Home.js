import { React } from 'react'
import Product from "./Product";
import "../styles/Home.scss"
import { useSelector } from 'react-redux';

export default function Home() {
  const listProducts = useSelector(state => state.product.listProducts);
  return (
    <div className="home">
      <div className="homeContainer">
        <img
          className="homeImage"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/OPPO/A74/20thapril/GW/V348719848_IN_WLD_OPPO_A74_TallHero_1500x600._CB655112762_.jpg"
          alt=""
        />

        <div className="homeRow">
          {listProducts.map((product) => (
            <Product
              id={product.id}
              title={product.name}
              price={product.price}
              rating={5}
              image={product.images[0].url}
            />
          ))}
        </div>
      </div>
    </div>
  )
}