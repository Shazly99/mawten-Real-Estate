import CustomButton from '@components/common/CustomButton';
import TitleH from '@components/common/TitleH';
import Icon from '@constants/icon';
import img from '@constants/img';
import { Button, Col, Row } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const tabItems = [
    { key: '1', label: 'القطاع السكني', title: 'القطاع السكني ومتعدد الاستخدام', description: 'مشروع فريد بموقعه في مكة مكرمة ملاصق لوجهة مسار ويبعد عن الحرم المكي الشريف قرابة 3600 متر، تطوره شركة موطن العقارية كبرج سكني بارتفاع 27 طابق على مساحة تبلغ 6,580 متر مربع وبمسطحات بناء حوالي 114 ألف متر مربع في منطقة الرصيفة بمكة المكرمة بإطلالة كاملة على الدائري الثالث وبجوار محطة قطار الحرمين ليشكل معلماً بارزاً للقادمين من مدينة جدة. ', investment: '2 مليار', projectsCount: '6', image1: img.Projects1, image2: img.Projects2 },
    { key: '2', label: 'القطاع الصناعي واللوجستي', title: 'القطاع الصناعي واللوجستي', description: 'مشروع متميز داخل المدينة الصناعية بجدة...', investment: '3.5 مليار', projectsCount: '8', image1: img.Projects3, image2: img.Projects1 },
    { key: '3', label: 'قطاع الضيافة', title: 'قطاع الضيافة', description: 'مشروع سياحي ضخم يضم فندق 5 نجوم ومنتجعات...', investment: '1.8 مليار', projectsCount: '4', image1: img.Projects2, image2: img.Projects3 },
    { key: '4', label: 'القطاع التجاري', title: 'القطاع التجاري', description: 'مجمع تجاري يحتوي على مكاتب ومحلات ومطاعم فاخرة...', investment: '5 مليار', projectsCount: '10', image1: img.Projects3, image2: img.Projects1 },
];

const ProjectsDep = () => {
    const [activeTab, setActiveTab] = useState('1');

    return (
        <div className="projects-container">

            <TitleH title={'أقسام'} highlight={'المشاريع'} />
            <div className="flex justify-content-center align-items-center">

                {/* أزرار مغلقة للتبديل بين الأقسام */}
                <div className="custom-tab-buttons">
                    {tabItems.map(tab => (
                        <Button
                            key={tab.key}
                            className={`tab-button ${activeTab === tab.key ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.key)}
                            shape='round'
                        >
                            {tab.label}
                        </Button>
                    ))}
                </div>
            </div>

            {tabItems.map(tab => (
                activeTab === tab.key && (
                    <ProjectDetails
                        key={tab.key}
                        title={tab.title}
                        description={tab.description}
                        investment={tab.investment}
                        projectsCount={tab.projectsCount}
                        image1={tab.image1}
                        image2={tab.image2}
                    />
                )
            ))}
        </div>
    );
};

// ✅ مكون يعرض تفاصيل كل قطاع
const ProjectDetails = ({ title, description, investment, projectsCount, image1, image2 }) => {
    let { t } = useTranslation()
    return (
        <Row gutter={[32, 32]} className="project-details mt-8 "  >
            <Col xs={24} lg={11} >
                <div className="project-info" >
                    <h3 className="project-title">{title}</h3>
                    <p className="project-description">{description}</p>
                    <Row gutter={[16, 16]} className="project-stats mt-5">
                        <Col span={12}>
                            <div className="stat-item flex gap-4">
                                <Icon.projects />
                                <div className="flex flex-column align-items-center gap-2">
                                    <span className="stat-label">المشاريع</span>
                                    <span className="stat-value">{projectsCount}</span>
                                </div>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="stat-item flex gap-4">
                                <Icon.investment />
                                <div className="flex flex-column align-items-center gap-2">
                                    <span className="stat-label">الاستثمارات</span>
                                    <span className="stat-value">{investment}</span>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </div>

            </Col>

            <Col xs={24} lg={13} className="project-images">
                <div className="image-wrapper">
                    <div className="btn_image relative">
                        <Link to={'/projects/sector/1'} className="discover-button ">
                            <CustomButton title={t('more')} />
                        </Link>

                        <img src={image1} alt="Project 1" className="main-image" />
                    </div>
                    <img src={image2} alt="Project 2" className="secondary-image" />
                </div>
            </Col>
        </Row>
    );
};

export default ProjectsDep;
