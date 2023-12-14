import React from "react";
import Header from "../layout/UserSidebar/SideBar";
import Banner from "../components/HomeComponents/Banner/Banner";
import About from "../components/HomeComponents/About/About";
import BlockChain from "../components/HomeComponents/BlockChain/BlockChain";
import BuildingDev from "../components/HomeComponents/BuildingDev/BuildingDev";
import Benefits from "../components/HomeComponents/Benefits/Benefits";
import Adoption from "../components/HomeComponents/Adoption/Adoption";
import GetStarted from "../components/HomeComponents/GetStarted/GetStarted";
import Footer from "../layout/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <main className="jss6 jss7">
        <Banner />
        <About />
        <BlockChain />
        <BuildingDev />
        <Benefits />
        <Adoption />
        <GetStarted />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
