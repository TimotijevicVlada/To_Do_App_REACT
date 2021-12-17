import React from 'react';
import { Link } from 'react-router-dom';

const Todo = () => {


    return (
        <div className='todo'>
            <div className='todo_header'>
                <Link className='link' to="/motivate">Motivate me!</Link>
            </div>
            <h2>Hello from todo</h2>
        </div>
    )
}

export default Todo;
