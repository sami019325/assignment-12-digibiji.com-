import React, { useContext, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { SharedContext } from '../../Componets/SharedData';

const BuyModal = ({ findItem, setfindItem, product }) => {
    const { user } = useContext(SharedContext)

    console.log("productsss  ============ ", product)

    const soldCall = () => {
        console.log('find item', product._id)
        fetch(`https://y-sami019325.vercel.app/delete/${product._id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success("Your order is accepted")

            })
        toast.success("Your order is on the way 🚗 🚗 ")
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal flex flex-col items-center justify-center">
                <div className="modal-box w-11/12 max-w-5xl ">
                    <div className='flex flex-col items-center justify-center'>
                        <h3 className="font-bold text-lg">{user.displayName}</h3>
                        <p className="py-4">{user.email}</p>
                        <p className='font-bold'>{product.name}</p>
                        <img src={product.picture} alt="" srcset="" />
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" onClick={soldCall} className="btn">Buy</label>
                        <label htmlFor="my-modal-5" className="btn btn-outline">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyModal;