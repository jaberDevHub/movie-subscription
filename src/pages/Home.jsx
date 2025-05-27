import React from "react";
import Hero from "../components/Hero/Hero";
import Subscription from "../components/Subscription/Subscription";
import useTitle from "../hooks/useTitle";
import Reviews from "../components/Reviews/Reviews";
import FeaturedContent from "../components/Blogs/FeaturedContent";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Hero></Hero>
      <Subscription></Subscription>
      <FeaturedContent></FeaturedContent>
      <Reviews></Reviews>
     
    </div>
  );
};

export default Home;

