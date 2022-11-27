import React from 'react';

const Blog = () => {
    return (
        <div className='pt-36 pb-10'>
            <div className='w-10/12 m-auto mt-3 bg-orange-200 p-5'>
                <h1 className='text-orange-700 text-3xl font-bold'>LWhat are the different ways to manage a state in a React application?</h1>
                <br />
                <div className='text-zinc-700'>
                    <p>There are four main types of state you need to properly manage in your React apps:</p>
                    <p>
                        <strong>Local state</strong>: Local state is data we manage in one or another component. It is most often managed in React using the useState hook.
                        <br />
                        <strong>Global state</strong>: Global state is data we manage across multiple components. it is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                        <br />
                        <strong>Server state</strong>: Data that comes from an external server that must be integrated with our UI state. It is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                        <br />
                        <strong>URL state</strong>: Data that exists on our URLs, including the pathname and query parameters.
                    </p>
                </div>
            </div>
            <div className='w-10/12 m-auto mt-3 bg-orange-200 p-5'>
                <h1 className='text-orange-700 text-3xl font-bold'>?</h1>
                <br />
                <div className='text-zinc-700'>
                    <p>Lorem ipsum dolor sit ams atque,is quam. Dolorum deserunt facilis sapie quos in facere! Inventore sed optio velit qui minima.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;