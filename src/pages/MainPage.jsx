import React from "react";
import Header from "../components/Header";
import AdvertisingBlock from "../components/AdvertisingBlock";
import CompaniesList from "../components/СompaniesList";

export default function MainPage() {
  return (
    <>
      <AdvertisingBlock />
      <Header />
      <CompaniesList />
    </>
  );
}
