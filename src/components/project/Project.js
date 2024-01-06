import styles from "./Project.module.css";
import ProjectCard from "../projectCard/ProjectCard";
import Reveal from "../Reveal";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
export default function Project() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-83.5%"]);
  console.log(scrollYProgress);
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.content}>
        <Reveal>
          <h1>
            Projects<span style={{ color: "#ff3c78" }}>.</span>
          </h1>
        </Reveal>
        <div ref={ref} className={styles.horizontalScrollSection}>
          <div className={styles.projectCardsContainer}>
            <motion.div
              style={{ x }}
              className={styles.ProjectCardInnerContainer}
            >
              <ProjectCard
                id={"01."}
                header="MovieApp"
                info="a web application about movies that lets you search movies get inso about them, and rate them, keep a check of which you have seen."
              />
              <ProjectCard
                id={"02."}
                header="TechBlog"
                info="an initiative by me for me to learn more about frontend development that includes articles and the problems I have faced during project building."
              />
              <ProjectCard
                id={"03."}
                header="Eat-n-Split"
                info="get your bills sorted with this simple web app and split bill easily keep note of who owes you and whom you owe."
              />
              <ProjectCard
                id={"04."}
                header="QuizzApp"
                info="simple react quizz made with react"
              />
              <ProjectCard
                id={"05."}
                header="floraPhotos"
                info="a beautiful website with beautiful animations."
              />
              <ProjectCard
                id={"06."}
                header="Worldwise "
                info="a navigation web app so that you can know where you have been and where to go next."
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
