import { FacebookFilled, InstagramFilled, LinkedinFilled, MailOutlined, PhoneOutlined, XOutlined } from "@ant-design/icons";
import img from "@constants/img";
import HomeContactUs from "@pages/home/HomeContactUs";
import { Col, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import "./footer.scss"; 
const { Paragraph } = Typography;

const Footer = () => {
  const { t } = useTranslation(); 
  let location = useLocation()
  return (
    <>
      {
        (location.pathname == '/' || location.pathname.includes('projects')) &&
        <div className="mt_main ">
          <HomeContactUs />
        </div>
      }

      <footer className="footer">
        <div className="container">
          <Row gutter={[32, 32]}>
            <Col lg={6} xl={6} xxl={6} xs={24} sm={24} md={12} className=" footer__logo">
              <img src={img.logo_dark} alt="موطن" className="footer__logo-img  " />
              <p className=" " >{t("company")}</p>
              <p className="mb-4   ">{t("location")}</p>

            </Col>

            <Col lg={1} className="mt-5"></Col>

            <Col lg={4} xs={24} sm={12} md={8} className="mt-5">
              <div className="app_link  ">
                <Link to="/">  {t("home")} </Link>
                <Link to="/about">  {t("about_company")} </Link>
                <Link to="/projects">  {t("project")} </Link>
                <Link to="/about">  {t("investors")} </Link>
                <Link to="/about">  {t("التوظيف")} </Link>
              </div>
            </Col>

            <Col lg={5} xs={24} sm={12} md={8} className="mt-5">
              <div className="app_link  ">
                <Link to="/media-center">  {t("الاخبار")} </Link>
                <Link to="/media-center">  {t("المدونة")} </Link>
                <Link to="/contact">  {t("nav_contact")} </Link>
                <Link to="/">  {t("سياسة الخصوصية")} </Link>
                <Link to="/">  {t("الشروط والاحكام")} </Link>
              </div>
            </Col>

            <Col lg={6} xs={24} sm={12} md={8} className="mt-5">
              <div className="app_link gap-0">
                <span className="flex gap-1" ><PhoneOutlined /> <a dir="ltr" className="mt-1" href="tel:+966920000598">{t("phone")}</a></span>
                <span className=" mail flex flex-row gap-2 align-items-center "><MailOutlined />  <a href="mailto:Info@mawten.com.sa" target="_blank" className="mt-2" >{t("email")}</a></span>

                <span className="mt-3" >الموقع تحت الإطلاق التجريبي</span>
                <div className="mt-5 social_title">
                  <strong>{t("follow_us")}</strong>
                </div>

                <div className="footer__social mt-2">
                  <a href="https://x.com/Mawtenksa" target="_blank" ><XOutlined /></a>
                  <a href="https://www.instagram.com/mawtenksa/?locale=en_GB%2Cen_GB" target="_blank" ><InstagramFilled /></a>
                  <a href="https://www.linkedin.com/company/mawten-real-estate-co-/?viewAsMember=true" target="_blank" ><LinkedinFilled /></a>
                  <a href="https://www.facebook.com/profile.php?id=100054232670287" target="_blank" ><FacebookFilled /></a>
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
