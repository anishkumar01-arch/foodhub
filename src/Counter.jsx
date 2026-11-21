import { useState } from "react";

function Counter(){
    let [count,setCount] = useState(0);
    let incLogics = () =>{
        setCount(count + 1)
    let decLogics = () =>{
        setCount(Count - 1)
    }
    
    }
    return(
        <>
            <h1>Counter Application</h1>
            <h2>The count value: {count}</h2>
            <button>onClick={incLogics}increment:</button>
            <button>onClick={decLogics}decrement:</button>
            <button>onClick={reset}reset:</button>
        </>
    )
}
export default Counter;