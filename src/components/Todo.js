import React from "react";

const Todo = ({ todo, todos, setTodos, index, handleDelete, handlePreview, handleUpdate }) => {


  //Handle complete 
  const completeHandler = () => {
    setTodos(todos.map(item => {
      if(item.id === todo.id) {
        return {
          ...item, 
          completed: !item.completed
        }
      }
      return item;
    }))
  }

  return (
    <div className={todo.completed ? "todo marked" : "todo"}>
      <span className={todo.completed ? "done" : "unvisible"}>DONE</span>
      <div onClick={() => handlePreview(todo.id)} className="todo_upper">
        <div className="todo_title">
          <span>#{index + 1}</span>
          <h3>{todo.title}</h3>
        </div>
        <div className="todo_desc">
          <p>{todo.desc}</p>
        </div>
      </div>
      <div className="todo_bottom">
        <div className="events">
          <i onClick={completeHandler} className="fas fa-check"></i>
          <i onClick={() => handleUpdate(todo.id)} className="fas fa-edit"></i>
          <i onClick={() => handleDelete(todo.id)} className="fas fa-trash"></i>
        </div>
        <p className="date">{new Date(todo.time).toDateString()}</p>
      </div>
    </div>
  );
};

export default Todo;
