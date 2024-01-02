import styles from "./About.module.css";
import Reveal from "../Reveal";
export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.content}>
        <Reveal>
          <h1>
            About<span style={{ color: "#ff3c78" }}>.</span>
          </h1>
        </Reveal>
        <div className={styles.aboutContent}>
          <div className={styles.intro}>
            <p>
              Hey, I'm Aisha from Haryana,India. I'm an enthusiast React
              FrontEnd Develoer. I'm curently a student at Coding Ninjas and
              looking for oppertunity in react development.
            </p>
            <p>
              I'm also starting a blog website where I'll be doing articles on
              frontend development apart from these I also love to sketch and
              play valorant.{" "}
            </p>
            <p>
              If you think you've got an opening that I might like let's
              connent.
            </p>
            <p>
              <span>My Links&rarr;</span>
              <span>
                <ion-icon name="logo-github"></ion-icon>
              </span>
              <span>
                <ion-icon name="logo-linkedin"></ion-icon>
              </span>
            </p>
          </div>

          <div className={styles.tag}>
            <p>What I use:</p>
            <div>
              <span>Javascript</span>
              <span>React</span>
              <span>CSS</span>
              <span>HTML</span>
              <span>Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
