import logo from './logo.svg';
import './App.css';
import UseRefHook from "./hooks/useref";
import UseMemo from "./hooks/usememo";
import UseCallback from "./hooks/usecallbackParent";
import LogButtonClicks from "./hooks/useref";
function App() {
    return (
        <div>
            <h1>UseRef Example</h1>
            <LogButtonClicks/>,

            <h1>UseMemo Example</h1>

            <UseMemo/>,
            <h1>UseCallback Example</h1>

            <UseCallback/>
        </div>
    );
}

export default App;
