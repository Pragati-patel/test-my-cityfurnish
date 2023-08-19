"use client";

import React, {useEffect, useRef} from "react";
import styles from "./style.module.css";
import string from "@/constants/Constant.json";
// import {HappySubscriber} from "@/constants/constant";
// import {useHorizontalScroll} from "@/hooks/useHorizontalScroll";
import {useDispatch} from "react-redux";
import {getSubscribersVideos} from "@/store/Slices";
import {endPoints} from "@/network/endPoints";
import axios from "axios";
import {baseURL} from "@/network/axios";

const HappySubscribers = ({page, params}) => {
  const dispatch = useDispatch();
  const [data, setData] = React.useState(null);

  const getVideosForProductPage = () => {
    axios
      .get(baseURL + endPoints.productPage.happySubscribers)
      .then(res => {
        dispatch(getSubscribersVideos(res?.data?.data));
        setData(res?.data?.data);
      })
      .catch(err => {
        console.log(err);
        dispatch(getSubscribersVideos([]));
      });
  };
  const getVideosForHomePage = () => {
    axios
      .get(baseURL + endPoints.homePageHappySubscriber)
      .then(res => {
        setData(res?.data?.data);
      })
      .catch(err => {
        console.log(err);
        dispatch(getSubscribersVideos([]));
      });
  };
  const getVideosForSeoAppliancesPage = () => {
    axios
      .get(baseURL + endPoints.seoApplianceHappyCustomer)
      .then(res => {
        setData(res?.data?.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const getVideosForSeoFurniturePage = () => {
    axios
      .get(baseURL + endPoints.seoFurnitureHappyCustomer)
      .then(res => {
        setData(res?.data?.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (page === "home-page") {
      getVideosForHomePage();
    } else if (page === "product") {
      getVideosForProductPage();
    } else if (page === "appliances-rental") {
      getVideosForSeoAppliancesPage();
    } else if (page === "furniture-rental") {
      getVideosForSeoFurniturePage();
    } else {
      getVideosForHomePage();
    }
  }, []);

  const str = string.landing_page.HappySubscriber;

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let mouseDown = false;
    let startX, scrollLeft;

    const startDragging = function (e) {
      mouseDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };
    const stopDragging = function () {
      mouseDown = false;
    };

    slider.addEventListener("mousemove", e => {
      e.preventDefault();
      if (!mouseDown) return;
      const x = e.pageX - slider.offsetLeft;
      const scroll = x - startX;
      slider.scrollLeft = scrollLeft - scroll;
    });
    slider.addEventListener("mousedown", startDragging, false);
    slider.addEventListener("mouseup", stopDragging, false);
    slider.addEventListener("mouseleave", stopDragging, false);
  }, []);

  // const HappySubscriberVideosArray =
  //   page === "product" ? productPageSubscribersVideos : HappySubscriber;

  return (
    <div className={styles.happy_subscribers_wrapper}>
      <h2 className={styles.label}>{str.label}</h2>
      <h2 className={styles.head}>{str.head}</h2>
      <p className={styles.desc}>{str.desc}</p>

      <div className={styles.cards_wrapper} ref={sliderRef}>
        {data?.map((item, index) => (
          <div className={styles.card_div} key={index.toString()}>
            <div className={styles.video}>
              {/* <video className={styles.video_player} ref={videoRef}>
                <source src={item.file_name} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              <iframe
                width="256"
                height="152"
                // src="https://www.youtube.com/embed/KAc3AEpQNSs?list=PLRheCL1cXHrtUJKNwE4Ksn6JEpOx5W_ye"
                src={item.file_name}
                title="YouTube video player"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
              {/* <div
                className={styles.play_button_container}
                onClick={() => handlePlayButtonClick(item.file_name)}></div> */}
            </div>
            <h3 className={styles.video_name}>{item?.title}</h3>
            <p className={styles.video_desc}>
              {item?.description.replace(/<[^>]*>/g, "")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HappySubscribers;
