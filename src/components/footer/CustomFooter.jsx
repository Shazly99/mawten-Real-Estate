import React from "react";
import { Typography, Row, Col } from "antd";
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, TwitterOutlined, FacebookFilled, InstagramFilled, LinkedinFilled, XOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./footer.scss";
import img from "@constants/img";
import HomeContactUs from "@pages/home/HomeContactUs";

const { Title, Paragraph } = Typography;

const Footer = () => {
  const { t } = useTranslation(); // استخدام الترجمة
  let location = useLocation()
  return (
    <>
      <div className="mt_main ">
        {
          (location.pathname == '/' || location.pathname.includes('projects')) &&
          <HomeContactUs />
        }
      </div>

      <footer className="footer">
        <div className="container">
          <Row gutter={[32, 32]}>
            <Col lg={6} xl={6} xxl={6} xs={24} sm={24} md={12} className=" footer__logo">
              <img src={img.logo_dark} alt="موطن" className="footer__logo-img" />
              <Title level={5}>{t("company")}</Title>
              <Title level={5} className="mb-4">{t("location")}</Title>

            </Col>


            <Col lg={5} xs={24} sm={12} md={8}   className="mt-5">
              <div className="app_link  ">
                <Link to="/"> <Title level={5}>{t("home")}</Title> </Link>
                <Link to="/about"> <Title level={5}>{t("about_company")}</Title> </Link>
                <Link to="/projects"> <Title level={5}>{t("project")}</Title> </Link>
                <Link to="/about"> <Title level={5}>{t("investors")}</Title> </Link>
                <Link to="/about"> <Title level={5}>{t("التوظيف")}</Title> </Link>
              </div>
            </Col>

            <Col lg={5} xs={24} sm={12} md={8}   className="mt-5">
              <div className="app_link  ">
                <Link to="/"> <Title level={5}>{t("الاخبار")}</Title> </Link>
                <Link to="/blogs"> <Title level={5}>{t("المدونة")}</Title> </Link>
                <Link to="/projects"> <Title level={5}>{t("nav_contact")}</Title> </Link>
                <Link to="/"> <Title level={5}>{t("سياسة الخصوصية")}</Title> </Link>
                <Link to="/"> <Title level={5}>{t("الشروط والاحكام")}</Title> </Link>
              </div>
            </Col>
            <Col lg={2}  className="mt-5"></Col>
            <Col lg={6} xs={24} sm={12} md={8}  className="mt-5">
              <div className="app_link gap-0"> 
                <strong  className="flex gap-1" ><PhoneOutlined /> <a dir="ltr" className="mt-1" href="tel:+966920000598">{t("phone")}</a></strong>
                <strong className=" mail flex flex-row gap-2 align-items-center "><MailOutlined />  <a href="mailto:Info@mawten.com.sa" target="_blank" className="mt-2" >{t("email")}</a></strong>

                <span className="mt-3" >الموقع تحت الإطلاق التجريبي</span>
                <div className="mt-5 social_title">
                  <strong>{t("follow_us")}</strong>
                </div>

                <div className="footer__social mt-2">
                  <a href="#"><XOutlined /></a>
                  <a href="#"><FacebookFilled /></a>
                  <a href="#"><InstagramFilled /></a>
                  <a href="#"><LinkedinFilled /></a>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="footer__bottom">
          <Paragraph>{t("copyright")}</Paragraph>
        </div>
      </footer>
    </>
  );
};

export default Footer;
