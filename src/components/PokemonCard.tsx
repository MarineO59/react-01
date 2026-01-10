import styles from "./PokemonCard.module.css";

interface PokemonCardProps {
  pokemon: {
    name: string;
    imgSrc?: string;
  };
}

function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <figure className={styles.card}>
      {pokemon.imgSrc !== undefined ? (
        <img
         className={styles.image}
         src={pokemon.imgSrc}
         alt={pokemon.name} />
      ) : (
        <p className="{styles.noImage}">???</p>
      )}
      <figcaption className={styles.name}>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
