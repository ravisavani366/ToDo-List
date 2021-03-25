import React, { useState } from 'react'
import ToDoLists from "./ToDoLists";
import './App.css';

const App = () => {

  const [InputList, SetInputList] = useState("");
  const [Items, setItems] = useState([]);
  const ItemEvent = (event) => {
    SetInputList(event.target.value);
  };
  const ListOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, InputList];
    });
    SetInputList("");
  };

  const deleletItems = (id) => {
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      })
    })
  };
  return <>
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type='text' placeholder='Add a Item' value={InputList} onChange={ItemEvent} />

        <button onClick={ListOfItems}> + </button>
        <ol>
          {/* <li>{InputList}</li> */}
          {Items.map((itemval, index) => {
            return <ToDoLists key={index}
              id={index}
              text={itemval}
              onSelect={deleletItems}
            />;
          })}
        </ol>
      </div>
    </div>
  </>;
};

export default App;
