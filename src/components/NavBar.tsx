interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonName: (name: string) => void;
  pokemonList: Pokemon[];
}

function NavBar({ setPokemonName,pokemonList}: NavBarProps) {
    const handleClick = (name: string) => {
        if (name === "pikachu") {
            alert("pika pikachu !!!");
        }

        setPokemonName(name);
    }
  return (
    <nav>
      {pokemonList.map((onePokemonFromTheList) => (
        <button
          key={onePokemonFromTheList.name}
          type="button"
          onClick={() => handleClick(onePokemonFromTheList.name)}
        >
          {onePokemonFromTheList.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;