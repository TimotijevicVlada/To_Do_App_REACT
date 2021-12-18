import React from 'react';

const Todo = ({todo}) => {
    return (
        <div className='todo'>
            <h3 className='todo_title'>{todo.title}</h3>
            <p className='todo_desc'>{todo.desc}</p>
            <p className='todo_time'>{todo.time}</p>
        </div>
    )
}

export default Todo;
