import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import "./CharacterItem.scss"

const CharacterItem = ({ name, img }) => {
  const theme = useContext(ThemeContext)

  return (
    <div className={"pokemonItemContainer"}>
      <img
        src={img}
        alt={`${name}.png`}
      />
      <p>{name}</p>
    </div>
  );
};

export { CharacterItem };
