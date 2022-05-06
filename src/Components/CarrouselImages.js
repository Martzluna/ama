import React, { useState } from 'react'
import "../styles/CarrouselImages.scss"

function CarrouselImages({ images = [] }) {
    const [imageSelect, setImageSelect] = useState(0)
    const handleSelectImage = (index) => {
        setImageSelect(index)
    }
    return (
        <div className='contentImages'>
            <div className='contentThumbnails'>
                {images.map((image, index) => (
                    <img className={imageSelect === index ? "active" : ""} onMouseOver={() => handleSelectImage(index)} src={image.url} key={index} />
                ))}
            </div>
            <div className='contentActive'>
                <img src={images[imageSelect].url} />
            </div>
        </div>
    )
}

export default CarrouselImages