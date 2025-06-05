import { CharacterItem } from "../../Molecules/CharacterItem/CharacterItem";
import { useFetchCharactersData } from "../../../hooks/useFetchCharactersData";
import "./PokemonList.scss";

const PokemonList = () => {
  const {characters, loading} = useFetchCharactersData()

  return (
    <div>
      <h2>PokemonList</h2>
      <div className="pokemonsContainer">
        {characters.map((pokemon, index) => (
          <CharacterItem name={pokemon.name} img={`https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png`} key={index} />
        ))}
      </div>
    </div>
  );
};

export { PokemonList };
