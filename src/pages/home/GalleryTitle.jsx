import React from 'react';
import img from '@constants/img';
import './home.scss'; // استيراد الـ SCSS
import { Col, Row } from 'antd';

const GalleryTitle = () => {
    return (
        <div className="image-gallery">

            <Row gutter={[20, 20]} className="">
                <Col xl={12} md={12} >
                    <img
                        src={img.gallery2}
                        alt="City View"
                        data-aos="fade-right"
                    />
                </Col>
                <Col xl={12} md={12} >
                    <img
                        src={img.gallery1}
                        alt="Skyline"
                        data-aos="fade-left"
                    />
                </Col>
            </Row>
        </div>
    );
};

export default GalleryTitle;
