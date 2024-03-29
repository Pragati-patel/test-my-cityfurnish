import React, {useEffect} from "react";
import styles from "./style.module.css";
import PopOver from "../PopOver";
import {endPoints} from "@/network/endPoints";
import {useDispatch, useSelector} from "react-redux";
import {addAllAndSubCategory} from "@/store/Slices";
import {useQuery} from "@/hooks/useQuery";
import Skeleton from "@mui/material/Skeleton";
import {getLocalStorage} from "@/constants/constant";
import {useRouter} from "next/navigation";

const MenuList = ({hasMb = true}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {allAndSubCategory: getAllAndSubCategoryData} = useSelector(
    state => state.homePagedata,
  );
  const [loading, setLoading] = React.useState(true);
  const {refetch: getAllAndSubCategory} = useQuery(
    "category",
    `${endPoints.allAndSubCategory}?cityId=${getLocalStorage("cityId")}`,
  );

  useEffect(() => {
    // if (!getAllAndSubCategoryData?.length) {
    getAllAndSubCategory()
      .then(res => {
        dispatch(addAllAndSubCategory(res?.data?.data));
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
    // }
  }, []);

  return (
    <div className={`${styles.menu_list_wrapper} ${hasMb ? "mb-6" : ""}`}>
      {loading && !getAllAndSubCategoryData?.length ? (
        <div className="w-[80%]">
          <Skeleton />
        </div>
      ) : (
        <div className={styles.menu_list_left}>
          {getAllAndSubCategoryData?.map((list, index) => {
            return (
              <div className={styles.item_wrap} key={index.toString()}>
                <PopOver
                  data={list}
                  list={list?.sub_categories}
                  item={list?.cat_name}
                  parentCategoryId={list.id}
                />
              </div>
            );
          })}
          <a
            rel="noopner noreferrer"
            target="_self"
            aria-label="citymax"
            href="/citymax">
            <div className={styles.item_wrap}>CityMax</div>
          </a>
        </div>
      )}
      <div className={styles.menu_list_right}>
        <a
          onClick={() => {
            router.push("/pages/offers");
          }}
          href={"/pages/offers"}>
          <p className={styles.item_wrap}>Offers</p>
        </a>
        <a href="/pages/bulkorder">
          <p className={`${styles.item_wrap}`} style={{marginRight: "0"}}>
            CF for business
          </p>
        </a>
      </div>
    </div>
  );
};
export default MenuList;
