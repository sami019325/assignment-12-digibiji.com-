import React from 'react';
import './Home.css'
import laptopParts from './../../Resources/istockphoto-523625442-612x612-removebg-preview.png'




const Home = () => {




    return (
        <div>
            {/* home impression  */}
            <div className=' grid grid-cols-1 md:grid-cols-3 m-auto mt-20 p-5 w-11/12 bg-indigo-800 rounded-2xl'>
                <div className=' items-center justify-center '>
                    <img className='bg_Img_Of_Home' src={laptopParts} alt="laptop " srcset="" />
                </div>
                <div className='col-span-2 flex flex-col items-center justify-center '>
                    <article>
                        <h1 className="text-xl lg:text-5xl font-bold text-center text-white">Welcome to DigiBiji.com </h1>
                    </article>
                </div>
            </div>

            {/* ======================== */}

            <div className=' grid grid-cols-1 md:grid-cols-3 m-auto mt-20 p-5 w-11/12 bg-slate-800 rounded-2xl'>
                <div className=' items-center justify-center '>
                    <img className='bg_Img_Of_Home' src={laptopParts} alt="laptop " srcset="" />
                </div>
                <div className='col-span-2 flex flex-col items-center justify-center '>
                    <article>
                        <h1 className="text-xl lg:text-5xl font-bold text-center text-white">Welcome to DigiBiji.com </h1>
                    </article>
                </div>
            </div>


        </div>
    );
};

export default Home;