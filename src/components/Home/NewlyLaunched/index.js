import React, {useEffect, useState} from "react";
import styles from "./style.module.css";
import strings from "@/constants/Constant.json";
import {useDispatch, useSelector} from "react-redux";
import {addNewlaunchedProducts} from "@/store/Slices";
import {endPoints} from "@/network/endPoints";
import {useQuery} from "@/hooks/useQuery";
import {Skeleton} from "@mui/material";
import {useRouter} from "next/navigation";
const NewlyLaunched = () => {
  const router = useRouter();
  const heading = strings.landing_page.Newlylaunced.heading;
  const subHeading = strings.landing_page.Newlylaunced.productRent;

  const homePageReduxData = useSelector(state => state.homePagedata);
  const cityId = homePageReduxData.cityId;

  const {refetch: getNewlaunchedProduct} = useQuery(
    "new-product",
    endPoints.newlylaunchedProduct,
    `?cityId=${cityId}`,
  );

  const dispatch = useDispatch();
  const {newProduct: newProductFetched} = useSelector(
    state => state.homePagedata,
  );

  const [newProduct, setNewProduct] = useState([]);

  useEffect(() => {
    getNewlaunchedProduct()
      .then(res => {
        setNewProduct(res?.data?.data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    newLaunchedProductData();
  }, [newProduct]);

  const newLaunchedProductData = () => {
    dispatch(addNewlaunchedProducts(newProduct));
  };

  return (
    <div className={styles.main_container}>
      <div className={`${styles.brown_box} hidden lg:flex`}>
        <div>
          <h2 className={styles.heading}>{heading}</h2>
          <h3 className={styles.subHeading}>{subHeading}</h3>
        </div>
      </div>
      <div className={styles.images_wrapper}>
        <div className={`${styles.brown_box} lg:hidden flex`}>
          <div>
            <h2 className={styles.heading}>{heading}</h2>
            <h3 className={styles.subHeading}>{subHeading}</h3>
          </div>
        </div>

        {newProductFetched?.map((ele, index) => (
          <div
            className={`${styles.width_container} ${
              index === newProductFetched?.length - 1 && "mr-[16px]"
            } relative`}
            // className={`${styles.width_container} relative bg-red-400`}
            key={index.toString()}>
            <div
              className="w-full h-auto cursor-pointer "
              onClick={() => router.push(`/things/${ele.id}/${ele.seourl}`)}>
              <a
                onClick={e => e.preventDefault()}
                href={`/things/${ele.id}/${ele.seourl}`}
                aria-label={ele?.product_name}
                target="_self"
                rel="noopener">
                <img
                  src={
                    "https://d3juy0zp6vqec8.cloudfront.net/images/product/thumb/" +
                    ele?.image?.split(",")[0]
                  }
                  className={styles.img}
                  alt={ele?.product_name}
                  loading="lazy"
                />
              </a>
            </div>
            <div className={styles.price_tag}>
              <p>{`₹${ele?.sale_price} / month`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewlyLaunched;

export const NewlyLauncedSkeleton = () => {
  return (
    <div className={styles.main_container}>
      <div className={`${styles.skeleton_brown_box}`}>
        <Skeleton className={styles.skeleton_box} variant="rectangular" />
      </div>
      <div className={styles.skeleton_images_wrapper}>
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <div
            className={styles.Newlylaunced_skeleton_wrapper}
            key={index.toString()}>
            <Skeleton className={styles.skeleton_box} variant="rectangular" />
          </div>
        ))}
      </div>
    </div>
  );
};
