import React from 'react';
import { Button, Col, Row } from 'antd';
import './blogs.scss';
import img from '@constants/img';
import TitleH from '@components/common/TitleH';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Blogs = () => {
    let { t } = useTranslation()
    return (
        <div className="app_media blogs-container">
            <header className="mt-8 pt-2">
                <img src={img.blogsCover} alt="Cover" className="cover-img" />
                <div className="content">
                    <TitleH title={t('Center')} highlight={t('Media')} />
                </div>
            </header>

            <main className="blogs-main">
                <Row gutter={[30, 30]} className="h-full mt-8">
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={8} className='h_services mt-5'>
                        <div className="blog-card">
                            <div className="card-header">
                                <img src={img.blog4} alt="Image 1" />
                                <div className="card-info">
                                    <h3 className="title">عقدت جمعية تانامي ملتقى "استشراف المستقبل" في القطاع غير الربحي</h3>
                                    <p className="description">
                                        عقدت جمعية تانامي ملتقى "استشراف المستقبل" في القطاع غير الربحي حيث تم استعراض آفاق وتحديات واستشرافات متكاملة لتعزيز دور القطاع غير الربحي في المجتمع.
                                    </p>
                                </div>
                            </div>
                            <Link to={'/media-center/5'} className='btn mx-2' >
                                <Button type="primary" shape='round' className="read-more-btn">  {t('more')} </Button>
                            </Link>
                        </div>
                    </Col>

                    <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={8} className='h_services mt-5'>
                        <div className="blog-card">
                            <div className="card-header">
                                <img src={img.blog5} alt="Image 1" />
                                <div className="card-info">
                                    <h3 className="title">عقدت جمعية تانامي ملتقى "استشراف المستقبل" في القطاع غير الربحي</h3>
                                    <p className="description">
                                        عقدت جمعية تانامي ملتقى "استشراف المستقبل" في القطاع غير الربحي حيث تم استعراض آفاق وتحديات واستشرافات متكاملة لتعزيز دور القطاع غير الربحي في المجتمع.
                                    </p>
                                </div>
                            </div>
                            <Link to={'/media-center/5'} className='btn mx-2' >
                                <Button type="primary" shape='round' className="read-more-btn">   {t('more')} </Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </main>
        </div>
    );
};

export default Blogs;
