import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function UseRefHook() {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");

    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {previousInputValue.current}</h2>
        </>
    );



// const inputElement = useRef();
//
//     const focusInput = () => {
//         inputElement.current.focus();
//     };
//
//     return (
//         <>
//             <input type="text" ref={inputElement} />
//             <button onClick={focusInput}>Focus Input</button>
//         </>
//     );
}

function LogButtonClicks() {
    const countRef = useRef(0);

    const handle = () => {
        countRef.current++;
        console.log(`Clicked ${countRef.current} times`);
    };

    console.log('I rendered!');

    return <button onClick={handle}>Click me</button>;
}
export default LogButtonClicks;

//prevents re-rendering
//parent can call child components
//creates a reference to call component func