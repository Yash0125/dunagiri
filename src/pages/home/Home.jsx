import React from "react";
import Header from "../../components/header/Header";
import HeroSection from "../../components/heroSection/HeroSection";
import AsFeaturedIn from "../../components/AsFeaturedIn/AsFeaturedIn";
import QuoteCard from "../../components/QuoteCard/QuoteCard";
import LifeDiscoverySection from "../../components/LifeDiscoverySection/LifeDiscoverySection";
import StatisticsSection from "../../components/StatisticsSection/StatisticsSection";
import RetreatProgram from "../../components/RetreatProgram/RetreatProgram";
import BabajiCaveDetails from "../../components/BabajiCaveDetails/BabajiCaveDetails";


const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection/>
      <AsFeaturedIn/>
      <QuoteCard/>
      <LifeDiscoverySection/>
      <StatisticsSection/>
      <RetreatProgram/>
      <BabajiCaveDetails/>
    </div>
  );
};

export default Home;
