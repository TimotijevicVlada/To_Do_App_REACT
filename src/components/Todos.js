import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Todo from "./Todo";
import CreateTodo from "./CreateTodo";
import DeleteWindow from "./DeleteWindow";
import Preview from "./Preview";
import UpdateTodo from "./UpdateTodo";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [createTodoVisible, setCreateTodoVisible] = useState(false);
  const [deleteWindow, setDeleteWindow] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [updateVisible, setUpdateVisible] = useState(false);
  const [itemToUpdate, setItemToUpdate] = useState({});
  const [previewTodo, setPreviewTodo] = useState({});
  const [itemToDelete, setItemToDelete] = useState("");
  const [search, setSearch] = useState("");

  //Variable that sort all todos ascending by date
  const sortedTodos = todos.sort((a, b) => new Date(a.time) - new Date(b.time));

  //Variable that represent searched todos
  const searchedTodos = sortedTodos.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  //Function that handle first click on delete button
  const handleDelete = (id) => {
    setDeleteWindow(true);
    setItemToDelete(id);
  };

  //Handle preview todo
  const handlePreview = (id) => {
    const preview = todos.filter((item) => item.id === id);
    setPreviewTodo(preview[0]);
    setPreviewVisible(true);
  };

  //Handle update todo
  const handleUpdate = (id) => {
    setUpdateVisible(true);
    const itemUpdate = todos.filter((item) => item.id === id);
    setItemToUpdate(itemUpdate[0]);
  };

  //Function that search todos by the title
  const handleSearch = (e) => {
    setTimeout(() => {
        setSearch(e.target.value);
    }, 500)
  }

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
          Create new
        </button>
      </div>
      <div className="search_todo">
        <input
          onChange={(e) => handleSearch(e)}
          type="text"
          placeholder="Search todo"
        />
      </div>
      <div className={todos.length < 1 ? "centered" : "todos"}>
        {todos.length < 1 ? (
          <div className="no_todos">There is no todos yet</div>
        ) : (
          searchedTodos?.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              index={index}
              handleDelete={handleDelete}
              handlePreview={handlePreview}
              handleUpdate={handleUpdate}
            />
          ))
        )}
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
      {previewVisible && (
        <Preview
          previewTodo={previewTodo}
          setPreviewVisible={setPreviewVisible}
        />
      )}
      {updateVisible && (
        <UpdateTodo
          todos={todos}
          setTodos={setTodos}
          itemToUpdate={itemToUpdate}
          setUpdateVisible={setUpdateVisible}
        />
      )}
    </div>
  );
};

export default Todos;
