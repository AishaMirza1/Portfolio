import Reveal from "../Reveal";
import styles from "./Home.module.css";
export default function Home() {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.content}>
        <Reveal>
          <h1>
            Hey, I'm Aisha
            <span style={{ color: "#ff3c78" }}>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <p>
            I'm a{" "}
            <span style={{ color: "#ff3c78" }}>React FrontEnd Developer</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
