import {BackIcon} from "@/assets/icon";
import React from "react";
import styles from "./style.module.css";

function CreateNewRequest() {
  const orderInfo = [
    {id: "01232", img: "img"},
    {id: "01232", img: "img"},
    {id: "01232", img: "img"},
    {id: "01232", img: "img"},
    {id: "01232", img: "img"},
  ];
  return (
    <div className={styles.content_wrapper}>
      <div className={styles.main_heading}>
        <BackIcon />
        Create a new request
      </div>

      <div className={styles.sub_heading}>
        Select the order for which you would like to raise a request
      </div>

      <div className={styles.info_wrapper}>
        {orderInfo?.map((item, index) => {
          return (
            <div key={index.toString()} className={styles.order_row}>
              <input type="radio" className="radio_button" />
              <label>Order no:#{item.id}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CreateNewRequest;
