import React from 'react';
import { Carousel, Col, Row } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import img from '@constants/img'; // تأكد من استبدال مسار الصور حسب مشروعك
import TitleH from '@components/common/TitleH';
import { useTranslation } from 'react-i18next';

const projects = [
    {
        image: img.Projects1,
        title: "برج موطن تاورز الرياض",
        category: "(القطاع السكني)"
    },
    {
        image: img.Projects2,
        title: "هيلتون جاردن ان الرياض المركز المالي",
        category: "(القطاع التجاري)"
    },
    {
        image: img.ProjectsSlider,
        title: "مجمع توق الدار السكني",
        category: "(القطاع السكني)"
    }
];

const OurProjects = () => {
    let { t } = useTranslation()
    return (
        <div className="app_projects_carousel">
            <TitleH title={t('projects')} />
            <Carousel
                autoplay
                dots={false}
                slidesToShow={1.5}
                slidesToScroll={1}
                responsive={[
                    {
                        breakpoint: 1024,
                        settings: { slidesToShow: 2, slidesToScroll: 1 }
                    },
                    {
                        breakpoint: 600,
                        settings: { slidesToShow: 1, slidesToScroll: 1 }
                    }
                ]}
            >
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project_card">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="project-info">
                                <Row className=" w-full  ">
                                    <Col xl={12} >
                                        <div className="  flex flex-column justify-content-start align-items-start gap-2">
                                            <span className="sector">{project.category}</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                                <circle cx="15.3714" cy="15.3714" r="15.1214" transform="matrix(-0.707107 0.707107 0.707107 0.707107 21.7384 0)" fill="white" stroke="#171E1C" stroke-width="0.5" />
                                                <path d="M15.2242 21.8591C14.8727 21.5076 14.8727 20.9377 15.2242 20.5863L20.9518 14.8587C21.3032 14.5072 21.8731 14.5072 22.2246 14.8587C22.576 15.2102 22.576 15.78 22.2246 16.1315L17.1334 21.2227L22.2246 26.3138C22.576 26.6653 22.576 27.2351 22.2246 27.5866C21.8731 27.9381 21.3032 27.9381 20.9518 27.5866L15.2242 21.8591ZM27.6152 22.1227L15.8606 22.1227L15.8606 20.3227L27.6152 20.3227L27.6152 22.1227Z" fill="#181818" />
                                            </svg>
                                        </div>
                                    </Col>
                                    <Col xl={12} >
                                        <h3 className="title">{project.title}</h3>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default OurProjects;
