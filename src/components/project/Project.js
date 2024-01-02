import styles from "./Project.module.css";
import ProjectCard from "../projectCard/ProjectCard";
import Reveal from "../Reveal";
export default function Project() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.content}>
        <Reveal>
          <h1>
            Projects<span style={{ color: "#ff3c78" }}>.</span>
          </h1>
        </Reveal>
        <h2 style={{ color: "#ff3c78" }}>
          Currently working on this section (in production )
        </h2>
        <div className={styles.projectsCardContainer}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  );
}
