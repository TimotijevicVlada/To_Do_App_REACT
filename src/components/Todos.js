import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Todo from "./Todo";
import CreateTodo from "./CreateTodo";
import DeleteWindow from "./DeleteWindow";

const Todos = () => {
  const [createTodoVisible, setCreateTodoVisible] = useState(false);
  const [deleteWindow, setDeleteWindow] = useState(false);
  const [itemToDelete, setItemToDelete] = useState("");
  const [todos, setTodos] = useState([]);

  
  //Function that handle first click on delete button
  const handleDelete = (id) => {
    setDeleteWindow(true);
    setItemToDelete(id);
  };

  //Function that get todos from the local storage
  const getLocalTodos = () => {
    if (localStorage.getItem("myTodos") === null) {
      localStorage.setItem("myTodos", JSON.stringify([]));
    } else {
      const myTodos = JSON.parse(localStorage.getItem("myTodos"));
      setTodos(myTodos);
    }
  };

  useEffect(() => {
    getLocalTodos();
  }, []);

  //Function that save todos to local storage
  const saveLocaleTodos = useCallback(() => {
    localStorage.setItem("myTodos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    saveLocaleTodos();
  }, [saveLocaleTodos]);

  return (
    <div className="todos_page">
      <div className="todo_header">
        <Link className="link" to="/motivate">
          Motivate me!
        </Link>
      </div>
      <div className="title">
        <h2>My To Do list</h2>
        <button onClick={() => setCreateTodoVisible(true)} className="add">
          Add new todo
        </button>
      </div>
      <div className="search_todo">
        <input type="text" placeholder="Search todo" />
      </div>

      <div className="todos">
        {todos?.map((todo, index) => (
          <Todo key={index} todo={todo} setDeleteWindow={setDeleteWindow} handleDelete={handleDelete}/>
        ))}
      </div>
      {createTodoVisible && (
        <CreateTodo
          setCreateTodoVisible={setCreateTodoVisible}
          todos={todos}
          setTodos={setTodos}
        />
      )}
      {deleteWindow && (
        <DeleteWindow
          setDeleteWindow={setDeleteWindow}
          itemToDelete={itemToDelete}
          todos={todos}
          setTodos={setTodos}
        />
      )}
    </div>
  );
};

export default Todos;
