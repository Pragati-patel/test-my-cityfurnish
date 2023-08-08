"use client";

import React from "react";
import {store} from "@/store";
import {Provider} from "react-redux";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
// import   { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools'

import AnnouncementBar from "@/components/Common/AnnouncementBar";
import Header from "@/components/Common/Header";
import HeroBanner from "@/components/Home/HeroBanner";

import loadable from "@loadable/component";

const RentFurnitureAndAppliances = loadable(() =>
  import("@/components/Home/RentFurnitureAndAppliances"),
);
const RecentlyViewedProduct = loadable(() =>
  import("@/components/Home/RecentlyViewedProduct"),
);
const TrendingProducts = loadable(() =>
  import("@/components/Home/TrendingProducts"),
);
const OffersAndCoupons = loadable(() =>
  import("@/components/Home/OffersAndCoupons"),
);
const NewlyLaunched = loadable(() => import("@/components/Home/NewlyLaunched"));
const DownloadForMobile = loadable(() =>
  import("@/components/Home/DownloadForMobile"),
);
const PreDesignCombos = loadable(() =>
  import("@/components/Home/PredesignCombos"),
);
const HasselFreeServicesCards = loadable(() =>
  import("@/components/Home/HasselFreeServicesCards"),
);
const LimetedPreiodDiscount = loadable(() =>
  import("@/components/Home/LimetedPreiodDiscount"),
);
const RentNowBanner = loadable(() => import("@/components/Home/RentNowBanner"));
const TryCityMax = loadable(() => import("@/components/Home/TryCityMax"));
const MediaCoverage = loadable(() => import("@/components/Home/MediaCoverage"));
const CustomerRating = loadable(() => import("@/components/Home/Rating"));
const HappySubscribers = loadable(() =>
  import("@/components/Home/HappySubscribers"),
);
const FrequentlyAskedQuestions = loadable(() =>
  import("@/components/Common/FrequentlyAskedQuestions"),
);
const Footer = loadable(() => import("@/components/Common/Footer"));
const CombineSection = loadable(() =>
  import("@/components/Home/CombineSection"),
);
const MenuList = loadable(() => import("@/components/Common/MenuList"));

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div className="large_layout">
          <AnnouncementBar />
          <Header />
          <MenuList />
          <HeroBanner />
          <RentFurnitureAndAppliances />
          <RecentlyViewedProduct />
          <TrendingProducts />
          <OffersAndCoupons />
          <NewlyLaunched />
          <DownloadForMobile />
          <PreDesignCombos />
          <HasselFreeServicesCards />
          <LimetedPreiodDiscount />
          <RentNowBanner />
          <TryCityMax />
          <CustomerRating />
          <MediaCoverage />
          <CombineSection />
          <HappySubscribers />
          <FrequentlyAskedQuestions />
          <Footer />
        </div>
      </Provider>
      {/* <ReactQueryDevtoolsPanel initialIsOpen={false} position={"bottom-left"} /> */}
    </QueryClientProvider>
  );
}
