import { CharacterItem } from "../../Molecules/CharacterItem/CharacterItem";
import { useFetchCharactersData } from "../../../hooks/useFetchCharactersData";
import "./PokemonList.scss";

const PokemonList = () => {
  const { characters } = useFetchCharactersData({
    url: "https://pokeapi.co/api/v2/pokemon/",
    resultsAttribute: "results",
  });

  return (
    <div>
      <h2>PokemonList</h2>
      <div className="pokemonsContainer">
        {characters.map((pokemon, index) => (
          <CharacterItem
            name={pokemon.name}
            img={`https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png`}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export { PokemonList };
