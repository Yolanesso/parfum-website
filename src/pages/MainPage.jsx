import React from 'react';
import Header from '../components/Header';
import AdvertisingBlock from '../components/AdvertisingBlock';
import CompaniesList from '../components/СompaniesList';
import FragrancesCard from '../components/FragrancesCard';

export default function MainPage() {
  return (
    <>
      <AdvertisingBlock />
      <Header />
      <CompaniesList />
      <FragrancesCard />
    </>
  );
}
