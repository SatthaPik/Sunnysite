import React from 'react'
import imgGraphicDesign from './assets/img/image-graphic-design.jpg'
import imgPhotography from './assets/img/image-photography.jpg'


function Sectionone() {
    return (
        <div className=" grid lg:grid-cols-2 md:grid-cols-1 h-[800px] ">
            <div className="left flex  justify-center items-end bg-sec-three-left bg-cover lg:p-[25vh] text-center">
                <div>
                    <h3 className="text-2xl font-semibold  text-black opacity-50 mb-5">Graphic Design</h3>
                    <p className="text-black opacity-70">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati debitis ipsa laudantium totam libero dolor labore nam in exercitationem ad!
                    </p>
                </div>
            </div>
                <div className="right flex justify-center items-end bg-sec-three-right bg-cover lg:p-[25vh] text-center">
                    <div>
                        <h3 className=" text-2xl font-semibold  text-black opacity-50 mb-5">Photo Graphy</h3>
                        <p className="text-black opacity-70">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati debitis ipsa laudantium totam libero dolor labore nam in exercitationem ad!
                        </p>
                    </div>
            </div>
        </div>
    )
}

export default Sectionone