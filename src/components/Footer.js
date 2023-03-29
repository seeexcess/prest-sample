import styles from "../assets/styles/Footer.module.scss";
import logo from "../assets/images/logo-footer.svg";
import { AiOutlineLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__container} container`}>
        <div className={styles.footer__content}>
          <div className={styles.footer__customers}>
            <h3 className={styles.footer__customers_title}>4 Million + customers</h3>
            <p className={styles.footer__customers_desc}>
              Since launching in 2016, over 4,000,000 people have used PiggyVest to manage their money better, avoid over-spending and be more accountable.
            </p>
          </div>

          <div className={styles.footer__signup}>
            <button>Sign up for free</button>
          </div>
        </div>

        <div className={styles.footer__brandbox}>
          <div className={styles.footer__brand}>
            <img className={styles.footer__brandlogo} src={logo} alt="logo" />

            <p className={styles.footer__branddesc}>
              At Prestmit, we believe everyone deserves the chance to gain, profit, and benefit from modern digital assets, which drives us to help those most in need.
            </p>

            <div className={styles.footer__contact}>
              <p>Whatsapp: 07026290389</p>
              <p>Email: Help@prestmit.com</p>
            </div>
          </div>

          <div className={styles.footer__linkbox}>
            <div className={styles.footer__links}>
              <h4>Product</h4>
              <ul>
                <li><a href="#">Gift Card to Naira</a></li>
                <li><a href="#">Gift Card to Cedis</a></li>
                <li><a href="#">Gift Card to Bitcoin</a></li>
                <li><a href="#">Gift Card to USDT</a></li>
                <li><a href="#">Sell Bitcoin in Nigeria</a></li>
                <li><a href="#">Sell Bitcoin in Ghana</a></li>
                <li><a href="#">Bitcoin News</a></li>
                <li><a href="#">Tether (USDT) Wallet</a></li>
                <li><a href="#">Sell Dogecoin</a></li>
                <li><a href="#">Sell Litecoin</a></li>
                <li><a href="#">Airtime to cash</a></li>
                <li><a href="#">NFT's</a></li>
                <li><a href="#">Promo Codes</a></li>
              </ul>
            </div>

            <div className={styles.footer__links}>
              <h4>Useful Links</h4>
              <ul>
                <li><a href="#">Download Android App</a></li>
                <li><a href="#">Download IPhone App</a></li>
                <li><a href="#">How to Trade</a></li>
                <li><a href="#">Current Rate</a></li>
                <li><a href="#">Best Gift Cards</a></li>
                <li><a href="#">Check Balance</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Terms and Policies</a></li>
                <li><a href="#">We are Hiring</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Platform Status</a></li>
              </ul>
            </div>

            <div className={styles.footer__links}>
              <h4>Useful Links</h4>
              <ul>
                <li><a href="#">Sell Amazon Gift Card</a></li>
                <li><a href="#">Sell Spar Gift Card</a></li>
                <li><a href="#">Sell AMEX Gift Card</a></li>
                <li><a href="#">Sell Razer Gold Gift Card</a></li>
                <li><a href="#">Sell Apple Gift Card</a></li>
                <li><a href="#">Sell Shoprite Gift Card</a></li>
                <li><a href="#">Sell eBay Gift Card</a></li>
                <li><a href="#">Sell Google Play Gift Card</a></li>
                <li><a href="#">Sell Nordstrom Gift Card</a></li>
                <li><a href="#">Sell Sephora Gift Card</a></li>
                <li><a href="#">Sell Steam Gift Card</a></li>
                <li><a href="#">Sell Vanilla Gift Card</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footer__foot}>
          <p className={styles.footer__copyright}>
            &copy; 2023 Prestmit. All Rights Reserved.
          </p>
          <div className={styles.footer__socials}>
            <a href="#"><AiFillTwitterCircle /></a>
            <a href="#"><AiOutlineLinkedin /></a>
            <a href="#"><MdFacebook /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;