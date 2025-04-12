import CustomButton from '@components/common/CustomButton';
import TitleH from '@components/common/TitleH';
import Icon from '@constants/icon';
import img from '@constants/img';
import { Button, Col, Row } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ProjectsDep = () => {
    const [activeTab, setActiveTab] = useState('1');
    const [tabItems, setTabItems] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        axios.get(`https://mawtan.rightclicksa.com/api/home`)
            .then(response => {
                const sectors = response.data?.data?.sectors?.data || [];

                const formatted = sectors.map((sector, index) => ({
                    key: String(sector.id),
                    label: sector.title?.trim() || `قطاع ${index + 1}`,
                    title: sector.title?.trim() || '',
                    description: sector.description?.trim() || '',
                    investment: sector.investments ? `${sector.investments} مليون` : 'غير متوفر',
                    projectsCount: sector.projects?.length?.toString() || '0',
                    image1: img.Projects1, // يمكن تخصيص الصورة لاحقاً حسب البيانات
                    image2: img.Projects2,
                }));

                setTabItems(formatted);
            })
            .catch(err => {
                console.error('فشل جلب بيانات القطاعات:', err);
            });
    }, []);

    return (
        <div className="projects-container">
            <TitleH title={'أقسام'} highlight={'المشاريع'} />
            <div className="flex justify-content-center align-items-center">
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
                        sectorId={tab.key}
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
const ProjectDetails = ({ title, description, investment, projectsCount, image1, image2, sectorId }) => {
    const { t } = useTranslation();
    return (
        <Row gutter={[32, 32]} className="project-details mt-8">
            <Col xs={24} lg={11}>
                <div className="project-info">
                    <h3 className="project-title">{title}</h3>
                    <p className="project-description">{description}</p>
                    <Row gutter={[16, 16]} className="project-stats mt-5">
             {/*            <Col span={12}>
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
                        </Col> */}
                    </Row>
                </div>
            </Col>

            <Col xs={24} lg={13} className="project-images">
                <div className="image-wrapper">
                    <div className="btn_image relative">
                        <Link to={`/projects/sector/${sectorId}`} className="discover-button">
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
