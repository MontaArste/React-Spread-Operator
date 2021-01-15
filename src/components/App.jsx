import React, { useState } from "react";
import ToDo from "./ToDo";
function App() {
  const [item, setItem] = useState("");
  const [toDoItem, setToDoItem] = useState([]);

  function handleChange(event) {
    setItem(event.target.value);
  }
  function addItem() {
    setToDoItem((prevValue) => {
      return [...prevValue, item];
    });
    setItem(" ");
  }
  function deleteItem(id) {
    setToDoItem((toDoItem) => {
      return toDoItem.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {toDoItem.map((items, index) => (
            <ToDo key={index} id={index} text={items} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
