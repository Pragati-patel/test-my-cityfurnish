export const endPoints = {
  cityList: "fc-list-values/getAllCities",
  offersAndCupons: "fc-site-offers/getOffersAndCoupons",
  recentlyViewedProduct: "fc-view-products/getRecentlyViewedProducts",
  googleReviews: "fc-google-review-lists/getAllGoogleReviews",
  newlylaunchedProduct: "fc-products/getNewLaunchProducts",
  limitedPreiod: "fc-products/getProductsOnSale",
  trendingProduct: "fc-products/getTrendingProducts",
  productCombos: "fc-products/getCombosProducts",
  category: "fc-categories/all",
  allAndSubCategory: "fc-categories/getAllCategoriesAndSubCategories",
  sidebarMenuLists: "fc-categories/getSidebarMenuLists",
  rentNowBanners: "fc-app-product-urls/getBanners?isHomePage=1",
  trendingSearchConstants: "fc-products/trendingSearchConstants",
  productWithFilter: "fc-products/getProductsWithFilter",
  faqsLandingPage: "fc-faqs/getHomePageFAQS",
  homePageHappySubscriber:
    "fc-care-instructions/getHomePageHappyCustomerStories",

  homePageTextContent: "fc-admin-settings/getHomePageTextContent",

  cityIdByCityName: "fc-list-values/getCityIdByCityName?cityName=",

  seoApplianceRentalSubCategory:
    "fc-categories/getRentalApplianceSubCategories",
  seoApplianceTtrendingProduct:
    "fc-products/getRentalFurnitureCrowdFavourites?cityId=",
  seoApplianceBanners: "fc-app-product-urls/getBanners?categoryId=26",
  seoApplianceFaqs: "fc-faqs/getSeoApplianceRentalPageFAQS",
  seoApplianceHappyCustomer:
    "fc-care-instructions/getSeoApplianceRentalPageHappyCustomerStories",
  seoAppliancesTextContent: "fc-city-category-seo-data/getSeoPageTextContent",

  seoFurnitureRentalSubCategory: "fc-categories/all",
  seoFurnitureTtrendingProduct:
    "fc-products/getRentalFurnitureCrowdFavourites?cityId=",
  seoFurnitureBanners: "fc-app-product-urls/getBanners?categoryId=27",
  seoFurnitureFaqs: "fc-faqs/getSeoFurnitureRentalPageFAQS",
  seoFurnitureHappyCustomer:
    "fc-care-instructions/getSeoFurnitureRentalPageHappyCustomerStories",
  seoFurnitureTextContent: "fc-city-category-seo-data/getSeoPageTextContent",

  productPage: {
    completeTheLook: id =>
      `fc-products/getRecommendedProducts?productId=${id}&cityId=50`,
    youMightLike: id =>
      `fc-products/getYouMightAlsoLikeProducts?productId=${id}&cityId=50`,
    monthlyRent: id =>
      `fc-subproducts/getProductForThePeriod?productId=${id}&cityId=46`,
    careInstructions:
      "fc-care-instructions/getProductCareInstructions?productId=4096",
    bannerImages: "fc-product-banners/getProductBanners?productId=3866",
    productVideos: "fc-product-videos/getProductVideos?productId=3783",
    customerReviews:
      "fc-user-reviews/getProductUserReviews?productId=3783&cityId=45",
    qna: "fc-faq-products/getProductPageFAQs?productId=3783",
    happySubscribers:
      "fc-care-instructions/getCustomerHappyStories?productId=4096",
    singleProductDetails: id =>
      `fc-products/getSingleProductDetails?productId=${id}&cityId=50`,
  },

  categoryHappySubscriber:
    "fc-care-instructions/getCategoryPageHappyCustomerStories",
  categortFaq: "fc-faqs/getCategoryPageFAQS",
  categoryContent: "fc-city-category-datas/getCategoryPageTextContent",
  savedItems: "fc-product-likes/getWishlistProducts",
  categorySingleProduct: "fc-products/getSingleProducts",
  categoryComboProduct: "fc-products/getSetProducts",
  categoryStockOutProduct: "fc-products/getOutOfStockProducts",
  categoryFilterOption: "fc-products/getProductFilters",
};
