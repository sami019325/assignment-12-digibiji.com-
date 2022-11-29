import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { SharedContext } from '../../Componets/SharedData';
import BuyModal from '../Products/BuyModal';
import Item from '../Products/Comp/Item';
// import { SharedContext } from '../../Componets/SharedData';
// import BuyModal from './BuyModal';
// import Item from './Comp/Item';
const Advertise = () => {
    const { user } = useContext(SharedContext)
    const [items, setItems] = useState([])
    const [findItem, setfindItem] = useState(false)
    const [product, setproduct] = useState([])
    useEffect(() => {
        fetch(`https://y-sami019325.vercel.app/advertise`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    console.log('product for main', items)
    return (
        <div className='w-11/12 m-auto pt-36 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
                items.map(product => <div key={product._id}>
                    <Item item={product}
                        setproduct={setproduct}
                        setfindItem={setfindItem}
                    ></Item>
                </div>)
            }

            <BuyModal findItem={findItem} product={product} ></BuyModal>
        </div>
    );
};

export default Advertise;