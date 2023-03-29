import React, { useState } from "react";
import styles from "../assets/styles/Accordion.module.scss";
import { faqData } from "../utils/faqData";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";

function Accordion() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if(selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    <>
      {
        faqData.map((item, i) => (
          <div className={styles.accordion}>
            <div className={styles.accordion__titlebox} onClick={() => toggle(i)}>
              <h3 className={styles.accordion__title}>{item.title}</h3>
              {selected === i ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
            </div>
            <p 
              className={selected === i ? `${styles.accordion__content} ${styles.show}` : `${styles.accordion__content}`}
            >
              {item.description}
            </p>
          </div>
        ))
      }
    </>
  )
}

export default Accordion;