import React from "react";
import { Typography, Row, Col } from "antd";
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, TwitterOutlined, FacebookFilled, InstagramFilled, LinkedinFilled, XOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./footer.scss";
import img from "@constants/img";
import HomeContactUs from "@pages/home/HomeContactUs";

const { Title, Paragraph } = Typography;

const Footer = () => {
  return (
    <>
      <div className="mt_main ">
        <HomeContactUs />
      </div>

      <footer className="footer">
        <div className="container">
          <Row gutter={[32, 32]}>
            {/* العمود: عن الشركة */}
            <Col lg={5} xl={5} xxl={5} xs={24} sm={24} md={12} className=" footer__logo">
              <img src={img.logo_dark} alt="موطن" className="footer__logo-img" />
              <p>
                شركة موطن العقارية شركة مساهمة مغلقة، برأس مال مدفوع 1.9 مليار ريال سعودي
              </p>
              <div className="mt-4 social_title">
                <strong>  تابعنا علي</strong>
              </div>

              <div className="footer__social">
                <a href="#"><XOutlined /></a>
                <a href="#"><FacebookFilled /></a>
                <a href="#"><InstagramFilled /></a>
                <a href="#"><LinkedinFilled /></a>
              </div>
            </Col>

            {/* العمود: روابط سريعة */}
            <Col lg={3} xs={24} sm={12} md={8} className="mt-5">
              <Title level={4}>روابط سريعة</Title>
              <div className="app_link">


                <Link to="/">الرئيسية</Link>
                <Link to="/investors">علاقات المستثمرين</Link>
                <Link to="/services">خدمات الشركة</Link>
                <Link to="/projects">مشاريعنا</Link>
                <Link to="/privacy-policy">سياسة الخصوصية</Link>
                <Link to="/terms">الشروط والأحكام</Link>
              </div>
            </Col>

            {/* العمود: عن الشركة */}
            <Col lg={3} xs={24} sm={12} md={8} className="mt-5 ">
              <Title level={4}>عن الشركة</Title>
              <div className="app_link">
                <Link to="/about">عن موطن</Link>
                <Link to="/about/history">تاريخ الشركة</Link>
                <Link to="/about/board">مجالس الإدارة</Link>
                <Link to="/executive">الإدارة التنفيذية</Link>
              </div>
            </Col>

            {/* العمود: مشاريع الشركة */}
            <Col lg={4} xs={24} sm={12} md={8} className="mt-5">
              <Title level={4}>مشاريع الشركة</Title>
              <div className="app_link">

                <Link to="/residential">القطاع السكني</Link>
                <Link to="/industrial">القطاع الصناعي واللوجستي</Link>
                <Link to="/board">مجالس الإدارة</Link>
                <Link to="/care">قطاع الرعاية</Link>
              </div>
            </Col>
            {/* العمود: المركز الإعلامي */}
            <Col lg={4} xs={24} sm={12} md={8} className="mt-5">
              <Title level={4}>المركز الإعلامي</Title>
              <div className="app_link">
                <Link to="/news">أخبار موطن</Link>
                <Link to="/gallery">معرض الصور</Link>
                <Link to="/videos">معرض الفيديو</Link>
                <Link to="/interactive-visits">الزيارات التفاعلية</Link>
              </div>
            </Col>

            {/* العمود: تواصل معنا */}
            <Col lg={5} xs={24} sm={12} md={8} className="mt-5">
              <Title level={4}>تواصل معنا</Title>
              <p><PhoneOutlined /> 92000598</p>
              <p className="flex flex-row gap-2 align-items-center " ><MailOutlined /> <a href="mailto:Info@mawten.com.sa" target="_blank" className="mt-2" >Info@mawten.com.sa</a></p>
              <p className="mt-2 "><EnvironmentOutlined /> 3758 الطريق الدائري الشمالي - حي الازدهار، الرياض، المملكة العربية السعودية</p>
            </Col>
          </Row>
        </div>

        {/* حقوق النشر */}
        <div className="footer__bottom">
          <Paragraph>© 2025 موطن - جميع الحقوق محفوظة</Paragraph>
        </div>
      </footer>
    </>

  );
};

export default Footer;
