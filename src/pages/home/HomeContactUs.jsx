import React from "react";
import { Col, Row, Typography } from "antd";
import img from "@constants/img";
import Icon from "@constants/icon";

const { Title, Paragraph } = Typography;

const HomeContactUs = () => {
    return (
        <div className="app_contact_us mb-4">

            <Row className="home-contact">
                <Col span={8} className="icons_contact-us">
                    <Icon.contactus />
                </Col>

                <Col span={8} className="content_contact-us">
                    {/* النصوص */}
                    <div className="home-contact__content">
                        <Title level={3} className="home-contact__title">
                            المطور العقاري الرائد
                        </Title>
                        <Paragraph className="home-contact__subtitle">
                            متعدد الأصول في المملكة
                        </Paragraph>
                    </div>
                    <div className="home-contact__decoration">موطن</div>
                </Col>
                <Col span={8} className="content_contact-us"></Col>


                <div className="home-contact__image">
                    <img src={img.contact2} alt="Building" />
                </div>

                {/* الزخرفة */}

            </Row>
        </div>
    );
};

export default HomeContactUs;
