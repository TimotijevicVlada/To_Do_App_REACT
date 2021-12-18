import React, {useState} from "react";
import { Link } from "react-router-dom";
import Todo from "./Todo";
import CreateTodo from "./CreateTodo";

const Todos = () => {

  const [createTodoVisible, setCreateTodoVisible] = useState(false);

    const [todos, setTodos] = useState([{
        title: "Prodavnica",
        desc: "Treba da odem do prodavnice i da kupim hranu i pice.",
        time: "12.20.2021"
    }, {
      title: "Prodavnica",
      desc: "Treba da odem do prodavnice i da kupim hranu i pice.",
      time: "12.20.2021"
  }, {
    title: "Prodavnica",
    desc: "Treba da odem do prodavnice i da kupim hranu i pice.",
    time: "12.20.2021"
}]);

  return (
    <div className="todos_page">
      <div className="todo_header">
        <Link className="link" to="/motivate">
          Motivate me!
        </Link>
      </div>
      <div className="title">
        <h2>My To Do list</h2>
        <button onClick={() => setCreateTodoVisible(true)} className="add">Add new todo</button>
      </div>
      <div className="search_todo">
          <input type="text" placeholder="Search todo"/>
      </div>
      <div className="todos">
            {todos.map((item, index) => (
                <Todo key={index} title={item.title} desc={item.desc} time={item.time}/>
            ))}
      </div>
      {createTodoVisible && <CreateTodo />}
    </div>
  );
};

export default Todos;
