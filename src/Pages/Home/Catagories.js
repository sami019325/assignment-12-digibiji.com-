import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Catagories = () => {
    const [category, setCategory] = useState([])
    console.log(category)
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div className='w-10/12 m-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
                category.map(cate => <div key={cate._id}>
                    <Link to={cate.location} className='border border-spacing-2 hover:border-indigo-800 cursor-pointer flex flex-col h-full p-5 items-center justify-center  rounded-3xl'>
                        <img src={cate.picture} alt={cate.type} srcset="" />
                        <h1 className="text-5xl font-bold">{cate.type}</h1>
                    </Link>
                </div>)
            }

        </div>
    );
};

export default Catagories;