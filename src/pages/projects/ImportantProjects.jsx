import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import CustomTitle from '@components/common/CustomTitle';
import img from '@constants/img'; // استبدل بالمسار الفعلي للصور
import { Button, Carousel, Col, Row } from 'antd';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

const projects = [
    {
        image: img.Projects1,
        title: "هيلتون جاردن ان الرياض المركز المالي",
    },
    {
        image: img.Projects2,
        title: "هيلتون جاردن ان الرياض المركز المالي",
    },
    {
        image: img.Projects3,
        title: "هيلتون جاردن ان الرياض المركز المالي",
    },
    {
        image: img.Projects1,
        title: "هيلتون جاردن ان الرياض المركز المالي",
    },
    {
        image: img.Projects2,
        title: "هيلتون جاردن ان الرياض المركز المالي",
    },
    {
        image: img.Projects3,
        title: "هيلتون جاردن ان الرياض المركز المالي",
    },
    {
        image: img.Projects1,
        title: "هيلتون جاردن ان الرياض المركز المالي",
    },
    {
        image: img.Projects2,
        title: "هيلتون جاردن ان الرياض المركز المالي",
    },
    {
        image: img.Projects3,
        title: "هيلتون جاردن ان الرياض المركز المالي",
    },
];

const ImportantProjects = () => {
    const carouselRef = useRef(null);
    let { t } = useTranslation()

    const goToNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };

    const goToPrev = () => {
        if (carouselRef.current) {
            carouselRef.current.prev();
        }
    };

    return (
        <div className="important-projects-container">
            <header className="projects-header">
                <CustomTitle title={t('Major')} title2={t('project')} />
                <div className="carousel-arrows">
                    <Button
                        size='large'
                        className="prev-arrow"
                        icon={<LeftOutlined />}
                        onClick={goToPrev}
                    />
                    <Button
                        size='large'
                        className="next-arrow"
                        icon={<RightOutlined />}
                        onClick={goToNext}
                    />

                </div>
            </header>

            <Carousel
                ref={carouselRef}
                dots={false}
                autoplay={true}
                infinite={true}
                slidesToShow={2.5}
                slidesToScroll={1}
                responsive={[
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true,
                        },
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                ]}
                className="custom-carousel"
            >
                {projects?.map((item, index) => (
                    <div className="project_card" key={index}>
                        <div className="card">
                            <Row gutter={[16, 16]} className="project-title">
                                <Col span={6}  xs={3} className="flex justify-content-end align-items-center">
                                    <svg
                                        width="30"
                                        height="30"
                                        viewBox="0 0 44 44"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="15.3714"
                                            cy="15.3714"
                                            r="15.1214"
                                            transform="matrix(-0.707107 0.707107 0.707107 0.707107 21.7383 0)"
                                            fill="#A61517"
                                            stroke="#878787"
                                            strokeWidth="0.5"
                                        />
                                        <path
                                            d="M15.2242 21.8591C14.8728 21.5076 14.8728 20.9377 15.2242 20.5863L20.9518 14.8587C21.3033 14.5072 21.8731 14.5072 22.2246 14.8587C22.5761 15.2102 22.5761 15.78 22.2246 16.1315L17.1334 21.2227L22.2246 26.3138C22.5761 26.6653 22.5761 27.2351 22.2246 27.5866C21.8731 27.9381 21.3033 27.9381 20.9518 27.5866L15.2242 21.8591ZM27.6152 22.1227L15.8606 22.1227L15.8606 20.3227L27.6152 20.3227L27.6152 22.1227Z"
                                            fill="white"
                                        />
                                    </svg>
                                </Col>
                                <Col span={9} xs={12}>
                                    <h3>{item.title}</h3>
                                </Col>
                                <Col span={7} xs={7} className="flex justify-content-end align-items-center">
                                    <span>(القطاع التجاري)</span>
                                </Col>
                            </Row>
                            <img src={item.image} alt={item.title} className="project-image" />
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default ImportantProjects;
