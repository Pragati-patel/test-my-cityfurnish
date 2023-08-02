import React from "react";
import styles from "./style.module.css";
import string from "@/constants/Constant.json";
import {FourStepsCardData} from "@/constants/constant";

// h2 p h3 p

const FourSteps = () => {
  return (
    <div className={styles.four_steps_wrapper}>
      <h2 className={styles.head}>{string.landing_page.Four_steps.heading}</h2>
      <p className={styles.subhead}>{string.landing_page.Four_steps.subhead}</p>
      <div className={styles.card_wrapper}>
        {FourStepsCardData.map((itemm, index) => (
          <div key={index} className={styles.card}>
            <img src={itemm.img1} className={`${styles.img} lg:flex hidden`} />
            <img src={itemm.img2} className={`${styles.img} lg:hidden flex`} />
            <h3 className={styles.head1}>{itemm.head}</h3>
            <p className={styles.content1}>{itemm.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FourSteps;
