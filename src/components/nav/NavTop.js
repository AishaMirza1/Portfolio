import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Button from "../button/Button";
import styles from "./NavTop.module.css";
export default function NavTop() {
  const [show, setShow] = useState(false);
  function handleTransitionNavBar() {
    window.scrollY > 90 ? setShow(true) : setShow(false);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleTransitionNavBar);

    return () => window.removeEventListener("scroll", handleTransitionNavBar);
  }, []);
  return (
    <nav
      className={`${styles.navTop} ${show ? styles.navTopTransition : null}`}
    >
      <ul>
        <li>
          <a href="https://github.com/AishaMirza1" target="blank">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/aisha-mirza/" target="blank">
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <Button>My Resume</Button>
    </nav>
  );
}
