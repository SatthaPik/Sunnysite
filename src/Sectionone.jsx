import React from 'react'
import imgTransform from './assets/img/image-transform.jpg'


function Sectionone() {
    return (
        <div className=" grid lg:grid-cols-2 md:grid-cols-1">
            <div className="left flex justify-center items-center p-[5rem]">
                <div>
                    <h3 className=" grid grid-cols-2 font-bold mb-10 text-5xl">Transfrom your brand</h3>
                    <p className="mb-10"> Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. Amet sequi id aperiam dignissimos
                        commodi molestias ipsa, porro, perspiciatis architecto deserunt
                        ab magni dolore voluptatem possimus, dolorem tenetur?
                    </p>
                    <a href="#"  className="border-b-4 rounded-sm hover:border-yellow-400 font-bold">LEAEN MORE</a>
                </div>
            </div>
                <div className="right">
                    <img className=" w-full" src={imgTransform} alt="transform your brand" />
            </div>
        </div>
    )
}

export default Sectionone