import { CharacterItem } from "../../Molecules/CharacterItem/CharacterItem";
import { useFetchCharactersData } from "../../../hooks/useFetchCharactersData";
import "./DragonBallList.scss";

const DragonBallList = () => {
  const { characters } = useFetchCharactersData({
    url: "https://dragonball-api.com/api/characters",
    resultsAttribute: "items",
  });

  return (
    <div>
      <h2>Dragon Ball</h2>
      <div className="charactersContainer">
        {characters.map((character) => {
          return (
            <CharacterItem
              name={character.name}
              img={character.image}
              key={character.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export { DragonBallList };
