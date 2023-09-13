import * as React from "react";
import styles from "./style.module.css";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {Close, DownArrow, Icons} from "@/assets/icon";
import string from "@/constants/Constant.json";
import {cityUrl} from "../../../../appConfig";
import {useDispatch, useSelector} from "react-redux";
import {selectedCityId, selectedCityName} from "@/store/Slices";
import Image from "next/image";
import {getLocalStorage, setLocalStorage} from "@/constants/constant";
import {
  addAllProduct,
  addOutStockProduct,
  addSetProduct,
  addSingleProduct,
} from "@/store/Slices/categorySlice";

export default function CommonDrawer({DrawerName, Cities, data}) {
  const dispatch = useDispatch();
  const homePageReduxData = useSelector(state => state.homePagedata);
  const [userSettings, setUserSettings] = React.useState(false);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [mobileCityDrawer, setMobileCityDrawer] = React.useState(false);
  const handleresize = e => {
    if (e.target.innerWidth < 1024) {
      console.log(e.target.innerWidth);
      setUserSettings(true);
    } else {
      setUserSettings(false);
    }
    if (e.target.innerWidth < 640) {
      // if (mobileCityDrawer) return
      setMobileCityDrawer(true);
    } else {
      // if (!mobileCityDrawer) return
      setMobileCityDrawer(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("resize", handleresize);
    return () => window.removeEventListener("resize", handleresize);
  }, []);
  const hoverRef = React.useRef("");
  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({...state, [anchor]: open});
  };
  React.useEffect(() => {}, [mobileCityDrawer]);

  const handleMenu = (e, item) => {
    // const previousSubCategory = JSON.parse(localStorage.getItem("subCategory"));
    let previousSubCategory;
    if (typeof window !== "undefined") {
      previousSubCategory = getLocalStorage("subCategory");
    }
    if (item?.rootID !== 0) {
      if (typeof window !== "undefined") {
        setLocalStorage("category", "Home Furniture");
        setLocalStorage("categoryId", item?.rootID);
        setLocalStorage("subCategory", item?.cat_name);
        setLocalStorage("subCategoryId", item?.id);
      }
    } else {
      if (typeof window !== "undefined") {
        dispatch(addAllProduct(true));
        setLocalStorage("category", item?.cat_name);
        setLocalStorage("categoryId", item?.id);
        setLocalStorage("subCategory", "All");
      }
    }
    if (previousSubCategory !== item?.cat_name) {
      dispatch(addSingleProduct([]));
      dispatch(addSetProduct([]));
      dispatch(addOutStockProduct([]));
    }
    // router.push(
    //   `/${homePageReduxData?.cityName.toLowerCase()}/${item?.seourl}`,
    // );
  };
  const list = anchor =>
    DrawerName === "menu" ? (
      <div
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        className={styles.drawer_wrapper}>
        <div className={styles.drawer_close}>
          <Close
            color={"#000"}
            size={25}
            className={styles.close_icon}
            onClick={() => toggleDrawer("left", false)}
          />
        </div>
        <div className={styles.drawer_content}>
          <p className={styles.logo_text}>cityfurnish</p>
          <div className={styles.menu_list}>
            <a href={`/${homePageReduxData?.cityName.toLowerCase()}/rent`}>
              <p
                className={styles.menu_item}
                onMouseEnter={e => {
                  hoverRef.current = "All";
                }}>
                All
              </p>
            </a>
            {data?.map((item, index) => (
              <a
                key={index.toString()}
                href={`/${homePageReduxData?.cityName.toLowerCase()}/${
                  item?.seourl
                }`}>
                <p
                  className={styles.menu_item}
                  value={item}
                  onClick={e => {
                    handleMenu(e, item);
                  }}>
                  {item?.cat_name}
                </p>
              </a>
            ))}
          </div>
          <div className={styles.divider}></div>
          <div className={styles.menu_list}>
            {string.landing_page.header.menuList2?.map((item, index) => (
              <a
                key={index.toString()}
                href={item.link}
                target={index === 0 ? "_blank" : "_self"}
                rel="noreferrer">
                <p
                  className={styles.menu_item}
                  // onClick={() => router.push(item.link)}
                >
                  {item?.item}
                </p>
              </a>
            ))}
          </div>
          <div className={styles.divider}></div>
          <div className={styles.menu_list}>
            {string.landing_page.header.menuList3?.map((item, index) => {
              return (
                <>
                  {index !== 3 ? (
                    <a key={index.toString()} href={item.link}>
                      <p className={styles.menu_item}>{item?.item}</p>
                    </a>
                  ) : (
                    <a
                      key={index.toString()}
                      href={
                        index === 3 &&
                        userSettings &&
                        getLocalStorage("user_id") !== null
                          ? "/usersettings"
                          : item.link
                      }>
                      <p className={styles.menu_item}>{item?.item}</p>
                    </a>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>
    ) : (
      <>
        {mobileCityDrawer && DrawerName !== "menu" && (
          <div
            className="relative z-[9999]"
            onClick={() => toggleDrawer("bottom", false)}>
            <div
              className={styles.bottom_close_icon}
              onClick={toggleDrawer("bottom", false)}>
              <Close
                color={"#000"}
                size={20}
                className={"z-30"}
                onClick={() => {
                  toggleDrawer("bottom", false);
                }}
              />
            </div>
            {/* </p> */}
          </div>
        )}
        <div
          className={`${styles.drawer_wrapper} ${styles.city_drawer_wrapper}`}
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}>
          <div
            className={`${styles.drawer_close} ${styles.city_drawer_close}`}
            onClick={() => {
              mobileCityDrawer && DrawerName !== "menu"
                ? toggleDrawer("bottom", false)
                : toggleDrawer("left", false);
            }}>
            <Close
              color={"#000"}
              size={25}
              className={styles.close_icon}
              onClick={() => {
                mobileCityDrawer && DrawerName !== "menu"
                  ? toggleDrawer("bottom", false)
                  : toggleDrawer("left", false);
              }}
            />
          </div>
          <div className={`${styles.drawer_content}`}>
            <h1 className={styles.select_heading}>Select your city</h1>
            <div
              className={`${styles.city_container} justify-center sm:justify-start items-center`}>
              {Cities?.map((city, index) => (
                <div
                  className={`${styles.city_wrapper} 
                  `}
                  key={index.toString()}
                  onClick={() => {
                    dispatch(selectedCityId(city?.id));
                    dispatch(selectedCityName(city?.list_value));
                    toggleDrawer("bottom", false);
                    if (typeof window !== "undefined") {
                      setLocalStorage("cityId", city?.id);
                    }
                  }}>
                  <img
                    src={cityUrl + city?.list_value_seourl + ".webp"}
                    className={`${styles.city_thambnil} ${
                      homePageReduxData?.cityName === city?.list_value &&
                      "border-[2px] border-primary"
                    }`}
                    alt="city-image"
                  />
                  {city?.id === 50 ? (
                    <div className={styles.city_name}>
                      {city?.list_value.split("/")[0]}/
                      <br className="flex sm:hidden" />
                      {city?.list_value.split("/")[1]}
                      {/* {city?.list_value} */}
                      {/* {city?.id} */}
                    </div>
                  ) : (
                    <p className={styles.city_name}>{city?.list_value}</p>
                  )}
                </div>
              ))}
            </div>
            <div className={styles.bottom_city_content}>
              <p className={styles.bottom_subheading}>
                Get the free Cityfurnish app on your phone
              </p>
              <button className={styles.bottom_heading}>
                Download mobile app
              </button>
              <div className={styles.download_qr_wrapper}>
                <img
                  src={
                    "https://d3juy0zp6vqec8.cloudfront.net/images/scan-and-download.webp"
                  }
                  alt="download-QR"
                />
                {/* <Image src={Images.DownloadQR} alt="download-QR" /> */}
                <p className={styles.qr_text}>
                  <span className={styles.qr_text_span}>100+</span>People have
                  already downloaded our app 🎉
                </p>
              </div>
              <p className={styles.detail_line}>
                100k+ People have already downloaded our app 🎉
              </p>
            </div>
          </div>
        </div>
      </>
    );

  // console.log(Cities, "Cities")

  return (
    <div className={"flex"}>
      <div
        onClick={
          mobileCityDrawer && DrawerName !== "menu"
            ? toggleDrawer("bottom", true)
            : toggleDrawer("left", true)
        }>
        {DrawerName === "menu" ? (
          <Image
            src={Icons.Menu}
            alt="menu-icon"
            className={styles.menu_icon_drawer}
          />
        ) : (
          <span className={styles.header_city_name}>
            {homePageReduxData?.cityName}
            {DrawerName !== "menu" && <DownArrow size={20} color={"#45454A"} />}
          </span>
        )}
      </div>
      <SwipeableDrawer
        anchor={mobileCityDrawer && DrawerName !== "menu" ? "bottom" : "left"}
        open={
          mobileCityDrawer && DrawerName !== "menu" ? state.bottom : state.left
        }
        onClose={
          mobileCityDrawer && DrawerName !== "menu"
            ? toggleDrawer("bottom", false)
            : toggleDrawer("left", false)
        }
        onOpen={
          mobileCityDrawer && DrawerName !== "menu"
            ? toggleDrawer("bottom", true)
            : toggleDrawer("left", true)
        }>
        {list("left")}
      </SwipeableDrawer>
    </div>
  );
}
