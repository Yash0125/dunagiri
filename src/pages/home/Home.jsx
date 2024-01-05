import React from "react";
import Header from "../../components/header/Header";
import HeroSection from "../../components/heroSection/HeroSection";
import AsFeaturedIn from "../../components/AsFeaturedIn/AsFeaturedIn";
import QuoteCard from "../../components/QuoteCard/QuoteCard";


const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection/>
      <AsFeaturedIn/>
      <QuoteCard/>
    </div>
  );
};

export default Home;
