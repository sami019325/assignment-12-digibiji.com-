import React, { useEffect, useState } from 'react';
import './Home.css'
import laptopParts from './../../Resources/istockphoto-523625442-612x612-removebg-preview.png'

import parts1 from './../../Resources/download-removebg-preview.png'
import parts2 from './../../Resources/GeIL-Polaris-RGB-removebg-preview.png'
import parts3 from './../../Resources/robeytech-senna-featured-image-removebg-preview.png'


const Home = () => {

    let ValueOfShow = 0;
    console.log('OutSide', ValueOfShow);

    const [currentIndex, setCurrentIndex] = useState(0);
    const ShowImgSSrc = [parts1, parts2, parts3, parts2]

    const titleText1 = 'You will get some of the most extraordinary offerings on the processor'
    const titleText2 = 'You will find high-speed RAM at a meagre price'
    const titleText3 = 'Looking for casing? You are at the right place to search'
    const ShowTitleText = [titleText1, titleText2, titleText3, titleText2]

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentIndex === 3) {
                setCurrentIndex(0);
            }
            else {
                setCurrentIndex(currentIndex + 1);
            }
        }, 10000)

        return () => clearInterval(intervalId);
    }, [currentIndex])




    return (
        <div>
            {/* home impression  */}
            <div className=' grid grid-cols-1 md:grid-cols-3 m-auto mt-36 p-5 w-11/12 bg-indigo-800 rounded-2xl'>
                <div className=' items-center justify-center '>
                    <img className='bg_Img_Of_Home' src={laptopParts} alt="laptop " />
                </div>
                <div className='col-span-2 flex flex-col items-center justify-center '>
                    <article>
                        <h1 className="text-xl lg:text-5xl font-bold text-center text-white">Welcome to DigiBiji.com </h1>
                    </article>
                </div>
            </div>

            {/* ======================== */}


            <div className=' h-96'>
                <div className='hide_One h-80 grid grid-cols-1 md:grid-cols-3 m-auto mt-20 p-5 w-11/12 bg-slate-800 rounded-2xl'>
                    <div className=' items-center justify-center '>

                        <img className='bg_Img_Of_Home' src={ShowImgSSrc[currentIndex]} alt="laptop " />

                    </div>
                    <div className='col-span-2 flex flex-col items-center justify-center '>
                        <article>
                            <h1 className="text-xl lg:text-2xl font-bold text-center text-white">{ShowTitleText[currentIndex]}</h1>
                        </article>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Home;