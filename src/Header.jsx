import React from 'react'
import Nav from './Nav'
import { BsArrowDown } from "react-icons/bs";


function Header() {
    return (
        <div className="h-[40rem] bg-center  bg-header text-white">
            <Nav/>
            <h1 className="flex justify-center uppercase text-2xl font-serif">
                we are creatives
            </h1>
            <div className="flex justify-center my-10">
            <BsArrowDown className="text-8xl "/>
            </div>
            
        </div>
    )
}

export default Header