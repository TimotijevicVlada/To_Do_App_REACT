import React from 'react';

const Todo = ({todo, handleDelete, handlePreview}) => {



    return (
        <div onClick={() => handlePreview(todo.id)} className='todo'>
            <div className='todo_title'>
                <h3 >{todo.title}</h3>
            </div>
            <div className='todo_desc'>
                <p >{todo.desc}</p>
            </div>
            <div className='todo_bottom'>
                <div className='events'>
                    <i className='fas fa-edit'></i>
                    <i onClick={() => handleDelete(todo.id)} className='fas fa-trash'></i>
                </div>
                <p className='date'>{todo.time}</p>
            </div>
        </div>
    )
}

export default Todo;
