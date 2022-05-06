import { PlayArrow, ShoppingCart, } from '@mui/icons-material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../Redux/actions/product'
import '../styles/ProductPriceAdd.scss'

function ProductPriceAdd({ data, idProduct }) {
    const { title, price, brand, color, estilo, garantia, descripcion } = data
    console.log(data)
    const dispatch = useDispatch()
    const handleAddProduct = () => {
        dispatch(addProduct(idProduct))
    }
    return (
        <div className='contentPriceAdd'>
            <div className='priceDisplay'>
                <h2>
                    ${price}
                </h2>
                <p>envio</p>
                <p>Llega:</p>
                <p>puede que lo recibas despues de navidad</p>
            </div>
            <div className='buttonsContainer'>
                <button className='buttonWithIcon' onClick={handleAddProduct}>
                    <PlayArrow />
                    <p>Agregar al carrito</p>
                </button>
                <button className='buttonWithIcon2'>
                    <ShoppingCart />
                    <p>Comprar ahora</p>
                </button>
                <p>transacción segura</p>
            </div>
        </div>

    )
}

export default ProductPriceAdd