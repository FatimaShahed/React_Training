import { useState, useCallback } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";

// const UseCallback = () => {
//     const [count, setCount] = useState(0);
//     const [todos, setTodos] = useState([]);
//
//     const increment = () => {
//         setCount((c) => c + 1);
//     };
//     const addTodo = useCallback(() => {
//         setTodos((t) => [...t, "New Todo"]);
//         console.log("new")
//     }, [count]);
//     // const addTodo = useCallback(
//     //     (newTodo) => {
//     //         setTodos((t) => [...t, newTodo]);
//     //         console.log("new");
//     //     },
//     //     [todos[-1]]
//     // );
//     return (
//         <>
//             <Todos todos={todos} addTodo={addTodo} />
//             <hr />
//             <div>
//                 Count: {count}
//                 <button onClick={increment}>+</button>
//             </div>
//         </>
//     );
// };
const UseCallback = () => {
    const [stateA, setStateA] = useState(0);
    const [stateB, setStateB] = useState(0);

    const increment = () => {
        setStateA((c) => c + 1);
    };
    const decrement = () => {
        setStateB((c) => c - 1);
    };
    const CallBack = useCallback(() => {

        console.log("use callback func")
    }, [stateA]);

    return (
        <>
            <Todos state={stateA} callback={CallBack} />
            <hr />
            <div>
                 <button onClick={increment}>stateA</button>
                <button onClick={decrement}>stateB</button>
            </div>
        </>
    );
};

export default UseCallback;
