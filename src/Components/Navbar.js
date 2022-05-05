import { Search, ShoppingBasket, ShoppingCartOutlined } from '@mui/icons-material'
import { React } from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider';
import "../styles/Header.scss";



export default function NavBar({ }) {
    // const [{ basket }, dispatch] = useStateValue();
    const basket = 2;

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
                        <option>
                            hols
                        </option>
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