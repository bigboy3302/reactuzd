import { useState } from "react";

function Counter(props) {
 const [result, setResult] = useState(props.value);
 const [input, setInput] = useState(props.value);

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
      <h1> {result}</h1>
    </div>
 );

}

export default Counter;

