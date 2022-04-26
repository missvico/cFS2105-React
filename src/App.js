import { BrowserRouter , Routes, Route, Link} from 'react-router-dom';
import Landing from './views/Landing/index.js';
import Counter from './views/Counter';
import ToDoList from './views/ToDoList';
import StarWarsCharacters from './views/StarWarsCharacters';
import StarWarsSingleCharacter from './views/StarWarsSingleCharacter';
import BootstrapDemo from './views/BootstrapDemo';
import logo from './logo.svg';
import './App.css';
// import 'bootstrap/scss/bootstrap.scss'

function App() {
  return (
    <BrowserRouter >
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">CFS2105</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to="/">Landing</Link>
              <Link className="nav-link" to="/counter">Counter</Link>
              <Link className="nav-link" to="/tasks">Tasks</Link>
              <Link className="nav-link" to="/starwars/people">StarWars</Link>
              <Link className="nav-link" to="/bootstrap">Bootstrap Demo</Link>
            </div>
          </div>
      </div>
</nav>
    <div>
      
        <Routes>
            <Route path="/" element={<Landing name="Victoria" lastLetter="a"/>}/>
            <Route path="/counter" element={<Counter/>} />
            <Route path="/tasks" element={<ToDoList/>} />
            <Route path="/starwars/people" element={<StarWarsCharacters/>} />
            <Route path="/starwars/people/:id" element={<StarWarsSingleCharacter/>} />
            <Route path="/bootstrap" element={<BootstrapDemo/>} />
        </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;

{/* <header classNameName="App-header">
        <Landing name="Victoria" lastLetter="a"/>
        
        <h1>
            Bienvenido Ramiro!
        </h1>  
      </header>
      <Counter/>
      <ToDoList/>
      <StarWarsCharacters/> */}