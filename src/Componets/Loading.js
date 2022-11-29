import React from 'react';
import loading from './../Resources/Ellipsis-1s-200px.gif'
const Loading = () => {
    return (
        <div className='flex items-center justify-center p-11'>
            <img src={loading} alt="loading product category" srcset="" />
        </div>
    );
};

export default Loading;