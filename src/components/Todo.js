import React from "react";

const Todo = ({ todo, handleDelete, handlePreview, handleUpdate }) => {


    
  return (
    <div className="todo">
      <div onClick={() => handlePreview(todo.id)} className="todo_upper">
        <div className="todo_title">
          <h3>{todo.title}</h3>
        </div>
        <div className="todo_desc">
          <p>{todo.desc}</p>
        </div>
      </div>
      <div className="todo_bottom">
        <div className="events">
          <i onClick={() => handleUpdate(todo.id)} className="fas fa-edit"></i>
          <i onClick={() => handleDelete(todo.id)} className="fas fa-trash"></i>
        </div>
        <p className="date">{todo.time}</p>
      </div>
    </div>
  );
};

export default Todo;
