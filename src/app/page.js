"use client";

import React from "react";
import AnnouncementBar from "@/components/Common/AnnouncementBar";
// import CTA from "@/components/Common/CTA";
// import Footer from "@/components/Common/Footer";
import FrequentlyAskedQuestions from "@/components/Common/FrequentlyAskedQuestions";
import Header from "@/components/Common/Header";
// import MenuList from "@/components/Common/MenuList";
// import BackedBy from "@/components/Home/BackedBy";
// import FurnishingGuaranteed from "@/components/Home/FurnishingGuaranteed";
// // import HeroBanner from "@/components/Home/HeroBanner";
// import HowProductsLook from "@/components/Home/HowProductsLook";

import OffersAndCoupons from "@/components/Home/OffersAndCoupons";
import LimetedPreiodDiscount from "@/components/Home/LimetedPreiodDiscount";

import CustomerRating from "@/components/Home/Rating";

import MediaCoverage from "@/components/Home/MediaCoverage";
import RentFurnitureAndAppliances from "@/components/Home/RentFurnitureAndAppliances";
import ChatWithUs from "@/components/Home/ChatWithUs";
import TrendingProducts from "@/components/Home/TrendingProducts";
import PreDesignCombos from "@/components/Home/PredesignCombos";
import RecentlyViewedProduct from "@/components/Home/RecentlyViewedProduct";
import FourSteps from "@/components/Home/FourSteps";
import NewlyLaunched from "@/components/Home/NewlyLaunched";
import HappySubscribers from "@/components/Home/HappySubscribers";
import DownloadForMobile from "@/components/Home/DownloadForMobile";
import RentNowBanner from "@/components/Home/RentNowBanner";

export default function Home() {
  return (
    <div>
      <AnnouncementBar />
      <Header />
      {/* <MenuList /> */}
      {/* <HeroBanner /> */}
      <RentFurnitureAndAppliances />
      <TrendingProducts />
      <DownloadForMobile />
      <PreDesignCombos />
      <RecentlyViewedProduct />
      {/* <WhyCityfurnish /> */}
      {/* <HowProductsLook /> */}
      <LimetedPreiodDiscount />
      <MediaCoverage />
      <OffersAndCoupons />
      <NewlyLaunched />
      <CustomerRating />
      {/* <FurnishingGuaranteed /> */}
      {/* <BackedBy /> */}
      {/* <HappySubscribers /> */}
      <FourSteps />
      <RentNowBanner />
      <HappySubscribers />
      {/* <CTA /> */}
      {/* <Footer /> */}
      <ChatWithUs />
      <FrequentlyAskedQuestions />
    </div>
  );
}
