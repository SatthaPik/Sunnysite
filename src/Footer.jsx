import React from 'react'
import { FaFacebookSquare ,FaInstagram,FaPinterest, FaTwitch } from "../node_modules/react-icons/fa";






function Footer() {
    return (
        <div className=" bg-emerald-400  h-[30rem] py-20 text-white">
            <h1 className="text-center text-5xl font-extrabold">sunnyside</h1>
            <div className="Services font-medium text-lg">
                <ul className="flex justify-center py-10">
                    <li className=" mx-10 my-10">
                        <a href="#">About</a></li>
                    <li className=" mx-10 my-10">
                        <a href="#">Service</a></li>
                    <li className=" mx-10 my-10">
                        <a href="#">Projects</a></li>
                </ul>
                <ul className="social flex justify-center py-10 ">
                    <li className=" mx-5"><a href="#"><FaFacebookSquare/></a></li>
                        
                    <li className=" mx-5"><a href="#"><FaInstagram/></a></li>
                        
                    <li className=" mx-5"><a href="#"><FaTwitch/></a></li>
                    
                    <li className=" mx-5"><a href="#"><FaPinterest/></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer