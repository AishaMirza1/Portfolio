import styles from "./Button.module.css";
export default function Button({ children }) {
  return (
    <a
      href="https://docs.google.com/document/d/1pfcjWN_g0_fRdYOI0iIUVM7995oBbcPh/edit?usp=sharing&ouid=116115819408538116803&rtpof=true&sd=true"
      target="blank"
    >
      <button className={styles.btn}>{children}</button>
    </a>
  );
}
