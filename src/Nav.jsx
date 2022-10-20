import React from 'react'

function Nav() {
    return (
        <div className="flex flex-col lg:flex-row md:flex-col justify-between text-center p-10 ">
            <div className="logo">
                <a href="#" className="text-2xl font-bold opacity-70 hover:opacity-100 duration-200 hover:text-4xl ">sunnyside</a>
            </div>
                <div>
                    <ul className="menu flex flex-col lg:flex-row md:flex-col font-semibold items-center mt-1 ">
                        <li className=" mb-5 mx-5 hover:scale-150 duration-500"><a href="#">About</a></li>
                        <li className=" mb-5 mx-5 hover:scale-150 duration-500"><a href="#">Services</a></li>
                        <li className=" mb-5 mx-5 hover:scale-150 duration-500"><a href="#">Projects</a></li>
                        <li className=" mb-5 mx-5 flex justify-center items-center bg-white rounded-full hover:bg-orange-400 hover:border-transparent 
                        transition-transform hover:scale-110 duration-700 motion-safe:tranfrom-none hover:shadow-2xl h-[40px] w-[100px]  text-black"><a href="#">CONTACT</a></li>
                        
                    </ul>
                </div>
            
        </div>
    )
    }

export default Nav