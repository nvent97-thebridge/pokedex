import axios from "axios";
import { useState, useEffect } from "react";

const useFetchCharactersData = ({url, resultsAttribute}) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then((data) => data.data)
      .then((charactersList) => {
          setCharacters(charactersList[resultsAttribute]);
          setLoading(false)
      });
  }, []);

  return { characters, loading };
};

export { useFetchCharactersData };
