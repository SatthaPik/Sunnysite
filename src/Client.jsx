import React from 'react'
import imgEmily from './assets/img/image-emily.jpg'
import imgThomas from './assets/img/image-thomas.jpg'
import jennie from './assets/img/image-jennie.jpg'







function Client() {
    return (
        <div>
            <div className="flex justify-center items-center h-60">
                <h2 className="uppercase font-serif font-bold opacity-50 text-xl">client testimonials</h2>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-1 text-center mt-[-50px] py-[5rem]">
                <div className="img-emilyR ">
                        <img src= {imgEmily} alt="Emily" className="inline-block rounded-full mb-10" />
                            <p className="ml-20 mr-20">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sed mollitia explicabo. Aspernatur dolorem soluta tempora quis tenetur laboriosam fugiat modi voluptate omnis, a, voluptas molestiae adipisci odit blanditiis optio?
                            </p>
                            <div className="name-emilyR py-10">
                                <h3 className="font-serif font-bold ">Emily R.</h3>
                                <p  className="text-gray-400">Marketing Director</p>
                            </div>
                </div>

                <div className="img-thomasS">
                    <img src= {imgThomas} alt="thomasS" className="inline-block rounded-full mb-10" />
                    <p className="ml-20 mr-20">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sed mollitia explicabo. Aspernatur dolorem soluta tempora quis tenetur laboriosam fugiat modi voluptate omnis, a, voluptas molestiae adipisci odit blanditiis optio?
                    </p>
                    <div className="name-thomasS py-10">
                        <h3 className="font-serif font-bold ">Thomas S.</h3>
                        <p  className="text-gray-400">Chief Operating Officer</p>
                    </div>
                </div>

                <div className="img-JennieF">
                    <img src= {jennie} alt="JennieF" className="inline-block rounded-full mb-10" />
                    <p className="ml-20 mr-20">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sed mollitia explicabo. Aspernatur dolorem soluta tempora quis tenetur laboriosam fugiat modi voluptate omnis, a, voluptas molestiae adipisci odit blanditiis optio?
                    </p>
                    <div className="name-JennieF py-10">
                        <h3 className="font-serif font-bold ">Jennie F.</h3>
                        <p className="text-gray-400">Business Owner</p>
                    </div>
                </div>









            </div>

        </div>
    )
}

export default Client