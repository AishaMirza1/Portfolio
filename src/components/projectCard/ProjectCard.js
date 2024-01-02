import styles from "./ProjectCard.module.css";
export default function ProjectCard() {
  return (
    <div className={styles.cardContainer}>
      <figure>
        <img src="https://picsum.photos/id/287/250/300" alt="Mountains" />
        <figcaption></figcaption>
      </figure>
    </div>
  );
}
