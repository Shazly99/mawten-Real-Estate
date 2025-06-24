import CustomButton from '@components/common/CustomButton';
import TitleH from '@components/common/TitleH';
import { Col, Row } from "antd";
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer'; // ✅
import { Link } from 'react-router-dom';

const NumberCompany = () => {
    const { t } = useTranslation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 }); // ✅

    return (
        <div>
            {/* <img src={img.mawten_bg2} alt="mawten bg" className="w-full mt-5" /> */}

            <div className="dnumber-company container_main_85 mt_main">
                <Row gutter={[32, 32]} align="middle" justify="space-between">
                    <Col xs={24} lg={12} className="header_section image-section flex justify-content-center align-items-center">
                        <TitleH title={t('Projects')} />
                    </Col>
                    <Col xs={24} lg={12} className="text-section">
                        <h2 className="title">
                            الريادة في صناعة الحلول العقارية المبتكرة
                        </h2>
                        <p className="description mb-6">
                            اكتشف مشاريع موطن العقارية النوعية...
                        </p>
                        <Link to="/projects">
                            <CustomButton />
                        </Link>
                    </Col>
                </Row>
            </div>

            {/* ✅ Animated Statistics Section */}
            <div className="statistics-section" ref={ref}>
                <Row gutter={[32, 32]} justify="center">
                    <Col xs={12} sm={12} md={6} className="stat-item">
                        <h3>
                            {inView ? <CountUp end={10} duration={5} /> : '0'} <span>+ مليار</span>
                        </h3>
                        <p>{t("statistics.investment_value")}</p>
                    </Col>
                    <Col xs={12} sm={12} md={6} className="stat-item">
                        <h3>
                            {inView ? <CountUp end={1.1} decimals={1} duration={5} /> : '0'} <span>+ مليار</span>
                        </h3>
                        <p>{t("statistics.real_estate_units")}</p>
                    </Col>
                    <Col xs={12} sm={12} md={6} className="stat-item">
                        <h3>
                            {inView ? <CountUp end={10} duration={5} /> : '0'} <span>+ مليون</span>
                        </h3>
                        <p>{t("statistics.developed_area")}</p>
                    </Col>
                    <Col xs={12} sm={12} md={6} className="stat-item">
                        <h3>
                            {inView ? <CountUp end={1100} duration={3} separator="," /> : '0'} <span>+</span>
                        </h3>
                        <p>{t("statistics.hotel_units")}</p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default NumberCompany;
