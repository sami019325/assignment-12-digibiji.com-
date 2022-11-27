import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SharedContext } from '../../Componets/SharedData';
import logo from './../../Resources/logo.png'
const NavBar = () => {
    // const user = 'Sami'
    const { logOutCall, user, loading } = useContext(SharedContext)
    const logOutCallLocal = () => {
        logOutCall()
    }
    if (loading) {
        return (
            <div>
                loading...\
            </div>
        )
    }
    else {
        return (
            <div className='fixed top-0 left-0 right-0 z-50'>
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <Link to='/' clLinkssName="btn btn-ghost normal-case text-xl"><img src={logo} alt="logo" srcset="" /></Link>
                    </div>
                    <div className="flex-none">
                        <ul className='flex items-center justify-center'>
                            <li><Link className='btn btn-ghost font-bold'>Blog</Link></li>

                        </ul>

                        {
                            user.uid ?
                                <div className='flex items-center justify-center'>
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                                            <div className="indicator">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                                <span className="badge badge-sm indicator-item">8</span>
                                            </div>
                                        </label>
                                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                                            <div className="card-body">
                                                <span className="font-bold text-lg">8 Items</span>
                                                <span className="text-info">Subtotal: $999</span>
                                                <div className="card-actions">
                                                    <button className="btn btn-primary btn-block">View cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={user?.photoURL} alt='user profile' />
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                            <li>
                                                <Link className="justify-between">
                                                    Profile
                                                    <span className="badge">Buyer</span>
                                                </Link>
                                            </li>
                                            <li><Link>Settings</Link></li>
                                            <li><button onClick={logOutCallLocal}>Logout</button></li>
                                        </ul>
                                    </div>
                                </div>
                                :
                                <ul className='flex items-center justify-center'>
                                    <li><Link to='/login' className='btn btn-ghost font-bold text-red-600'>Log In</Link></li>
                                    <li><Link className=' font-bold text-red-600'>||</Link></li>
                                    <li><Link to='/register' className='btn btn-ghost font-bold text-red-600'>Register</Link></li>
                                </ul>
                        }
                    </div>
                </div>
                <hr className='hero' />
            </div>
        );
    }

};

export default NavBar;