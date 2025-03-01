import React from "react";
import { Row, Col } from "antd";
import { BankOutlined, HomeOutlined, BuildOutlined, ShopOutlined } from "@ant-design/icons";
import "./StatisticsSection.scss"; // Import SCSS styles
import Icon from "@constants/icon";
import TitleH from "@components/common/TitleH";
import { useTranslation } from "react-i18next";

const statistics = [
    {
        id: 1,
        icon: <Icon.investment />,
        number: "5+ مليار",
        label: "قيمة الاستثمارات",
    },
    {
        id: 2,
        icon: <Icon.projects />,
        number: "3,600+",
        label: "وحدة عقارية",
    },
    {
        id: 3,
        icon: <Icon.space />,
        number: "10 مليون+",
        label: "م² مساحات مطورة",
    },
    {
        id: 4,
        icon: <Icon.HotelUnit />,
        number: "1,100+",
        label: "وحدة فندقية",
    },
];

const StatisticsSection = () => {
    let { t } = useTranslation()

    return (
        <div className="statistics_section mb-8 pb-8">

            <TitleH title={t('Numbers')} highlight={t('mawten')} />
            {/* Statistics Grid */}
            <Row gutter={[32, 32]} justify="center" className="statistics-grid mt-8">
                {statistics.map((stat, index) => (
                    <Col key={stat.id} xs={24} sm={12} md={6} className="stat-item">
                        <h3 className="stat-number">{stat.number}</h3>
                        <div className="icon">
                            {stat.icon}
                        </div>
                        <span className="stat-label">{stat.label}</span>
                        {index != 0 && statistics.length + 1 && <div className="vertical-line"></div>}
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default StatisticsSection;
