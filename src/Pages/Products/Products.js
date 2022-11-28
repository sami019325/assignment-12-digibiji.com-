import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Item from './Comp/Item';

const Products = () => {
    const [items, setItems] = useState([]);
    const IDENDARTA = useLoaderData()
    useEffect(() => {
        fetch(`http://localhost:5000/category/${IDENDARTA}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    console.log('item==================================', items)

    return (
        <div className='pt-36 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
                items.map(product => <div key={product._id}>
                    <Item item={product}></Item>
                </div>)
            }
        </div>
    );
};

export default Products;