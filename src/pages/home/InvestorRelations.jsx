import React from "react";
import { Button, Col, Row } from "antd";
import Icon from "@constants/icon";
import TitleH from "@components/common/TitleH";
import CustomButton from "@components/common/CustomButton";
const InvestorRelations = () => {
  return (
    <div className="investor-relations mt_main">
      <Row gutter={[50, 50]} className="content-container">
        <Col xl={12} md={12} className="decorative-section">
          <Icon.InvestorRelations />
        </Col>
        <Col xl={10} md={10} offset={2} className="text-section">

          <TitleH title={'علاقات '} highlight={'المستثمرين'} />
          <p className="description">
            تطلع تحقيق الاستدامة المالية والاستفادة من التوازن بين مساهمة قطاع
            العقار والقطاعات الأخرى وتعظيم المراكز التجارية، كما تسعى لتقديم
            العائد الأمثل للمستثمرين من خلال المكاسب الرأسمالية.
          </p>
          <CustomButton title={'الملف التعريفي '} />
        </Col>
        <Col xl={1} md={1} offset={1} className="text-section"></Col>

      </Row>
    </div>
  );
};

export default InvestorRelations;
