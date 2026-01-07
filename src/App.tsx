import "./App.css";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "ivysaur",
    imgSrc: 
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
  },
  {
    name: "mew",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
  },
  

];

function App() {
  return (
    <div>
      <PokemonCard pokemon={pokemonList[0]} />
      <PokemonCard pokemon={pokemonList[1]} />
      <PokemonCard pokemon={pokemonList[2]} />
    </div>
  );
}

export default App;
