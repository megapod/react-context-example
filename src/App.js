import logo from './logo.svg';
import './App.css';
import {useContext} from 'react'
import { someContext } from './someContext';

function App() {
  const {name} = useContext(someContext)
  return (
    <div className="App">
      <p>{name}</p>
    </div>
  );
}

export default App;
