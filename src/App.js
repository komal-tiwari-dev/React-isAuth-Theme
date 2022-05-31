import './App.css';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import { useContext } from 'react';
import { ThemeContext } from './Context/ThemeContext';

function App() {
  const { isLight }=useContext(ThemeContext)
  return (
    <div className={`App ${isLight ? "light" : "dark"}`}>
      <Navbar/>
      <br/>
      <br/>
      <Body/>
    </div>
  );
}

export default App;
