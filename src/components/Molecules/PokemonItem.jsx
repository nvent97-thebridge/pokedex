const PokemonItem = ({ name }) => {
  return (
    <>
      <img
        src={`https://img.pokemondb.net/sprites/home/normal/${name}.png`}
        alt={`${name}.png`}
      />
      <p>{name}</p>
    </>
  );
};

export { PokemonItem };
