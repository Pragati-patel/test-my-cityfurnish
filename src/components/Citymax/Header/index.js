"use client";
import React, {useEffect, useState, useRef} from "react";
import styles from "./style.module.css";
import Image from "next/image";
import {Icons} from "@/assets/icon";
import CommonDrawer from "@/components/Common/Drawer/index";
import {endPoints} from "@/network/endPoints";
import {useQuery} from "@/hooks/useQuery";
import {
  addCityList,
  selectedCityId,
  addSidebarMenuLists,
  getCartItems,
  selectedCityName,
  setShowCartItem,
  addCategory,
  reduxSetModalState,
} from "@/store/Slices";
import {useDispatch, useSelector} from "react-redux";
import {useAppSelector} from "@/store";
import {useRouter} from "next/navigation";
// import Link from "next/link";
import {getLocalStorage, setLocalStorage} from "@/constants/constant";
import axios from "axios";
import {baseURL} from "@/network/axios";

import {
  decrypt,
  decryptBase64,
  encrypt,
  encryptBase64,
} from "@/hooks/cryptoUtils";
import {RxHamburgerMenu} from "react-icons/rx";
import MenuDrawer from "./menuDrawer/MenuDrawer";
import {IconLink} from "../../../assets/icon";
import {useAuthentication} from "@/hooks/checkAuthentication";
import "react-responsive-modal/styles.css";
import LoginModal from "@/components/LoginPopups";
import {addSaveditemID, addSaveditems} from "@/store/Slices/categorySlice";

