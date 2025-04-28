import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // import motion

export default function ProjectDetail() {
  const { projectId } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${projectId}`
        );
        if (!response.ok) {
          throw new Error("Failed to get Pokemon data.");
        }
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [projectId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }} // Initial state
      animate={{ opacity: 1 }} // State during animation
      exit={{ opacity: 0 }} // Exit status
    >
      <h1>Pokemon Details: {pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h2>ID: {pokemon.id}</h2>
      <h3>Type:</h3>
      <ul>
        {pokemon.types.map((typeInfo) => (
          <li key={`${pokemon.id}-${typeInfo.type.name}`}>{typeInfo.type.name}</li>
        ))}
      </ul>
      <h3>Height: {pokemon.height}</h3>
      <h3>Weight: {pokemon.weight}</h3>
    </motion.div>
  );
}
