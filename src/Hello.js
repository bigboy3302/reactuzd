import { useState } from "react";

function Hello(props){
const [name, setname] = useState(props.name);

function changeName(event){
    setname(event.target.value);
}
return ( 
   <div>
<input value = {name} onChange={changeName}></input>
<h1> hello, {name}</h1>
   </div>
)
}
export default Hello;