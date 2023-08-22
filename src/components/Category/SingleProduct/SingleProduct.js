import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import {useParams} from "next/navigation";
import style from "./style.module.css";
import ProductSet from "../ProductSet/ProductSet";

import Card from "@/components/Common/HomePageCards";

import {productImageBaseUrl} from "@/constants/constant";
import {endPoints} from "@/network/endPoints";
import {useMutation} from "@/hooks/useMutation";
import {
  addSingleAllProduct,
  addSingleProduct,
  addSubCategoryMetaData,
} from "@/store/Slices/categorySlice";

const SingleProduct = () => {
  const [pageNo, setPageNo] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const {productname} = useParams();
  const dispatch = useDispatch();
  const categoryPageReduxData = useSelector(state => state.categoryPageData);

  const categoryId = localStorage.getItem("categoryId").replace(/"/g, "");
  const subCategoryId = localStorage.getItem("subCategoryId").replace(/"/g, "");

  const bodyData = {
    subCategoryId,
    parentCategoryId: categoryId,
    cityId: 50,
    pageNo,
  };
  const bodyDataAll = {
    parentCategoryId: categoryId,
    cityId: 50,
    pageNo,
  };

  const data =
    productname === "all" || categoryPageReduxData?.isAllProduct
      ? bodyDataAll
      : bodyData;

  const singleItemLength =
    categoryPageReduxData?.categoryMetaData?.totalProduct;
  const {mutateAsync: getSingleProducts} = useMutation(
    "category-single-product",
    "POST",
    endPoints.categorySingleProduct,
    data,
  );

  useEffect(() => {
    getSingleProducts()
      .then(res => {
        setTotalPage(res?.data?.meta?.totalPage);
        dispatch(addSubCategoryMetaData(res?.data?.meta));
        if (categoryPageReduxData?.isAllProduct) {
          dispatch(
            addSingleAllProduct([
              ...categoryPageReduxData?.singleProductAll,
              ...res?.data?.products,
            ]),
          );
        } else {
          dispatch(
            addSingleProduct([
              ...categoryPageReduxData?.singleProduct,
              ...res?.data?.products,
            ]),
          );
        }
      })
      .catch(err => console.log(err));
  }, [pageNo]);

  const singleItemData = categoryPageReduxData?.isAllProduct
    ? categoryPageReduxData?.singleProductAll
    : categoryPageReduxData?.singleProduct;

  console.log(singleItemData, "singleItemData");

  return singleItemData?.length ? (
    <div>
      <InfiniteScroll
        dataLength={singleItemData?.length}
        next={() => {
          if (pageNo < totalPage) {
            setPageNo(prev => prev + 1);
          }
        }}
        hasMore={true} // Replace with a condition based on your data source
        className="!w-full !h-full">
        <div className={style.main_container}>
          {singleItemData?.map((item, index) => {
            return (
              <div className={style.card_box_product} key={index.toString()}>
                <Card
                  productWidth={style.productCardWidth}
                  cardImage={`${productImageBaseUrl}${
                    item?.image?.split(",")[0]
                  }`}
                  productImageBaseUrl
                  desc={item?.product_name}
                  originalPrice={item?.price}
                  currentPrice={item?.sale_price}
                  hoverCardImage={
                    item?.image?.split(",").filter(item => item).length > 1
                      ? productImageBaseUrl + item?.image?.split(",")[1]
                      : productImageBaseUrl + item?.image?.split(",")[0]
                  }
                  discount={`${Math.round(
                    ((item?.price - item?.sale_price) * 100) / 1000,
                  ).toFixed(2)}%`}
                  productId={item?.product_id}
                  productName={item?.product_name.replace(/ /g, "-")}
                />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
      {categoryPageReduxData?.singleProduct?.length === singleItemLength ? (
        <ProductSet />
      ) : null}
    </div>
  ) : null;
};

export default SingleProduct;