//import logo from './logo.svg';
import './App.css';
import pokemons from './data.js';
import Pokedex from './Pokedex.jsx';

function App() {
  return (
    <div id='rootDiv'>
      <Pokedex lista={pokemons} />
    </div>
   );
}

export default App;
