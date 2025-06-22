import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import CustomTitle from '@components/common/CustomTitle';
import Icon from '@constants/icon';
import { Button, Carousel, Col, Row } from 'antd';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ImportantProjects = ({ data }) => {
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
                slidesToShow={3.5}
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
                {data?.map((item, index) => (
                    <div className="project_card" key={index}>
                        <div className="card">
                            <div className="card_import_project">
                                <img src={item.image} alt={item.title} className="project-image" />
                                <div className="overlay">
                                    <span>({item.sector})</span>
                                </div>

                            </div>
                            <Row gutter={[16, 16]} className="project-title">
                                <Col span={9} className="flex justify-content-start align-items-start mt-4">
                                    <Link to={`/project/${item.id}`} > 
                                        <Icon.arrowFill />
                                    </Link>
                                </Col>
                                <Col span={15} className='flex justify-content-center flex-column mt-4'>
                                    <h3>{item.title}</h3>
                                    <div className="project_summery"> 
                                        <div className="item flex align-items-center gap-2 w-full mt-2 " dir='rtl' >
                                            {/* <Icon.location2 /> */}
                                            <span >مكة المكرمة</span>
                                        </div>
                                    </div>
                                </Col> 
                            </Row>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default ImportantProjects;
