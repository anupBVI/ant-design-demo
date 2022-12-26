import { Divider } from "antd";
import React from "react";
import Carousal from "../../components/Carousal/Carousal";
import Products from "../../components/Products/Products";
import Services from "../../components/Services/Services";
import Testimonials from "../../components/Testimonials/Testimonials";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Carousal />
      {/* <Divider plain orientation="right">
        Text
      </Divider> */}
      <Services heading={"Our Services"}/>
      <Products  heading={"Featured Products"}/>
      <Testimonials />
    </>
  );
};

export default Home;
