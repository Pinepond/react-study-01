import React, { useState } from "react";
import "./App.css";

//export default class App extends Component {
export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");
  // state = {
  //   todoData: [],
  //   value: "",
  // };

  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    console.log("newTodoData", newTodoData);
    setTodoData(newTodoData);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    setTodoData((todoData) => [...todoData, newTodo]);
    setValue("");
  };

  const handleCompletedChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });

    setTodoData(newTodoData);
  };

  return (
    <div className="container">
      <div className="todoBlock">
        <div>
          <h1>할일목록</h1>
        </div>

        {todoData.map((data) => (
          <div style={this.getStyle(data.completed)} key={data.id}>
            <p>
              <input
                type="checkbox"
                defaultChecked={data.completed}
                onChange={() => handleCompletedChange(data.id)}
              ></input>
              {data.title}
              <button
                style={this.btnStyle}
                onClick={() => handleClick(data.id)}
              >
                x
              </button>
            </p>
          </div>
        ))}
        <form style={{ display: "flex" }} onSubmit={handleSubmit}>
          <input
            type="text"
            name="value"
            style={{ flex: "10", padding: "5px" }}
            placeholder="todo 입력"
            value={value}
            onChange={handleChange}
          ></input>
          <input
            type="submit"
            value="입력"
            className="btn"
            style={{ flex: "1" }}
          ></input>
        </form>
      </div>
    </div>
  );
}
