import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import "./CharacterItem.scss"

const CharacterItem = ({ name, img }) => {
  const {theme, setTheme} = useContext(ThemeContext)

  return (
    <div onClick={() => setTheme("dark")} className={"pokemonItemContainer"}>
      <img
        src={img}
        alt={`${name}.png`}
      />
      <p>{theme}</p>
    </div>
  );
};

export { CharacterItem };
