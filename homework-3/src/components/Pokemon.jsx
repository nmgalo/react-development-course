import { useEffect, useState } from "react";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState(null);

  const getPokemonURL = () => window.location.search.replace("?url=", "");

  useEffect(() => {
    fetch(getPokemonURL())
      .then((res) => res.json())
      .then((res) => setPokemon(res));
  }, []);

  return (
    <div className="pokemon">
      {pokemon != null ? (
        <>
          <div className="pokemon_header">
            <div>
              <img src={pokemon.sprites.back_default} />
            </div>
            <div>
              <h2>{pokemon.name}</h2>
            </div>
          </div>
        </>
      ) : (
        "Loading ...."
      )}
    </div>
  );
}
