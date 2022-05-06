import React from 'react'
import '../styles/RelatedProducts.scss'
import Product from './Product'

function RelatedProducts({ products = [] }) {
    return (
        <div className='relatedContainer'>
            <h2>Productos relacionados con este artículo</h2>
            <div className='row'>
                {products.slice(0, 4).map((product) => (
                    <Product
                        key={product.id}
                        id={product.id}
                        title={product.name}
                        price={product.price}
                        rating={5}
                        image={product.images[0].url}
                    />
                ))}
            </div>
            <div className='relatedContainer'>
                <h2>Inspirado por tu historial de búsqueda</h2>
                <div className='row'>
                    {products.slice(0, 4).map((product) => (
                        <Product
                            key={product.id}
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

export default RelatedProducts