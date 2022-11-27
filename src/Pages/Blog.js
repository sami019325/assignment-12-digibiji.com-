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
                        <strong>URL state</strong>: Data that exists on our URLs, including the pathname and query parameters. It s often missing as a category of state, but it is an important one.
                        In many cases, a lot of major parts of our application rely upon accessing URL state.
                    </p>
                </div>
            </div>
            <div className='w-10/12 m-auto mt-3 bg-orange-200 p-5'>
                <h1 className='text-orange-700 text-3xl font-bold'>How does prototypical inheritance work?</h1>
                <br />
                <div className='text-zinc-700'>
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the <strong>Prototype</strong> of an object, we use Object. getPrototypeOf and Object.</p>
                </div>
            </div>
            <div className='w-10/12 m-auto mt-3 bg-orange-200 p-5'>
                <h1 className='text-orange-700 text-3xl font-bold'>What is a unit test? Why should we write unit tests?</h1>
                <br />
                <div className='text-zinc-700'>
                    <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. In his book "Working Effectively with Legacy Code", author Michael Feathers states that such tests are not unit tests when they rely on external systems: “If it talks to the database, it talks across the network, it touches the file system, it requires system configuration, or it can't be run at the same time as any other test."</p>
                    <p>
                        They enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.
                    </p>
                </div>
            </div>
            <div className='w-10/12 m-auto mt-3 bg-orange-200 p-5'>
                <h1 className='text-orange-700 text-3xl font-bold'>React vs. Angular vs. Vue</h1>
                <br />
                <td><b>React</b> is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.</td>
                <td><b>Angular</b> is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.</td>
                <td><b>Vue.js</b> is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.</td>


            </div>
        </div>
    );
};

export default Blog;