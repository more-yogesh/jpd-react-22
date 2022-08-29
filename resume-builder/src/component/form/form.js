import { useState } from "react";

const Form = () => {
    const [input, setInput] = useState({});

    // const fields = {};

    // console.log("fields",fields);

    // const newFields = { ...fields, "name": "suresh" }

    const updateInputHandler = (event) => {
        const fieldValue = event.target.value;
        const fieldName = event.target.name;
        setInput(oldFields => ({ ...oldFields, [fieldName]: fieldValue }));
        // console.log("event", event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        console.log("done", input);
    }
    // reactive form
    return (
        <form onSubmit={submitHandler}>
            <input type="text" name="username" value={input.username || ""} onChange={updateInputHandler} />
            <input type="password" name="password" value={input.password || ""} onChange={updateInputHandler} />
            <textarea name="address" value={input.address || ""} onChange={updateInputHandler} />
            <select onChange={updateInputHandler} name="country" value={input.contry || ""}>
                <option value={"1"}>INDIA</option>
                <option value={"2"}>USA</option>
                <option value={"3"}>HINDUSTAN</option>
            </select>
            <button>LOGIN</button>
            <h1>UserName:{input.username || "Enter You Name"}</h1>
        </form>
    );
}

export default Form;