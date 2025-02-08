import img from '@constants/img'
import React from 'react'
import { Row, Col, Button } from "antd";
import CustomButton from '@components/common/CustomButton';
import TitleH from '@components/common/TitleH';

const NumberCompany = () => {
    return (
        <div>
            <img src={img.mawten_bg2} alt="mawten bg" className="w-full" />

            <div className="dnumber-company container_main_85 mt_main">
                <Row gutter={[32, 32]} align="middle" justify="space-between">
                    {/* Right Section */}
                    <Col xs={24} lg={12} className="image-section flex justify-content-center align-items-center">
                        <TitleH title={"موطن "} highlight={"العقارية"} />
                    </Col>
                    {/* Left Section */}
                    <Col xs={24} lg={12} className="text-section">
                        <h2 className="title">
                            الريادة في صناعة الحلول العقارية المبتكرة
                        </h2>
                        <p className="description mb-6">  اكتشف مشاريع موطن العقارية النوعية، حيث العقارات السكنية، والتجارية، والصناعية واللوجستية، والضيافة التي تنفرد بنوعيتها وموقعها الاستراتيجية وجودتها العالية في التصميم والتنفيذ لتلبى احتياجات وتطلعات العملاء المستهدفين وتثري السوق العقارية في المملكة العربية السعودية.                        </p>
                        <CustomButton />
                    </Col>
                </Row>
            </div>

            {/* Statistics Section */}
            <div className="statistics-section">
                <Row gutter={[32, 32]} justify="center">
                    <Col xs={24} sm={12} md={6} className="stat-item">
                        <h3 >+5 مليار  </h3>
                        <p>قيمة الاستثمارات</p>
                    </Col>
                    <Col xs={24} sm={12} md={6} className="stat-item">
                        <h3  >+ 3,600  </h3>
                        <p>وحدة عقارية</p>
                    </Col>
                    <Col xs={24} sm={12} md={6} className="stat-item">
                        <h3>+10 مليون </h3>
                        <p>م² مساحات مطورة</p>
                    </Col>
                    <Col xs={24} sm={12} md={6} className="stat-item">
                        <h3> + 1,100</h3>
                        <p>وحدة فندقية</p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default NumberCompany
