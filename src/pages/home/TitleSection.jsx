import React from 'react'
import TitleH from "@components/common/TitleH";
import Icon from '@constants/icon';
import { Col, Row } from "antd";
import TitleScrion from "./TitleSection";
const TitleSection = () => {
    return (
        <div className="home-container bg-gray-100  ">
            {/* Top Section */}
            <Row gutter={[20, 20]} className="top-section flex  justify-content-center align-items-center ">
                <Col xl={13}>
                    <div className="vector mt-3">
                        <Icon.lineTitle />
                    </div>
                </Col>
                <Col xl={11}   >
                    <div className="flex justify-content-start align-items-center">
                        <TitleH title={"موطن "} highlight={"العقارية"} className="text-4xl font-bold text-gray-900" />
                    </div>
                </Col>
            </Row>
            <div className="title_container">
                <Row gutter={[20, 20]} className="top-section flex  justify-content-center align-items-center ">
                    <Col xl={10}>
                        {/* Content Section */}
                        <div className="content  mt-4">
                            <h2 className="title  font-bold " data-aos="fade-up">
                                الريادة في صناعة الحلول العقارية المبتكرة
                            </h2>
                        </div>

                    </Col>
                    <Col xl={11} offset={2}  >
                        {/* Description */}
                        <p>
                            تعد شركة موطن العقارية أحد شركات التطوير العقاري الرائدة في المنطقة، حيث أُسست بمبادرة من غرفة التجارة
                            والصناعة بالرياض في العام 2007 كشركة مساهمة مغلقة برأس مال مدفوع يبلغ 1.1 مليار ريال سعودي عن نخبة من
                            المستثمرين والأسماء العقارية المرموقة.
                        </p>

                    </Col>
                </Row>
            </div>
        </div>)
}

export default TitleSection