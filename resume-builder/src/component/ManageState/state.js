import { useState } from "react";

const State = () => {
    const [color, setColor] = useState("red");
    const [list, setList] = useState([1, 2, 3]);
    const handleIncrease = () => {
        // case:1 setList([...list, list.length + 1]); // no guarantee state update
        // case:2 guarantee state update
        setList((oldState) => {
            return [...oldState, oldState.length + 1]
        });
    }
    return (
        <div>
            <h1 style={{ backgroundColor: color }}>Hello I am state</h1>
            <button onClick={() => setColor('green')}>HANDLE CLICK</button>
            {
                list.map((item, index) => {
                    return <div key={index}>{item}</div>
                })
            }
            <button onClick={() => handleIncrease()}>ADD NEW</button>
        </div>
    );
}

export default State;