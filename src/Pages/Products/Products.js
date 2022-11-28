import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { SharedContext } from '../../Componets/SharedData';
import BuyModal from './BuyModal';
import Item from './Comp/Item';

const Products = () => {
    const [items, setItems] = useState([]);
    const IDENDARTA = useLoaderData()
    const { user } = useContext(SharedContext)
    const [findItem, setfindItem] = useState(false)
    const [product, setproduct] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/category/${IDENDARTA}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    console.log('product for main', product)
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

export default Products;