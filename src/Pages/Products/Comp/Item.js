import React, { useContext } from 'react';
import { MdLocationOn, MdAddShoppingCart, MdVerified } from "react-icons/md";

const Item = ({ item, setfindItem, setproduct }) => {
    const { name, picture, Seller, price, location, OriginalPrice, used, posted, condition } = item
    return (
        <div>
            <div className="card w-96 bg-base-100 h-full shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center ">
                    <h2 className="card-title">{name}</h2>
                    <div className='flex items-center text-center gap-2'>
                        <MdLocationOn className='text-lg' /> <span>{location} </span> <p>||</p>
                        <p className='flex items-center text-center gap-2'> seller: <span>{Seller}</span> <MdVerified className='text-lg text-primary' /></p>
                    </div>
                    <p>Price: <span>{price}</span> </p>
                    <hr className='hero' />
                    <div className='text-gray-700'>
                        <br />
                        <h3 className="text-lg">Other Info</h3>
                        <p>The product is <span className='font-bold'> {used}</span> used and it is still is in <span className='font-bold'> {condition} </span> condition. Original price of the product was <span className='font-bold'>{OriginalPrice}</span>. </p>
                    </div>
                    <div className="card-actions">
                        <button onClick={() => setfindItem(true) + setproduct(item)} className="btn btn-primary"> <label htmlFor="my-modal-5" >Buy Now</label></button>

                        <button className="btn btn-ghost"><MdAddShoppingCart className='text-2xl' /></button>
                    </div>
                </div>
                <small className='text-center text-gray-600 m-4'>Uploaded: {posted}</small>
            </div>
        </div>
    );
};

export default Item;