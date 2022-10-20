import React from 'react'
import imgMilkbottles from './assets/img/image-gallery-milkbottles.jpg'
import impOrange from './assets/img/image-gallery-orange.jpg'
import imgCone from './assets/img/image-gallery-cone.jpg'
import imgSugarcubes from './assets/img/image-gallery-sugarcubes.jpg'


function Gallery() {
    return (
        <div className="grid grid-cols-4">
            <img src={imgMilkbottles} alt="milkbottles" />
            <img src={impOrange} alt="orange" />
            <img src={imgCone} alt="cone" />
            <img src={imgSugarcubes} alt="sugarcubes" />
        </div>
    )
}

export default Gallery