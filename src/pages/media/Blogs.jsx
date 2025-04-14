import { useEffect, useState } from 'react';
import TitleH from '@components/common/TitleH';
import Icon from '@constants/icon';
import img from '@constants/img';
import { Button, Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './blogs.scss';

const Blogs = () => {
    const { t } = useTranslation();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get(`https://mawtan.rightclicksa.com/api/home/blogs`)
            .then(res => {
                if (res.data?.data?.clients) {
                    setBlogs(res.data.data.clients);
                }
            })
            .catch(err => {
                console.error('Error fetching blogs:', err);
            });
    }, []);

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
                    {blogs.map((blog) => (
                        <Col key={blog.id} xs={24} sm={12} md={12} lg={12} xl={12} xxl={8} className='h_services mt-5'>
                            <div className="blog-card shadow-2 pb-4 ">
                                <div className="card-header">
                                    <div className="card_blog_image">
                                        <img src={blog.image} alt={`Image ${blog.id}`} />
                                        <div className="overlay">
                                            <Button shape='round' iconPosition='end' icon={<Icon.DATE />} type='primary'>
                                                {new Date(blog.date).toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })}
                                            </Button>
                                            <Icon.blog />
                                        </div>
                                    </div>

                                    <div className="card-info">
                                        <h3 className="title">{blog.short_title}</h3>
                                        <p className="description">{blog.short_description}</p>
                                    </div>
                                </div>
                                <Link to={`/media-center/${blog.key_word_ar}`} className='btn mx-2'>
                                    <Button type="primary" shape='round' className="read-more-btn">
                                        {t('more')}
                                    </Button>
                                </Link>
                            </div>
                        </Col>
                    ))}
                </Row>
            </main>
        </div>
    );
};

export default Blogs;
