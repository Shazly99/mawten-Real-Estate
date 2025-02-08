import React from "react";
import { Col, Row, Typography } from "antd";
import img from "@constants/img";
import Icon from "@constants/icon";
import { useTranslation } from "react-i18next";

const { Title, Paragraph } = Typography;

const HomeContactUs = ({ language = "ar" }) => {
    let { t, i18n } = useTranslation()
    return (
        <div className={`app_contact_us mb-4 ${language === "en" ? "ltr" : "rtl"}`} dir={language === "en" ? "ltr" : "rtl"}>
            <Row className="home-contact"  >
                <Col xs={24} sm={12} md={8} className="icons_contact-us">
                    <Icon.contactus />
                </Col>

                <Col xs={24} sm={12} md={8} className="content_contact-us">
                    <div className="home-contact__content">
                        <Title level={3} className="home-contact__title">{t('RealEstateDeveloper')} </Title>
                        <Paragraph className="home-contact__subtitle">{t('MultiAsset')}</Paragraph>
                    </div>
                    <div className="home-contact__decoration">
                        {t('mawten')}
                    </div>
                </Col>

                <Col xs={24} md={8} className="content_contact-us"></Col>

                <div className="home-contact__image">
                    <img src={img.contact2} alt={language === "ar" ? "المبنى" : "Building"} />
                </div>
            </Row>
        </div>
    );
};

export default HomeContactUs;
