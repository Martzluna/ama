import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDetailProduct } from '../Redux/actions/product'
import '../styles/ProductDetail.scss'
import CarrouselImages from './CarrouselImages'
import ClientsCommits from './ClientsCommits'
import ProductPriceAdd from './ProductPriceAdd'
import ProductsDescription from './ProductsDescription'
import RelatedProducts from './RelatedProducts'

// const data = {
//     title: "goalgoalgoa lgoalgoalgoa lgoalgoa algoalgoagoalgoalgoa lgoalgoalgoal",
//     brand: "canon",
//     color: "Negro",
//     estilo: "24-105mn",
//     garantia: "garantia",
//     image: "asd",
//     descripcion: "asdasdasdasdasdasdasdasdasdasdav sdasdasda sdasdasda sdasdasda sdasdasda sdasdasda ",
//     price: 10210,
//     rating: 3,
//     images: [
//        "camera/1.png",
//        "camera/2.png",
//        "camera/3.png",
//     ]
// }

function ProductDetail() {
    const { id } = useParams()
    const data = useSelector(state => state.product.detailProduct)
    console.log('data >>> ', data)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDetailProduct(id))
    }, [id])
    if (!data.name) {
        return null 
    }
    return (
        <div className='container'>
            <div className='navbar'>barra</div>
            <div className='contentInfo'>
                <div>
                    <CarrouselImages images={data.images} />
                </div>
                <div>
                    <ProductsDescription data={data} />
                </div>
                <div>
                    <ProductPriceAdd data={data} idProduct={id} />
                </div>
            </div>
            <div>
                <RelatedProducts products={data.productsByCategory}/>
            </div>
            <ClientsCommits idProduct={id} />
            <div>
            </div>
        </div>
    )
}

export default ProductDetail