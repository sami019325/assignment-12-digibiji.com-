import React, { useContext } from 'react';
import { SharedContext } from '../Componets/SharedData';

const SellProduct = () => {
    const { user } = useContext(SharedContext)


    const InsertData = (e) => {
        e.preventDefault()
        const event = e.target
        const user = e.target.user.value
        const email = e.target.email.value
        const name = e.target.name.value
        const location = e.target.location.value
        const used = e.target.used.value
        const date = e.target.date.value
        const originPrice = e.target.originPrice.value
        const price = e.target.price.value
        const type = e.target.type.value
        const number = e.target.number.value
        const image = e.target.image.value
        const product = { user, email, price, type, number, name, location, used, originPrice, date, image }
        console.log(product)
    }
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
                <select className="select select-ghost w-full ">
                    <option name='type' disabled selected>Pick the best JS framework</option>
                    <option>processor</option>
                    <option>casing</option>
                    <option>ram</option>
                </select>
                <p className='font-bold'>Image URL:</p>
                <input type="text" placeholder="Type here" required name='image' className="input input-bordered w-full " />
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