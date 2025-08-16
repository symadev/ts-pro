
import './App.css';
import Button from './Component/Button';

function App() {
  return (
    <div className="App">
     
     <Button  onClick={() =>alert("Click again")} label='Click me Again'/> 
      
    </div>
  );
}

export default App;
