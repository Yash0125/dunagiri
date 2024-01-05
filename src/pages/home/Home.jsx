import React from "react";
import Header from "../../components/header/Header";
import HeroSection from "../../components/heroSection/HeroSection";
import AsFeaturedIn from "../../components/AsFeaturedIn/AsFeaturedIn";
import QuoteCard from "../../components/QuoteCard/QuoteCard";
import LifeDiscoverySection from "../../components/LifeDiscoverySection/LifeDiscoverySection";
import StatisticsSection from "../../components/StatisticsSection/StatisticsSection";


const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection/>
      <AsFeaturedIn/>
      <QuoteCard/>
      <LifeDiscoverySection/>
      <StatisticsSection/>
    </div>
  );
};

export default Home;
