import { useState } from "react";

const Counter = () => {

    const [add, setAdd] = useState(0);

    return (
        <div>
            <h1>{add}</h1>
            <button onClick={() => {
                setAdd(add + 1)
            }}>Increment</button>
        </div>
    )
}

export default Counter;