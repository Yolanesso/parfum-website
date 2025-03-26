import React from 'react';
import Header from '../components/Header';
import AdvertisingBlock from '../components/AdvertisingBlock';
import CompaniesList from '../components/СompaniesList';
import FragrancesCard from '../components/FragrancesCard';
import ProductAdvertising from '../components/ProductAdvertising';
import RunningLine from '../components/RunningLine';

export default function MainPage() {
  return (
    <>
      <AdvertisingBlock />
      <Header />
      <CompaniesList />
      <FragrancesCard />
      <ProductAdvertising />
      <RunningLine />
    </>
  );
}
