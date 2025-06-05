import axios from "axios";
import { useState, useEffect } from "react";

const useFetchCharactersData = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((data) => data.data)
      .then((pokemonList) => {
        setLoading(false)
        setCharacters(pokemonList.results);
      });
  }, []);

  return { characters, loading };
};

export { useFetchCharactersData };
