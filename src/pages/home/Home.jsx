import React from "react";
import Header from "../../components/header/Header";
import HeroSection from "../../components/heroSection/HeroSection";
import AsFeaturedIn from "../../components/AsFeaturedIn/AsFeaturedIn";
import QuoteCard from "../../components/QuoteCard/QuoteCard";
import LifeDiscoverySection from "../../components/LifeDiscoverySection/LifeDiscoverySection";


const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection/>
      <AsFeaturedIn/>
      <QuoteCard/>
      <LifeDiscoverySection/>
    </div>
  );
};

export default Home;
