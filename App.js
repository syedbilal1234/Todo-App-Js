import logo from './logo.svg';
// import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  // const [list,setlist]=useState([])
  // const [input,setinput]=useState("")

  // const addtodo=(todo)=>{
  //   const newtodo={
  //     id:Math.random(),
  //     todo:todo
  //   }

  //   setlist(...list,newtodo)

  //   setinput("")

  let [arr, setArray] = useState([{ text: "abcd", confirmed: true, newValue: "" }])
  const [inputText, setInputText] = useState("")

  let add = () => {
    arr.push({
      text: inputText,
      confirmed: true,
      newValue: ""
    })
    setArray([...arr])
  }
  let delall = () => {
    setArray([])
  }




  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
       

        {arr.map((x, i) => {
          return (
            <div key={i}>
              {(x.confirmed && <p>{x.text}</p>) || <input key={i} value={x.newValue} onChange={(e) => { x.newValue = e.target.value; }}></input>}
              {(x.confirmed && <button onClick={() => { arr[i].confirmed = false; setArray([...arr]) }}>Edit</button>) || <button>Update</button>}

            </div>
          )
        })}
        <input onChange={(e) => setInputText(e.target.value)} placeholder={"enter"}></input>
        <p>{inputText}</p>
        <button onClick={add}>add</button>
        <button onClick={delall}>delt all</button>







      </header>
    </div>
  );
}

export default App;