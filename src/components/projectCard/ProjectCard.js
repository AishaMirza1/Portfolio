import styles from "./ProjectCard.module.css";
import { motion } from "framer-motion";
export default function ProjectCard({ header, id, info }) {
  return (
    <motion.div
      className={styles.cardContainer}
      initial="initial"
      whileHover="hover"
    >
      <img
        src="https://static.thenounproject.com/png/4996895-200.png"
        alt={``}
      />
      <div>
        <motion.div
          variants={{
            initial: { y: 150 },
            hover: { y: 0 },
          }}
          transition={{ duration: 0.2 }}
          className={styles.cardInfoContainer}
        >
          <motion.span
            variants={{
              initial: { opacity: 1 },
              hover: { opacity: 0 },
            }}
            className={styles.cardId}
          >
            {id}
          </motion.span>
          <p className={styles.cardHeader}>{header}</p>
          <motion.p
            variants={{
              initial: { opacity: 0 },
              hover: { opacity: 1 },
            }}
            className={styles.cardinfo}
          >
            {info}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}
