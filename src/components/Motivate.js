import React from 'react';
import { Link } from 'react-router-dom';

const Motivate = () => {


    return (
        <div className='motivate'>
            <div className='motivate_header'>
                <Link className='link' to="/">I am motivated!</Link>
            </div>
            <h2>Hello from motivate</h2>
        </div>
    )
}

export default Motivate;
