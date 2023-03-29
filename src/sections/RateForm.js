import styles from "../assets/styles/RateForm.module.scss";
import { BsArrowRightShort } from "react-icons/bs"

function RateForm() {
  return (
    <section className={styles.rateform}>
      <div className={`${styles.rateform__container} container`}>
        <div className={styles.rateform__text}>
          <div className={styles.rateform__experience}>
            <span className={styles.rateform__experience_new}>New</span>
            <span>Personalized experience</span>
            <BsArrowRightShort />
          </div>

          <h1>
            Current Gift Card Rates In Nigeria - Updated Every Minute
          </h1>

          <p>
            With our automated gift card rate calculator, you can get the rate of any gift card in real-time. Rates are updated frequently, multiple times a day, as the market value is quite volatile.
          </p>
        </div>

        <div className={styles.rateform__formbox}>
          <form className={styles.rateform__form}>
            <div className={styles.rateform__inputgroup}>
              <label htmlFor="category">Gift Card Category</label>
              <select id="category" className={styles.rateform__inputgroup_input}>
                <option value="">Select</option>
                <option value="">Select</option>
                <option value="">Select</option>
              </select>
            </div>

            <div className={styles.rateform__inputgroup}>
              <label htmlFor="subcategory">Gift Card Subcategory</label>
              <select id="subcategory" className={styles.rateform__inputgroup_input}>
                <option value="">Select</option>
                <option value="">Select</option>
                <option value="">Select</option>
              </select>
            </div>

            <div className={styles.rateform__inputgroup}>
              <label htmlFor="amount">Amount</label>
              <input 
                id="amount" type="text" placeholder="Enter Amount" 
                className={styles.rateform__inputgroup_input}
              />
            </div>

            <div className={styles.rateform__payoutbox}>
              <label htmlFor="payout">Payout method</label>
              <div className={styles.rateform__payout}>
                <div
                  className={`${styles.rateform__inputgroup} ${styles.rateform__payout_select}`}
                >
                  <select id="payout" className={styles.rateform__inputgroup_input}>
                    <option value="">Select</option>
                  </select>
                </div>

                <div
                  className={`${styles.rateform__inputgroup} ${styles.rateform__payout_text}`}
                >
                  <input 
                    type="text"
                    className={styles.rateform__inputgroup_input}
                  />
                </div>
              </div>
            </div>

            <button className={styles.rateform__formbtn}>
              <span>Sell Gift Card Now</span>
              <BsArrowRightShort />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default RateForm;