import React from 'react'
import { useParams } from 'react-router-dom'
import '../styles/ProductDetail.scss'
import CarrouselImages from './CarrouselImages'
import ClientsCommits from './ClientsCommits'
import ProductPriceAdd from './ProductPriceAdd'
import ProductsDescription from './ProductsDescription'
import RelatedProducts from './RelatedProducts'

const data = {
    title: "goalgoalgoa lgoalgoalgoa lgoalgoa algoalgoagoalgoalgoa lgoalgoalgoal",
    brand: "canon",
    color: "Negro",
    estilo: "24-105mn",
    garantia: "garantia",
    image: "asd",
    descripcion: "asdasdasdasdasdasdasdasdasdasdav sdasdasda sdasdasda sdasdasda sdasdasda sdasdasda ",
    price: 10210,
    rating: 3,
    images: [
       "camera/1.png",
       "camera/2.png",
       "camera/3.png",
    ]
}

function ProductDetail() {
    const { id } = useParams()
    const { title, image, price, rating, images } = data
    console.log(id)
  return (
    <div className='container'>
       <div className='navbar'>barra</div>
        <div className='contentInfo'>
            <div>
                <CarrouselImages images={images} />
            </div>
            <div>
                <ProductsDescription data={ data }/>
            </div>
            <div>
                <ProductPriceAdd data={data}/>
            </div>
        </div>
            <div>
                <RelatedProducts/>
            </div>
                <ClientsCommits idProduct={id} />
            <div>
            </div>
    </div>
  )
}

export default ProductDetail