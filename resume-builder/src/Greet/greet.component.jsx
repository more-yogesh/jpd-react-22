// import "./greet.css"
import React, { useState } from 'react';
import styles from './greet.css'

const Greet = () => {
    // inside the function    

    const [value, setValue] = useState("");

    return (
        <div>
            <h1 className={styles.bg}>Hey, I am Greet</h1>
            <h1 className={styles.header}>Hey, I am Greet</h1>
            {/* <p>Hey, I am Greet!!!</p> */}
        </div>
    )
}

export default Greet