import React, {useState} from "react";
import styles from "./style.module.css";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {CustomNextArrow, CustomPrevArrow} from "./CustomArrows";
import {
  DeliveryTruck,
  Heart,
  RatingStar,
  ShareIcon,
  VerifyIcon,
} from "@/assets/icon";
import {RiSparklingFill} from "react-icons/ri";
import {BsPersonVcard} from "react-icons/bs";
import string from "@/constants/Constant.json";
import {HasselFreeData} from "@/constants/constant";
import ServiceCard from "./ServiceCard";

const ProductDetails = ({category, itemName}) => {
  const str = string.product_page;
  const arr = ["Home", category, itemName];
  const images = ["grey", "lightgreen", "khaki", "lightblue", "pink"];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [duration, setDuration] = useState(3);
  const [inWishList, setInWishList] = React.useState(false);

  const handleThumbnailClick = index => {
    setSelectedIndex(index);
  };

  const handleSliderChange = index => {
    setSelectedIndex(index);
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.bread_crumps}>
        {arr.map((item, index) => (
          <div key={index} className="flex gap-2">
            <p
              className={` ${
                index === arr.length - 1 ? "font-medium" : "font-normal"
              } ${styles.crumpItem}`}>
              {item}
            </p>
            <p
              className={`${index === arr.length - 1 ? "hidden" : "flex"} ${
                styles.crumpItem
              }`}>{`>`}</p>
          </div>
        ))}
      </div>

      <div className={styles.main_section}>
        <div className={styles.carousel_wrapper}>
          <Carousel
            selectedItem={selectedIndex}
            showThumbs={false}
            showStatus={false}
            onChange={handleSliderChange}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && <CustomPrevArrow onClick={onClickHandler} />
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && <CustomNextArrow onClick={onClickHandler} />
            }
            renderIndicator={(onClickHandler, isSelected, index) => {
              return (
                <li
                  className={styles.indicatorStyle}
                  style={{background: isSelected ? "#597492" : "#ffffff"}}
                  onClick={onClickHandler}
                  onKeyDown={onClickHandler}
                  value={index}
                  key={index}
                  role="button"
                  tabIndex={0}
                />
              );
            }}>
            {images.map((item, index) => (
              <div
                key={index}
                className={styles.prod_img}
                style={{backgroundColor: item}}>
                {/* <img src={item} alt={`Thumbnail ${index}`} /> */}
              </div>
            ))}
          </Carousel>

          <div className={styles.thumbnail_container}>
            {images.map((image, index) => (
              <div
                style={{backgroundColor: image}}
                className={`${styles.thumbnail_img} ${
                  index === selectedIndex ? "border-[#5F789D]" : "border-fff"
                }`}
                key={index}
                onClick={() => handleThumbnailClick(index)}>
                {/* <img src={image} alt={`Thumbnail ${index}`} /> */}
              </div>
            ))}
          </div>

          <div className={`${styles.services_cards_container} ${styles.web}`}>
            {HasselFreeData.map((item, index) => (
              <ServiceCard
                icon={item.icon}
                key={index}
                head={item.Heading}
                desc={item.text}
              />
            ))}
          </div>
        </div>

        <div className={styles.details_wrapper}>
          <div
            className={styles.header_div}
            style={{justifyContent: "space-between"}}>
            <h1 className={styles.item_name}>{itemName} placeholder</h1>
            <div className={styles.header_div}>
              <Heart
                className={"w-[30px] h-[30px] xl:w-[40px] xl:h-[40px]"}
                color={inWishList ? "#D96060" : "#C0C0C6"}
                onClick={() => setInWishList(!inWishList)}
              />
              <ShareIcon
                className={"w-[30px] h-[30px] xl:w-[40px] xl:h-[40px]"}
                color={"#C0C0C6"}
              />
            </div>
          </div>

          <div className={styles.rating_div}>
            <div className={styles.rating_wrapper}>
              <div className="flex gap-1">
                <p className={styles.rating_txt}>4.5</p>
                <RatingStar color={"#F6B704"} size={16} />
              </div>
              <p className={styles.rating_txt}>25 ratings</p>
            </div>
            <p className={styles.rating_txt} style={{color: "#63798D"}}>
              Get it by 3rd aug
              <span>
                <DeliveryTruck size={16} color={"#63798D"} className={"ml-1"} />
              </span>
            </p>
          </div>

          <div className={styles.duration}>
            <p className={styles.duration_text}>
              For how many months would you like to rent this?
            </p>
            <div className={styles.circle_div}>
              {["3", "6", "9", "12"].map((item, index) => (
                <div
                  className={`${
                    duration === index
                      ? "bg-[#597492] text-fff"
                      : "text-[#597492]"
                  } ${styles.duration_circle}`}
                  onClick={() => setDuration(index)}
                  key={index}>
                  {item}
                </div>
              ))}
            </div>
            <div className={styles.deposit_div}>
              <div>
                <p className={styles.deposit_txt}>Monthly Rent</p>
                <div className={styles.flexx}>
                  <p className={styles.currentPrice}>₹709</p>
                  <p className={styles.originalPrice}>899</p>
                  <div className={styles.discount}>-60% OFF</div>
                </div>
              </div>
              <span className="text-[#9C9C9C]">+</span>
              <div>
                <p className={styles.deposit_txt}>Security Deposit</p>
                <p className={styles.currentPrice}>₹0</p>
              </div>
            </div>
          </div>

          <button className={styles.btn}>Add to Cart</button>

          <div className={styles.emi_wrapper}>
            <RiSparklingFill size={16} color={"#597492"} />
            <p className={styles.emi_text}>{str.emi}</p>
            <RiSparklingFill size={16} color={"#597492"} />
          </div>

          <div className={styles.kyc_wrapper}>
            <BsPersonVcard size={24} />
            <p className={styles.kyc_text}>{str.kyc}</p>
          </div>

          <div
            className={`${styles.services_cards_container} ${styles.mobile}`}>
            {HasselFreeData.map((item, index) => (
              <ServiceCard
                key={index}
                head={item.Heading}
                desc={item.text}
                icon={item.icon}
              />
            ))}
          </div>

          <div className={styles.city_shield_wrapper}>
            <div className={styles.getPeace_div}>
              <RiSparklingFill size={16} color={"#ffffff"} />
              <p className={styles.getPeace_text}>{str.get_peace}</p>
            </div>
            <div className={`${styles.flexx} justify-between`}>
              <div className={styles.flexx}>
                <VerifyIcon size={30} color={"#2D9469"} />
                <p className={styles.city_shield_head}>Cityshield </p>
              </div>
              <button className={styles.read_more}>Read More</button>
            </div>
            <p className={styles.opt_for}>{str.opt_for}</p>
            <p className={styles.protect}>{str.protect}</p>

            <div className={styles.cityshield_prices}>
              <p className={styles.currentPrice}>₹250 /mo</p>
              <p className={styles.originalPrice}>₹400 / mo</p>
              <div className={styles.discount}>-60% OFF</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;