import styles from "./index.module.css";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const HomePage = () => {
  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <span className={styles.brand}>stemverse.com.br</span>

        <h1 className={styles.title}>
          EM <br /> CONSTRUÇÃO
        </h1>

        <p className={styles.subtitle}>
          Algo novo está sendo preparado.
          <br />
          Um espaço para ideias, tecnologia e conteúdo.
        </p>

        <div className={styles.progressWrapper}>
          <span>0%</span>
          <div className={styles.progressBar}>
            <div className={styles.progress} />
          </div>
          <span>100%</span>
        </div>

        <button className={styles.button} disabled>
          Em breve
        </button>

        <footer className={styles.social}>
          <a
            href="https://www.instagram.com/oneres_stm"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/in/fabioneresdejesus"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://www.youtube.com/@mocorongotech"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
        </footer>
      </section>
    </main>
  );
};

export default HomePage;
