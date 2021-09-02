import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {

  let [count,setcount] = useState(false);
  return (
    <div id="main">
    <button id="click" onClick={()=>setcount({count:true})}>Click me</button>
      {
        count?<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>:null
      }
    </div>
  );
}


export default App;
