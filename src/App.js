import Landing from './views/Landing/index.js';
import Counter from './views/Counter';
import ToDoList from './views/ToDoList';
import StarWarsCharacters from './views/StarWarsCharacters';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Landing name="Victoria" lastLetter="a"/>
        
        {/* Estoy haciendo...
        <h1>
            Bienvenido Ramiro!
        </h1>  */}
      </header>
      <Counter/>
      <ToDoList/>
      <StarWarsCharacters/>

    </div>
  );
}

export default App;
