import React from "react";
import "../home/home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import Propertylist from "../../components/propertylist/Propertylist";
import { Featuredproperty } from "../../components/featuredproperty/Featuredproperty";
import Maillist from "../../components/maillist/Maillist";
import Footer from "../../components/footer/Footer";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <Propertylist/>
        <Featuredproperty/>
        <Maillist/>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
