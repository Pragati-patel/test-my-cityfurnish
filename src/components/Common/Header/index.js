"use client";
import React, {useEffect} from "react";
import styles from "./style.module.css";
import Image from "next/image";
import {Icons, DownArrow, RecentIcon, TrendingIcon} from "@/assets/icon";
import CommonDrawer from "../Drawer";
import {endPoints} from "@/network/endPoints";
import {useQuery} from "@/hooks/useQuery";
import {addCityList, selectedCityId, addSidebarMenuLists} from "@/store/Slices";
import {useDispatch} from "react-redux";
import {useAppSelector} from "@/store";
import {RentFurniture} from "@/constants/constant";
// import {BiArrowFromRight} from "react-icons/bi";
// import {Modal} from "react-responsive-modal";

const Header = () => {
  const dispatch = useDispatch();
  const [openSearchbar, setOpenSearchBar] = React.useState(false);
  // const [open, setOpen] = useState(false);
  const {cityList: storeCityList, sidebarMenuLists: storeSideBarMenuLists} =
    useAppSelector(state => state.homePagedata);
  const {refetch: getCityList} = useQuery("city-list", endPoints.cityList);

  const {refetch: getSidebarMenuList} = useQuery(
    "sideBarMenuLists",
    endPoints.sidebarMenuLists,
  );

  useEffect(() => {
    getCityList()
      .then(res => {
        dispatch(addCityList(res?.data?.data));
        dispatch(selectedCityId(res?.data?.data[0]?.id));
      })
      .catch(err => console.log(err));

    getSidebarMenuList().then(res => {
      dispatch(addSidebarMenuLists(res?.data?.data));
    });
  }, []);

  // const onOpenModal = () => setOpen(true);
  // const onCloseModal = () => setOpen(false);

  // abhi k liye

  const arr = [
    "Jade queen size",
    "Jade queen size",
    "Jade queen size",
    "Jade queen size",
  ];

  return (
    <>
      <div className={styles.header_wrapper}>
        <div className={styles.header_left_wrapper}>
          <CommonDrawer data={storeSideBarMenuLists} DrawerName="menu" />
          <Image
            src={Icons.CityFurnishLogo}
            alt="City-furnish-logo"
            className={styles.cityfurnish_logo}
          />
          <div className={styles.header_city_wrapper}>
            <div className={styles.header_city_name}>
              <CommonDrawer Cities={storeCityList} DrawerName="cities" />
              <DownArrow size={20} color={"#45454A"} />
            </div>
          </div>
        </div>
        <div className={styles.header_right_wrapper}>
          <div
            className={styles.search_wrapper}
            onClick={() => {
              setOpenSearchBar(!openSearchbar);
            }}>
            {openSearchbar && SearchModal(arr)}
            <input
              placeholder="Search for Furniture, Appliances, etc"
              className={styles.search_input}
            />
            <Image
              src={Icons.Search}
              alt="search-icon"
              className={styles.header_search_icon}
            />
          </div>
          <Image
            src={Icons.Favorite}
            alt="favorite"
            className={styles.header_favorite}
          />
          <Image
            src={Icons.shoppingCard}
            alt="shopping-card-icon"
            className={styles.header_shopping_card}
          />
          <Image
            src={Icons.Profile}
            alt="profile-icon"
            className={styles.header_profile_icon}
          />
        </div>
      </div>
      <div className={styles.mobile_search_row}>
        <div className={` ${styles.search_wrapper_mobile}`}>
          <input
            placeholder="Search for Furniture, Appliances, etc"
            className={styles.search_input}
            onClick={() => {
              setOpenSearchBar(!openSearchbar);
            }}
          />
          {openSearchbar && SearchModal(arr)}

          <Image
            src={Icons.Search}
            alt="search-icon"
            className={styles.header_search_icon}
          />
        </div>
      </div>
    </>
  );
};
export default Header;

const SearchModal = arr => {
  return (
    <div className={styles.search_open_details} open={open}>
      <p className={styles.search_head}>Recent</p>
      <div className={styles.pills_wrapper}>
        {arr.map((item, index) => (
          <div key={index} className={styles.pill}>
            <RecentIcon
              className={
                "w-[18px] h-[18px] md:w-[14px] md:h-[14px] xl:w-[18px] xl:h-[18px]"
              }
              color={"#E0806A"}
            />
            <p className={styles.pill_text}>{item}</p>
          </div>
        ))}
      </div>
      <div className="mt-6"></div>
      <p className={styles.search_head}>Trending searches</p>
      <div className={styles.pills_wrapper}>
        {arr.map((item, index) => (
          <div key={index} className={styles.pill}>
            <TrendingIcon
              className={
                "w-[18px] h-[18px] md:w-[14px] md:h-[14px] xl:w-[18px] xl:h-[18px]"
              }
              color={"#2D9469"}
            />
            <p className={styles.pill_text}>{item}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <p className={styles.search_head}>Categories</p>
        <div className={styles.categories_wrapper}>
          {RentFurniture?.map((item, index) => (
            <div key={index} className={styles.card_wrapper}>
              <img src={item.img} alt="" className={styles.categories_img} />
              <div>
                <h3 className={styles.category_label}>{item.label}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
