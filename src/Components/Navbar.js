import { Search, ShoppingBasket, ShoppingCartOutlined } from '@mui/icons-material'
import { React } from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider';
import "../styles/Header.scss";
import { useSelector } from 'react-redux';



export default function NavBar({ }) {
    const listCategories = useSelector(state => state.product.listCategories);
    const basket = useSelector(state => state.product.basket);
    
    return (
        <div className="header">
            <Link to="/">
                <img
                    className="headerlogo"
                    src={require("../assets/logo-amazon.png")}
                    alt="amazon-logo"
                />
            </Link>

            <div className="headersearch">
                <div>
                    <select>
                        <option value="">All Categories</option>
                        {listCategories?.map((item) => (
                            <option value={item.id}>{item.name}</option>
                        ))}
                    </select>
                    <input type="text" className="headersearchinput" />
                </div>
                <Search className="headerSearchIcon" />
            </div>

            <div className="headernav">
                <Link to="/login">
                    <div className="headeroption">
                        <span className="headerOptionOne">Hola, identifícate</span>
                        <span className="headerOptionTwo">Cuentas y Listas</span>
                    </div>
                </Link>
                <div className="headeroption">
                    <span className="headerOptionOne">Devoluciones</span>
                    <span className="headerOptionTwo">Y pedidos</span>
                </div>
                <Link to="/checkout">
                    <div className="headeroptionBasket">
                        <ShoppingCartOutlined fontSize='large' />
                        <span className="headerOptionTwo">Carrito </span>
                        <span className="headerOptionTwo headerBasketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>

    )

}