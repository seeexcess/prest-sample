import React, { useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../assets/images/logo.svg";
import styles from "../assets/styles/Header.module.scss";

function Header() {
  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined
  });

  const menuRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if(size.width > 900 && menu) {
      setMenu(false)
    }
  }, [size.width, menu])

  const menuToggle = () => {
    setMenu(p => !p)
  }

  useEffect(() => {
    const handler = (e) => {
      if(!menuRef.current.contains(e.target)) {
        setMenu(false)
      }
    }
    document.addEventListener('mousedown', handler)
  }, [])

  return (
    <div className={`${styles.header}`}>
      <div className={`${styles.header__container} container`}>
        <img src={Logo} alt="logo" className={styles.header__logo}/>

        <div 
          className={`${styles.header__navcontent} ${menu ? styles.isMenu : ""}`}
          ref={menuRef}
        >

          <nav className={styles.header__navigation}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Promo Codes</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </nav>

          <div className={styles.header__access}>
            <a href="#" className={styles.login}>Log In</a>
            <a href="#" className={styles.signup}>Sign up for free</a>
          </div>

        </div>

        <div className={styles.header__toggle}>
          {menu ? (
            <AiOutlineClose onClick={menuToggle}/>
            ) : (
            <AiOutlineMenu onClick={menuToggle}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default Header;