const CitymaxHeader = ({zIndex}) => {
  const {checkAuthentication} = useAuthentication();
  const iconRef = useRef(null);
  const dispatch = useDispatch();
  const router = useRouter();

  const modalStateFromRedux = useSelector(state => state.order.isModalOpen);

  // const [openSearchbar] = React.useState(false);
  const {cityList: storeCityList} = useAppSelector(state => state.homePagedata);
  const {refetch: getCityList} = useQuery("city-list", endPoints.cityList);
  const {refetch: getTrendingSearch} = useQuery(
    "trending-search",
    endPoints.trendingSearchConstants,
  );
  const {refetch: getSidebarMenuList} = useQuery(
    "sideBarMenuLists",
    endPoints.sidebarMenuLists,
  );
  const homePageReduxData = useSelector(state => state.homePagedata);

  const [showProfileDropdown, setShowProfileDropdown] = React.useState(false);
  const categoryPageReduxData = useSelector(state => state.categoryPageData);
  const wishListCount = categoryPageReduxData?.savedProducts?.length;
  // const [profileIconLink, setProfileIconLink] = useState();
  // const [heartIconLink, setHeartIconLink] = useState();
  const [menuDrawer, setMenuDrawer] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [click, setClick] = useState();

  const userId = decrypt(getLocalStorage("_ga"));
  const tempUserId = decryptBase64(getLocalStorage("tempUserID"));

  useEffect(() => {
    console.log(categoryPageReduxData, "categoryPageReduxData");
  }, [categoryPageReduxData]);

  const toggleLoginModal = bool => {
    dispatch(reduxSetModalState(bool));
    setLoginModal(bool);
  };

  const cityId = getLocalStorage("cityId");
  if (!cityId) {
    setLocalStorage("cityId", 46);
  }

  const {refetch: getSavedItems} = useQuery(
    "saved-items",
    endPoints.savedItems,
    `?cityId=${cityId}&userId=${isLogin ? userId : tempUserId}`,
  );

  useEffect(() => {
    const cityId = getLocalStorage("cityId") || 46;

    getCityList()
      .then(res => {
        if (cityId) {
          const cityName = res.data.data.find(
            item => item?.id === cityId,
          ).list_value;
          dispatch(selectedCityName(cityName));
        }
        dispatch(addCityList(res?.data?.data));
        dispatch(selectedCityId(res?.data?.data[0]?.id));
      })
      .catch(err => console.log(err));
    getTrendingSearch()
      .then(res => {
        // setArr(res?.data?.data);
      })
      .catch(err => console.log(err));

    getSidebarMenuList().then(res => {
      dispatch(addSidebarMenuLists(res?.data?.data));
    });
    if (!homePageReduxData?.category.length) {
      axios
        .get(baseURL + endPoints.category)
        .then(res => {
          dispatch(addCategory(res?.data?.data));
        })
        .catch(err => {
          console.log(err);
          dispatch(addCategory([]));
        });
    }
  }, []);

  useEffect(() => {
    getSavedItems()
      .then(res => {
        dispatch(addSaveditems(res?.data?.data));
        const ids = res?.data?.data.map(item => {
          return item?.id;
        });
        dispatch(addSaveditemID(ids));
      })
      .catch(err => console.log(err));
  }, [isLogin]);

  const cartItemsLength = useSelector(
    state => state.cartPageData.cartItems.length,
  );

  const validateAuth = async () => {
    const isAuthenticated = await checkAuthentication();
    console.log(isAuthenticated, "response from isauthencate");
    if (isAuthenticated === true) {
      setIsLogin(true);
    } else setIsLogin(false);
    const userIdToUse = isAuthenticated ? userId : tempUserId;
    fetchCartItems(userIdToUse);
  };

  const fetchCartItems = userIdToUse => {
    axios
      .get(baseURL + endPoints.addToCart.fetchCartItems(cityId, userIdToUse))
      .then(res => {
        dispatch(getCartItems(res?.data?.data));
        dispatch(setShowCartItem(true));
      })
      .catch(err => {
        console.log(err);
        dispatch(setShowCartItem(true));
      });
  };

  useEffect(() => {
    validateAuth();
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (iconRef.current && !iconRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    console.log(categoryPageReduxData?.savedProducts?.length, "guyywhuhui");
  }, [categoryPageReduxData?.savedProducts?.length]);

  const data = {
    userId: userId ?? "",
    // tempUserId: JSON.parse(localStorage.getItem("tempUserID")) ?? "",
    tempUserId: decryptBase64(getLocalStorage("tempUserID")),
  };

  useEffect(() => {
    axios
      .post(baseURL + endPoints.sessionUserUrl, data)
      .then(res => {
        if (userId) {
          localStorage.removeItem("user_id");
          const encryptedData = encrypt(res?.data?.data?.userId);
          setLocalStorage("_ga", encryptedData);
          setLocalStorage("user_name", res?.data?.data?.userName);
        } else {
          setLocalStorage(
            "tempUserID",
            encryptBase64(res?.data?.data?.tempUserId),
          );
        }
      })
      .catch(err => console.log(err));
  }, []);

  // useEffect(() => {
  //   if (userId) {
  //     setProfileIconLink("/usersettings");
  //     setHeartIconLink("/wishlist");
  //   } else {
  //     setProfileIconLink("https://test.rentofurniture.com/user_sign_up");
  //     setHeartIconLink("https://test.rentofurniture.com/user_sign_up");
  //   }
  // }, [userId]);

  const toggleDrawer = () => {
    setMenuDrawer(!menuDrawer);
  };

  return (
    <>
      <LoginModal
        closeModal={() => toggleLoginModal(false)}
        isModalOpen={loginModal}
        setIsLogin={bool => {
          setIsLogin(bool);
        }}
        handleChangeRoute={() => {
          if (click === "profile") router.push(`/usersettings`);
          else if (click === "wishlist") router.push(`/wishlist`);
        }}
      />

      <div className={`${modalStateFromRedux && "!z-0"} ${styles.main}`}>
        <div className={styles.header_wrapper}>
          <div className={styles.header_left_wrapper}>
            <div onClick={toggleDrawer}>
              <RxHamburgerMenu className={styles.hamburger} />
            </div>
            {menuDrawer && (
              <MenuDrawer
                open={menuDrawer}
                toggleDrawer={toggleDrawer}
                toggleLoginModal={val => toggleLoginModal(val)}
                setClick={val => setClick(val)}
              />
            )}

            <a
              href={"/cityfurnish"}
              onClick={e => {
                e.preventDefault();
              }}>
              <div
                className={styles.logo}
                onClick={() => router.push("/cityfurnish")}>
                <img src={`${IconLink + "citymax_final.svg"}`} />
              </div>
            </a>
            <div className={styles.header_city_wrapper}>
              <div className={styles.header_city_name}>
                <CommonDrawer Cities={storeCityList} DrawerName="cities" />
              </div>
            </div>

            <div className={styles.cityfurnish_wrapper}>
              <img
                src={`${IconLink + "home-cityfurnish.svg"}`}
                className={styles.home_icon}
              />
              <p className={styles.cityfurnish_txt}>cityfurnish</p>
            </div>
          </div>

          <div className={styles.header_right_wrapper}>
            <div className={styles.wishlist_link_wrapper}>
              <a
                href={isLogin && `/wishlist`}
                onClick={() => {
                  setClick("wishlist");
                  if (isLogin) {
                    router.push("/wishlist");
                  } else {
                    toggleLoginModal(true);
                    // router.push(
                    //   "https://test.rentofurniture.com/user_sign_up",
                    // );
                  }
                }}>
                <div className={`w-100 h-100 absolute z-10`}></div>
                <span
                  className={`${styles.header_favorite_container} relative z-[-1]`}>
                  <Image
                    src={Icons.Favorite}
                    alt="favorite"
                    className={styles.header_favorite}
                    loading="lazy"
                  />
                  {categoryPageReduxData?.savedProducts?.length > 0 ? (
                    <span className={styles.cart_badge}>{wishListCount}</span>
                  ) : (
                    <></>
                  )}
                </span>
              </a>

              <div className={styles.cart_link_wrapper}>
                <a href={"/cart"}>
                  <div
                    className={`w-100 h-100 absolute z-10`}
                    onClick={() => router.push("/cart")}></div>
                  <Image
                    src={Icons.shoppingCard}
                    alt="shopping-card-icon"
                    loading="lazy"
                    className={`${styles.header_shopping_card} relative z-[-1]`}
                    // onClick={() => router.push("/cart")}
                  />
                  {cartItemsLength > 0 && (
                    <div className={styles.cart_badge}>{cartItemsLength}</div>
                  )}
                </a>
              </div>
              {/* </Link> */}
              <div
                className={`pt-[14px]  pb-[16px] 
                  
                  ${styles.test}`}
                onMouseLeave={() => {
                  setShowProfileDropdown(false);
                }}>
                <a
                  onClick={() => {
                    setClick("profile");
                    if (isLogin) router.push("/usersettings");
                    else toggleLoginModal(true);
                  }}
                  href={isLogin && "/usersettings"}
                  rel="noopner noreferrer"
                  target="_self"
                  aria-label="profile">
                  <div
                    className="relative z-20"
                    onMouseEnter={e => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (isLogin) {
                        setShowProfileDropdown(true);
                      }
                    }}>
                    <Image
                      src={Icons.Profile}
                      alt="profile-icon"
                      loading="lazy"
                      className={`${styles.header_profile_icon} relative z-10 pointer-events-none`}
                      onClick={e => e.preventDefault()}
                      aria-disabled={true}
                    />
                  </div>
                </a>
              </div>

              {decrypt(getLocalStorage("_ga")) !== null &&
                showProfileDropdown && (
                  <div
                    className="pt-[14px]"
                    onMouseEnter={() => {
                      setShowProfileDropdown(true);
                    }}></div>
                )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.end_line}></div>
    </>
  );
};
export default CitymaxHeader;