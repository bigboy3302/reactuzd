import Counter from "./Counter";
import Hello from "./Hello";

function App(){
    const allNames = [
        "Jekabs",
        "Markus",
        "Klucis"
    ]
    const helloJSX = allNames.map((name, index) => {
        return <Hello key={index} name={name}/>
    })
 return (
     <>
     <Counter />
     <Hello />
     <Hello />
     <Hello />
     </>

 );
 }

export default App;
