import { Accordion } from "../components";
import styles from "../assets/styles/Faq.module.scss";

function Faq() {
  return (
    <section className={styles.faq}>
      <div className={`${styles.faq__container} container`}>
        <h2 className={styles.faq__title}>
          Frequently asked questions
        </h2>
        <p className={styles.faq__desc}>
          Our customer support is always available to provide answers to any of your questions but to begin with, here are some of our most asked questions.
        </p>

        <Accordion />
      </div>
    </section>
  )
}

export default Faq;