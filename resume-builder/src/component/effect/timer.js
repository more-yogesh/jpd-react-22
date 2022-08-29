import { useEffect, useState } from "react";

const Timer = () => {

    const [counter, setCounter] = useState(1);

    useEffect(() => {
        console.log("HELLO");
        // setTimeout(() => {
        //     setCounter(counter * 10);
        // }, 1000);//js
    }, [counter]);

    const updateState = () => {
        setCounter(counter + 1);
    }

    return (
        <div>{counter}<button onClick={updateState}>CLICK ME</button></div>
    )
}

export default Timer;