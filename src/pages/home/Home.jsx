import React from "react";
import CompanyOverview from "./CompanyOverview";
import GalleryTitle from "./GalleryTitle";
import "./home.scss";
import HomeMediaCenter from "./HomeMediaCenter";
import HomeProjects from "./HomeProjects";
import ImportantProject from "./ImportantProject";
import InvestorRelations from "./InvestorRelations";
import NumberCompany from "./NumberCompany";
import SliderHome from "./SliderHome";
import TitleSection from "./TitleSection";
import HomeContactUs from "./HomeContactUs";

const Home = () => {
 

  return (
    <>
      <SliderHome />
      <TitleSection />
      <GalleryTitle />
      {/* <CompanyOverview /> */}
      <NumberCompany />
      <ImportantProject />
      <HomeProjects />
      {/* <InvestorRelations /> */}
      <HomeMediaCenter /> 
    </>

  );
};

export default Home;
