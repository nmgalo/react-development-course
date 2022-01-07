import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then((res) => {
        setPokemons(res.results);
      });
  }, []);

  return (
    <div>
      <h1>Pokomons</h1>

      <div className="pokemons">
        {pokemons.map((item, index) => (
          <Link to={`/pokemon?url=${item.url}`} key={index}>
            <div className="pokemon_item">{item.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
