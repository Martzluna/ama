import { Search, ShoppingBasket, ShoppingCartOutlined } from '@mui/icons-material'
import { React, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider';
import "../styles/Header.scss";
import { useDispatch, useSelector } from 'react-redux';
import { listProductFilter } from '../Redux/actions/product';



export default function NavBar({ }) {
    const dispatch = useDispatch();
    const inputSearch = useRef(null);
    const [categorySelect, setCategorySelect] = useState("")
    const listCategories = useSelector(state => state.product.listCategories);
    const basket = useSelector(state => state.product.basket);
    const handleSearch = (e) => {
        e.preventDefault();
        const data = {
            search: inputSearch.current.value,
            category: categorySelect
        }
        dispatch(listProductFilter(data))
    }

    const handleChange = (e) => {
        setCategorySelect(e.target.value)
    }
    
    return (
        <div className="header">
            <Link to="/">
                <img
                    className="headerlogo"
                    src={require("../assets/logo-amazon.png")}
                    alt="amazon-logo"
                />
            </Link>

            <form className="headersearch" onSubmit={handleSearch}>
                <div>
                    <select onChange={handleChange}>
                        <option value="">All Categories</option>
                        {listCategories?.map((item) => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                        ))}
                    </select>
                    <input ref={inputSearch} type="text" className="headersearchinput" />
                </div>
                <button type='submit' className="headerSearchIcon">
                    <Search  />
                </button>
            </form>

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