import styles from "../assets/styles/GetApp.module.scss";
import { BsArrowRightShort } from "react-icons/bs";
import phone from "../assets/images/mobile-device.svg";
import appstore from "../assets/images/appstore.svg";
import playstore from "../assets/images/playstore.svg";

function GetApp() {
  return (
    <section className={styles.getapp}>
      <div className={`${styles.getapp__container} container`}>
        <div className={styles.getapp__img}>
          <img src={phone} alt="device" />
        </div>

        <div className={styles.getapp__details}>
          <div className={styles.getapp__details_text}>
            <h2 className={styles.getapp__title}>
              Buy & Sell Crypto & Vouchers in Africa
            </h2>

            <p className={styles.getapp__desc}>
              Pay and get paid more efficiently by business partners, send money fast to loved ones, and transact with higher limits.
            </p>

            <button className={styles.getapp__morebtn}>
              <span>Learn more</span> 
              <BsArrowRightShort />
            </button>
          </div>

          <div className={styles.getapp__details_iconsbox}>
            <h4>Get the app now:</h4>
            <div className={styles.getapp__details_icons}>
              <img src={appstore} alt="" />
              <img src={playstore} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetApp;