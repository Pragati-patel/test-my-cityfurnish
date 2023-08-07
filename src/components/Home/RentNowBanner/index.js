import React from "react";
import styles from "./style.module.css";
import {HomePageRentNowBanner} from "@/assets/images";
import {useRouter} from "next/navigation";

const RentNowBanner = () => {
  const router = useRouter();
  const RentNowBannerImages = [
    {
      img: HomePageRentNowBanner.branded,
      link: "https://cityfurnish.com/bangalore/home-appliances-rental",
    },
    {
      img: HomePageRentNowBanner.doubleBed,
      link: "https://cityfurnish.com/things/3921/vesta-king-size-double-bed-with-mattress",
    },
    {
      img: HomePageRentNowBanner.studyTable,
      link: "https://cityfurnish.com/things/4150/v-leg-4-seater-dining-table-with-4-tang-chairs",
    },
    {img: HomePageRentNowBanner.clearanceSale, link: ""},
    {
      img: HomePageRentNowBanner.workfromHome,
      link: "https://cityfurnish.com/pune/office-furniture-rent",
    },
    {
      img: HomePageRentNowBanner.checkOut,
      link: "https://cityfurnish.com/search/belle",
    },
  ];
  return (
    <div className={styles.rentNow_Banner_wrapper}>
      <div className={styles.banner_card}>
        {RentNowBannerImages.map((item, index) => (
          <div className={styles.banner_wrapper} key={index.toString()}>
            <img
              src={item?.img}
              alt="rant-now-banner-image"
              className={styles.banner_img}
              onClick={() => router.push(item?.link)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default RentNowBanner;
