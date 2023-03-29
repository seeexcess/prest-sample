import styles from "../assets/styles/RateCheck.module.scss";
import { RateCheckCard } from "../components";
import { rateCheckData } from "../utils/rateCheckData";

function RateCheck() {
  return (
    <main className={styles.ratecheck}>
      <div className="container">
        <div className={styles.ratecheck__desc}>
          <span className={styles.ratecheck__brand}>prestmit</span>
          <h2 className={styles.ratecheck__title}>How to check gift card rates.</h2>
          <p className={styles.ratecheck__details}>
            If you are looking for the <a href="https://prestmit.com/blog/top-5-highest-gift-card-rates-in-nigeria/" target="_blank" rel="noreferrer">gift cards with highest resale value</a>, you can find that on Prestmit.
          </p>
        </div>

        <section className={styles.ratecheck__cardbox}>
          {
            rateCheckData.map((data, index) => (
              <RateCheckCard {...data} key={index}>
                TEST
              </RateCheckCard>
            ))
          }
        </section>
      </div>
    </main>
  )
}

export default RateCheck;