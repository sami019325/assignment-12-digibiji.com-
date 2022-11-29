import React, { useContext, useState } from 'react';
import { SharedContext } from '../Componets/SharedData';
import { ToastContainer, toast } from 'react-toastify';

const SellProduct = () => {
    const { user } = useContext(SharedContext)
    const [advers, setAdvers] = useState(false)
    console.log(advers)
    const InsertData = (e) => {
        e.preventDefault()
        const form = e.target;
        const user = e.target.user.value;
        const email = e.target.email.value;
        const name = e.target.name.value;
        const location = e.target.location.value;
        const used = e.target.used.value;
        const date = e.target.date.value;
        const originPrice = e.target.originPrice.value;
        const price = e.target.price.value;
        const productT = e.target.productT.value;
        const image = e.target.image.value;
        const condition = e.target.condition.value;
        const product = {
            picture: image,
            type: productT,
            Seller: user,
            name: name,
            location: location,
            price: price,
            OriginalPrice: originPrice,
            used: used,
            posted: date,
            condition: condition,
            IsAdvertised: advers,
            IsSold: false
        }
        console.log(product)

        fetch('http://localhost:5000/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    form = null
                    toast.success('Booking confirmed');
                }
                else {
                    //     toast.error(data.message);
                }
            })


    }
    const notify = () => toast("Wow so easy!");

    return (
        <div className='pt-36 pb-10'>
            <form className='w-6/12 m-auto bg-indigo-300 p-6' onSubmit={InsertData}>
                <input type="text" name='user' defaultValue={user.displayName} disabled className="input input-bordered w-full " />
                <br />
                <br />
                <input type="text" name='email' defaultValue={user.email} disabled className="input input-bordered w-full " />
                <br />
                <br />
                <hr className='hero' />
                <p className='font-bold'>Product Name:</p>
                <input type="text" placeholder="Type here" required name='name' className="input input-bordered w-full " />
                <p className='font-bold'>Location:</p>
                <input type="text" placeholder="Type here" required name='location' className="input input-bordered w-full " />
                <p className='font-bold'>How many days used?:</p>
                <input type="text" placeholder="Type here" required name='used' className="input input-bordered w-full " />
                <p className='font-bold'>Todays date:</p>
                <input type="date" placeholder="Type here" required name='date' className="input input-bordered w-full " />
                <p className='font-bold'>Original price:</p>
                <input type="number" placeholder="Type here" required name='originPrice' className="input input-bordered w-full " />
                <p className='font-bold'>Selling price:</p>
                <input type="number" placeholder="Type here" required name='price' className="input input-bordered w-full " />
                <p className='font-bold'>Selling Type:</p>
                <select name='productT' className="select select-ghost w-full ">
                    <option disabled selected>Pick the type of product</option>
                    <option>processor</option>
                    <option>casing</option>
                    <option>ram</option>
                </select>
                <select name='condition' className="select select-ghost w-full ">
                    <option disabled selected>Pick the condition of product</option>
                    <option>good</option>
                    <option>excellent</option>
                    <option>fair</option>
                </select>
                <p className='font-bold'>Image URL:</p>
                <input type="text" placeholder="Type here" required name='image' className="input input-bordered w-full " />
                <br />
                <br />
                <div className='flex items-center justify-center'>
                    <button className={`btn text-red-800 font-bold ${advers ? 'btn-info' : 'btn-ghost'}`} onClick={() => setAdvers(!advers)}>Advertise?</button>
                </div>
                <br />
                <br />
                <div className='flex items-center justify-center'>
                    <button className='m-auto btn btn-primary'>SUBMIT</button>
                </div>
            </form>
        </div>
    );
};

export default SellProduct;