import React, { useState } from "react";

function App() {

const [item, setItem] = useState("");
const [toDoItem, setToDoItem] = useState([]);

function handleChange(event){
  setItem(event.target.value)
}
function addItem(){
  setToDoItem(prevValue=>{
  return [...prevValue, item]
  })
  setItem(" ");
}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {toDoItem.map(items => <li>{items}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;

