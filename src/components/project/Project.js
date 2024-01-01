import styles from "./Project.module.css";
import ProjectCard from "../projectCard/ProjectCard";
import Reveal from "../Reveal";
export default function Project() {
  return (
    <section id="projects" className={styles.projects}>
      <Reveal>
        <h1>
          Projects<span style={{ color: "#ff3c78" }}>.</span>
        </h1>
      </Reveal>

      <div className={styles.projectsCardContainer}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}
