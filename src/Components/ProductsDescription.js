import React from 'react'
import '../styles/ProductsDescription.scss'

function ProductsDescription({ data }) {
    const { name, price, brand, color, style, garantia, description } = data
    return (
        <div className='container'>
            <div className='title'>
                <h1>{name}</h1>
                <p>
                    marca: {brand}
                </p>
            </div>
            <hr className='divider' />
            <div className='price'>
                <p>
                    precio: {price}
                </p>
                <p>
                    {garantia}
                </p>
                <p>
                    {color}
                </p>
                <p>
                    estilo: {style}
                </p>
            </div>

            <hr className='divider' />

            <div className='description'>
                <h5>Acerca de este artículo</h5>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ProductsDescription