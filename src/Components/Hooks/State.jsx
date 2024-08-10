import { useState } from "react";
export function State() {
    const [count, setCount] = useState(0);
    const eventHandle = () =>{
        setCount(() => count+1)
    }
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={() => eventHandle()}>click</button>
    </div>
  )
}