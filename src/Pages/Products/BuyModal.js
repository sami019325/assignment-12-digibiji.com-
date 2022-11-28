import React, { useContext, useEffect } from 'react';
import { SharedContext } from '../../Componets/SharedData';

const BuyModal = ({ findItem, setfindItem, product }) => {
    const { user } = useContext(SharedContext)

    console.log("productsss  ============ ", product)

    if (findItem) {
        console.log('find item')
        fetch(``)
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            {/* Put this part before </body> tag */}
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
                        <label htmlFor="my-modal-5" className="btn">Buy</label>
                        <label htmlFor="my-modal-5" className="btn btn-outline">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyModal;