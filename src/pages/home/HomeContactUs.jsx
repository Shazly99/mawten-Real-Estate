import { Col, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";

const { Title } = Typography;

const HomeContactUs = ({ language = "ar" }) => {
    let { t } = useTranslation()
    return (
        <div className={`app_contact_us ${language === "en" ? "ltr" : "rtl"}`} dir={language === "en" ? "ltr" : "rtl"}>
            <Row className="home-contact"  >
                <Col xs={24} sm={12} md={6} className="icons_contact-us  "></Col>

                <Col xs={24} sm={12} md={8} className="content_contact-us">
                    <div className="home-contact__content">
                        <Title level={3} className="home-contact__title">{t('RealEstateDeveloper')} </Title>
                    </div>
                    <div className="home-contact__decoration">
                        {t('mawten')}
                    </div>
                </Col>

                <Col xs={24} md={8} className="content_contact-us"></Col> 

            </Row>
        </div>
    );
};

export default HomeContactUs;
