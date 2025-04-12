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
            <Col lg={5} xl={5} xxl={5} xs={24} sm={24} md={12} className=" footer__logo">
              <img src={img.logo_dark} alt="موطن" className="footer__logo-img" />
              <p>{t("company")}</p>
              <div className="mt-4 social_title">
                <strong>{t("follow_us")}</strong>
              </div>

              <div className="footer__social">
                <a href="#"><XOutlined /></a>
                <a href="#"><FacebookFilled /></a>
                <a href="#"><InstagramFilled /></a>
                <a href="#"><LinkedinFilled /></a>
              </div>
            </Col>

            <Col lg={3} xs={24} sm={12} md={8} className="mt-5">
              <Title level={4}>{t("quick_links")}</Title>
              <div className="app_link">
                <Link to="/">{t("home")}</Link>
                <Link to="/investors">{t("investors")}</Link>
                <Link to="/services">{t("services")}</Link>
                <Link to="/projects">{t("projects")}</Link>
                <Link to="/privacy-policy">{t("privacy_policy")}</Link>
                <Link to="/terms">{t("terms_conditions")}</Link>
              </div>
            </Col>

            <Col lg={3} xs={24} sm={12} md={8} className="mt-5 ">
              <Title level={4}>{t("about_company")}</Title>
              <div className="app_link">
                <Link to="/about">{t("about_company")}</Link>
                <Link to="/about/history">{t("company_history")}</Link>
                <Link to="/about/board">{t("board_of_directors")}</Link>
                <Link to="/executive">{t("executive_management")}</Link>
              </div>
            </Col>

            <Col lg={4} xs={24} sm={12} md={8} className="mt-5">
              <Title level={4}>{t("projects")}</Title>
              <div className="app_link">
                <Link to="/residential">{t("residential_sector")}</Link>
                <Link to="/industrial">{t("industrial_sector")}</Link>
                <Link to="/board">{t("board_of_directors")}</Link>
                <Link to="/care">{t("care_sector")}</Link>
              </div>
            </Col>

            <Col lg={4} xs={24} sm={12} md={8} className="mt-5">
              <Title level={4}>{t("news")}</Title>
              <div className="app_link">
                <Link to="/news">{t("news")}</Link>
                <Link to="/gallery">{t("gallery")}</Link>
                <Link to="/videos">{t("videos")}</Link>
                <Link to="/interactive-visits">{t("interactive_visits")}</Link>
              </div>
            </Col>

            <Col lg={5} xs={24} sm={12} md={8} className="mt-5">
              <Title level={4}>{t("contact_us")}</Title>
              <div className="app_link gap-1">

                <p><PhoneOutlined /> {t("phone")}</p>
                <p className="flex flex-row gap-2 align-items-center "><MailOutlined /> <a href="mailto:Info@mawten.com.sa" target="_blank" className="mt-2" >{t("email")}</a></p>
                <p className="mt-2 "><EnvironmentOutlined /> {t("address_footer")}</p>
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
