import styles from "./Card.module.css";

export default function Card({ name, image }) {
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src= {image}
        alt={name}
      />
      <p className={styles.name}>{name}</p>
    </div>
  );
}
