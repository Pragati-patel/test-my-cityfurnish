import React from "react";
import styles from "./style.module.css";
import Cards from "./Cards";

function TenureExtension() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main_heading}>Tenure Extension</div>
      <div className={styles.order_row}>
        Your Order ID <span className="ml-14 font-medium">: #438706031</span>
      </div>
      <div className="my-8">
        <Cards />
      </div>
    </div>
  );
}

export default TenureExtension;
