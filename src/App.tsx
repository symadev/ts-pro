
import './App.css';
import Button from './Component/Button';

function App() {
  return (
    <div className="App">
     <Button label='Click me'/>
     <Button  onClick={() =>alert("Click again")} label='Click me Again'/> 
      
    </div>
  );
}

export default App;
