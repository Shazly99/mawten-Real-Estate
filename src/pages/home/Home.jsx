import { useEffect, useState } from "react";
import GalleryTitle from "./GalleryTitle";
import "./home.scss";
import HomeMediaCenter from "./HomeMediaCenter";
import HomeProjects from "./HomeProjects";
import ImportantProject from "./ImportantProject";
import NumberCompany from "./NumberCompany";
import SliderHome from "./SliderHome";
import TitleSection from "./TitleSection";
import axios from "axios";

const Home = () => {
  const [tabItems, setTabItems] = useState([]);
  const [data, setData] = useState([]);
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    axios.get(`https://mawtan.rightclicksa.com/api/home`)
      .then(response => {
        const sectors = response.data?.data?.sectors?.data || [];
        const projects = response.data?.data?.projects?.data || [];
        const blogs = response.data?.data?.blogs?.data || [];
        setData(projects) 
        setTabItems(sectors);
        setBlog(blogs);

      })
      .catch(err => {
        console.error('فشل جلب بيانات القطاعات:', err);
      });
  }, []);

  return (
    <>
      <SliderHome />
      <TitleSection />
      <GalleryTitle data={data} />
      {/* <CompanyOverview /> */}
      <NumberCompany />
      <ImportantProject data={data}  />
      <HomeProjects data={tabItems} />
      {/* <InvestorRelations /> */}
      <HomeMediaCenter blog={blog} />
    </>

  );
};

export default Home;
