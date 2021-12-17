import React, {useState} from "react";
import "./style/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from "./components/Todo";
import Motivate from "./components/Motivate";


function App() {


  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path="/" element={<Todo />}/>
            <Route path="/motivate" element={<Motivate />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
