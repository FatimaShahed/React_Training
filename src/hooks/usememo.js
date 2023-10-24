import { useState,useMemo } from "react";
import ReactDOM from "react-dom/client";

// const UseMemo = () => {
//     const [count, setCount] = useState(0);
//     const [todos, setTodos] = useState([]);
//     const calculation1 = useMemo(() => expensiveCalculation(1), [count]);
//     const calculation2 = useMemo(() => expensiveCalculation(2), [count]);
//     const calculation3 = useMemo(() => expensiveCalculation(1), [count]);
//     const increment = () => {
//         setCount((c) => c + 1);
//     };
//     const decrement = () => {
//         setCount((c) => c - 1);
//     };
//     const addTodo = () => {
//         setTodos((t) => [...t, "New Todo"]);
//     };
//     // function UseMemo() {
//     //     calculation= useMemo(() => expensiveCalculation(count), [count]);
//     // }
//
//
//     return (
//         <div>
//             <div>
//                 <h2>My Todos</h2>
//                 {todos.map((todo, index) => {
//                     return <p key={index}>{todo}</p>;
//                 })}
//                 <button onClick={addTodo}>Add Todo</button>
//             </div>
//             <hr />
//             <div>
//                 Count: {count}
//                 <button onClick={increment}>+</button>
//                 <button onClick={decrement}>-</button>
//                 {/*<button onClick={UseMemo}>UseMemo</button>*/}
//                 {calculation1}
//                 {calculation2}
//                 {calculation3}
//             </div>
//         </div>
//     );
// };
//
// const expensiveCalculation = (num) => {
//     console.log("Calculating...");
//     for (let i = 0; i < 1000000000; i++) {
//         num += 1;
//     }
//     return num;
// };

function UseMemo() {
    // State variables
    const [count, setCount] = useState(0);

    // Expensive calculation function



    // Using useMemo to memoize the result of expensiveCalculation
    const memoizedResult = useMemo(() =>
    {
        console.log("Performing expensive calculation...");
        return count;
    },[count]);

    return (
        <div>
            <h1>useMemo Example</h1>
            <p>Count: {count}</p>
            <p>Memoized Result: {memoizedResult}</p>

            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <button onClick={() => setCount(count )}>Unchanged Count</button>
        </div>
    );
}


export default UseMemo;
