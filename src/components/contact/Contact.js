import styles from "./Contact.module.css";
import Reveal from "../Reveal";
export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div>
        <Reveal>
          <h1>
            Contact<span style={{ color: "#ff3c78" }}>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <p>
            Shoot me an email if you want to connect. You can also find me on{" "}
            <a href="https://www.linkedin.com/in/aisha-mirza/" target="blank">
              linkdin
            </a>{" "}
            if that suits you best.
          </p>
          <a href="mailto:aishamirza0002@gmail.com" target="blank">
            aishamirza0002@gmail.com
          </a>
        </Reveal>
      </div>
    </section>
  );
}
