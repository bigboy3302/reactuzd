import { useState } from "react";

function Counter() {
 const [result, setResult] = useState(0);
 const [input, setInput] = useState("");

 function addRatio() {
    setResult(result + parseInt(input));
 }

 function removeRatio() {
    setResult(result - parseInt(input));
 }

 return (
    <div className="App">
      <input type="number" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addRatio}>GANG + RATIO</button>
      <button onClick={removeRatio}>GANG - RATIO</button>
      <h1>  {result}</h1>
    </div>
 );
}

export default Counter;
