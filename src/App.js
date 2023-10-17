import logo from './logo.svg';
import './App.css';
import NumberList from './listsAndKeys';
import NameForm from './forms';
//import A from './liftingUp/A';
import UserNameForm from './inheritance';
import CreateUserName from './inheritance';
function App() {
  return (
     <NumberList numbers = {[1,2,3,4,5]}/>,
     <NameForm />,
     //<A/>,
     <CreateUserName/>
  );
}

export default App;
 