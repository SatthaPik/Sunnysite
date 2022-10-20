import React from 'react'
import imgStandout from './assets/img/image-stand-out.jpg'


function Sectiontow() {
    return (
        <div className=" grid lg:grid-cols-2 md:grid-cols-1">
            <div className="left row-start-2 row-end-3 lg:col-start-1 lg:col-end-2">
                <img className=" w-full" src={imgStandout} alt="transform your brand" />
            </div>
            <div className="right flex justify-center items-center p-[5rem] row-start-1 row-end-2 lg:row-start-2 lg:row-end-3">
                <div>
                    <h3 className=" grid grid-cols-2 font-bold mb-10 text-4xl">Stand out to the right audience</h3>
                    <p className="mb-10"> Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. Amet sequi id aperiam dignissimos
                        commodi molestias ipsa, porro, perspiciatis architecto deserunt
                        ab magni dolore voluptatem possimus, dolorem tenetur?
                    </p>
                    <a href="#"  className="border-b-4 rounded-sm  hover:border-rose-400 font-bold">LEAEN MORE</a>
                </div>
            </div>
        </div>
    )
}

export default Sectiontow