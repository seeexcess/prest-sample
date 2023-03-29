import styles from "../assets/styles/RateCheckCard.module.scss";

function RateCheckCard({title, description, children}) {
  return (
    <div className={styles.ratecheck__card}>
      <h3 className={styles.ratecheck__cardtitle}>
        {title}
      </h3>
      <p className={styles.ratecheck__carddesc}>
        {description}
      </p>
    </div>
  )
}

export default RateCheckCard;