import React from 'react';

const Todo = ({title, desc, time}) => {
    return (
        <div className='todo'>
            <h3 className='todo_title'>{title}</h3>
            <p className='todo_desc'>{desc}</p>
            <p className='todo_time'>{time}</p>
        </div>
    )
}

export default Todo;
