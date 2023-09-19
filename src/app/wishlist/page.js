"use client";

import React from "react";
import {useParams} from "next/navigation";
import AnnouncementBar from "@/components/Common/AnnouncementBar";
import Header from "@/components/Common/Header";
import loadable from "@loadable/component";
import MenuList from "@/components/Common/MenuList";

const Footer = loadable(() => import("@/components/Common/Footer"));
const ProductList = loadable(() =>
  import("@/components/Wishlist/ProductList/ProductList"),
);

export default function Wishlist() {
  const params = useParams();

  return (
    <div className="large_layout">
      <AnnouncementBar />
      <Header />
      <MenuList />
      <ProductList params={params} />
      <Footer />
    </div>
  );
}
