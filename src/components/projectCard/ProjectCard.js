import styles from "./ProjectCard.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Reveal from "../Reveal";
import { useEffect } from "react";
export default function ProjectCard() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div data-aos="zoom-in">
      <div className={styles.projectCard}>
        <div className={styles.projectCardImgContainer}>
          {/* <img src="" alt="netflix-clone-img"/> */}
        </div>
        <div className={styles.projectDetails}>
          <h3>Netflix Clone</h3>
          <span className={styles.icon}>
            <ion-icon name="link"></ion-icon>
          </span>
          <span className={styles.icon}>
            <ion-icon name="logo-github"></ion-icon>
          </span>
          <div>
            <span>Reactjs</span>
            <span>CSS</span>
            <span>Html</span>
          </div>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknow Lorem
          </p>
        </div>
      </div>
    </div>
  );
}
