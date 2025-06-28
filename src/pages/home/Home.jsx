import img from "@constants/img";
import { Modal } from "antd"; // ✅ إضافة الـ Modal
import axios from "axios";
import { useEffect, useState } from "react";
import GalleryTitle from "./GalleryTitle";
import "./home.scss";
import HomeMediaCenter from "./HomeMediaCenter";
import HomeProjects from "./HomeProjects";
import ImportantProject from "./ImportantProject";
import NumberCompany from "./NumberCompany";
import SliderHome from "./SliderHome";
import TitleSection from "./TitleSection";
const Home = () => {
  const [tabItems, setTabItems] = useState([]);
  const [data, setData] = useState([]);
  const [blog, setBlog] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setIsModalVisible(true);

    axios.get(`https://mawtan.rightclicksa.com/api/home`)
      .then(response => {
        const sectors = response.data?.data?.sectors?.data || [];
        const projects = response.data?.data?.projects?.data || [];
        const blogs = response.data?.data?.blogs?.data || [];
        setData(projects);
        setTabItems(sectors);
        setBlog(blogs);
      })
      .catch(err => {
        console.error('فشل جلب بيانات القطاعات:', err);
      });
  }, []);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    const scrollStep = -window.pageYOffset / 50;
    const scrollInterval = setInterval(() => {
      if (window.pageYOffset !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 10);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="header_section_icon">
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        centered
      >
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScX_GoMk05p0EU2ORGhDGlE5D6WHCBZapfHnR19Co7-BMUgCA/viewform" target="_blank" rel="noopener noreferrer"  >
          <img src={img.Ads} alt="" className="w-full h-full" srcset="" />
        </a>
      </Modal>

      <SliderHome />
      <TitleSection />
      <GalleryTitle data={data} />
      <NumberCompany />
      <ImportantProject data={data} />
      <HomeProjects data={tabItems} />
      <HomeMediaCenter blog={blog} />

      {/* <CompanyOverview /> */}
      {/* <InvestorRelations /> */}
    </div>
  );
};

export default Home;
