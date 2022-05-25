import './App.css';
import axios from "axios"
import {useEffect, useRef, useState} from "react"

function App() {

  const inputField = useRef();
  const [text, setText] = useState("");

  function sendData(event){
    event.preventDefault();
        // POST request using axios inside useEffect React hook
    console.log("state text", text);
    const article = { title: text };
    axios.post('/', article)
        .then((response) => {
          console.log("sending data");

          console.log(response);
        }
      ).catch((error)=>{
        console.log("receives no response");
      });

    setText("keep going... ")
  }

  function handleChange(event){
    setText(event.target.value)

  }



  return (
    <div className="App">
      <header className="App-header">
      <h1>welcome user</h1>
   

      <form onSubmit={sendData}>
    
        <input type="text" value={text} onChange={handleChange} />
        <button type="submit" value="Submit">submit</button>
      </form>
      </header>
    </div>
  );
}

export default App;
