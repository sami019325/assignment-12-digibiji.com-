import React from 'react';
import { MdLocationOn, MdAddShoppingCart, MdVerified } from "react-icons/md";

const Item = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center ">
                    <h2 className="card-title">Shoes!</h2>
                    <div className='flex items-center text-center gap-2'>
                        <MdLocationOn className='text-lg' /> <span>Dhaka </span> <p>||</p>
                        <p className='flex items-center text-center gap-2'> seller: <span>Usuf</span> <MdVerified className='text-lg text-primary' /></p>
                    </div>
                    <p>Price: <span>400</span> </p>
                    <hr className='hero' />
                    <div className='text-gray-700'>
                        <br />
                        <h3 className="text-lg">Other Info</h3>
                        <p>The product is <span className='font-bold'> 3 </span> used and it is still is in <span className='font-bold'> good </span> condition. Original price of the product was <span className='font-bold'>700</span>. </p>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                        <button className="btn btn-ghost"><MdAddShoppingCart className='text-2xl' /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;