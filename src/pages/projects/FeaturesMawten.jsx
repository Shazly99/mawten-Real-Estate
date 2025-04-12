import TitleH from "@components/common/TitleH";
import { Col, Row } from "antd";
import { useTranslation } from "react-i18next";
import "./FeaturesSection.scss"; // Import SCSS styles

const FeaturesMawten = () => {
    let { t } = useTranslation()
    const features = [
        {
            id: "01",
            title: "موقع فريد",
            description:
                "تتميز شركة موطن بمكانتها الفريدة والاستثنائية في قلب العاصمة، وتواجدها في أكثر المدن دينًا ورواجًا في العالم. بالإضافة إلى كونها الأضخم داخل أكبر مدينة في المملكة وتقديم بنية تحتية أكثر من متينة، مع التوسع الحيوي المتزايد في جميع أنحاء المدينة.",
            highlight: true,
        },
        {
            id: "02",
            title: "خدمات مجتمعية رائدة",
            description:
                "تتميز شركة موطن بمكانتها الفريدة والاستثنائية، فهي قلب العاصمة، وتواجدها في أكثر المدن دينًا ورواجًا في العالم. بالإضافة إلى كونها الأضخم داخل أكبر مدينة في المملكة وتقديم بنية تحتية أكثر من متينة، مع التوسع الحيوي المتزايد في جميع أنحاء المدينة.",
            highlight: false,
        },
    ];

    return (
        <div className="app_features">
            <div className="features-section">
                {/* Header Section */}

                <TitleH title={t('features')} highlight={t('mawten')} />

                {/* Features List */}
                <div className="features-list">
                    {features.map((feature, index) => (
                        <Row gutter={[80, 80]} key={feature.id} className={`${index % 2==0 ?'feature-item feature_item_left':'feature-item feature_item_right'}`}>
                            {/* Background Number */}
                            <Col xl={4} xs={24} className="flex justify-content-center align-item-center" >
                                <span className={`feature-number ${feature.highlight ? "bold" : " "}`}>{feature.id}</span>
                            </Col>

                            {/* Feature Content */}
                            <Col xl={20} xs={24} className="red"  >
                                <div className="feature-content ">
                                    <h3 className={`feature-title ${feature.highlight ? "bold" : " "}`}>
                                        {feature.title}
                                    </h3>
                                    <p className={`feature-description ${feature.highlight ? "bold" : " "}`}>
                                        {feature.description}
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    ))}
                </div>
                <div className="mt-5">
                    <hr />
                </div>
                {/* <StatisticsSection /> */}


            </div>

        </div>
    );
};

export default FeaturesMawten;
