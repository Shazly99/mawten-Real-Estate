import TitleH from '@components/common/TitleH';
// import Icon from '@constants/icon';
import img from '@constants/img';
import { Button, Col, Pagination, Row } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './blogs.scss';

const Blogs = () => {
    const { t } = useTranslation();
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 4;
 

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
    const data = blogs.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    return (
        <div className="app_media blogs-container">
            <header  >
                <img src={img.blogsCover} alt="Cover" className="cover-img" />
                <div className="content">
                    <TitleH title={t('Center')} highlight={t('Media')} />
                </div>
            </header>

            <main className="blogs-main m-0">
                <Row gutter={[30, 30]} className="h-full mt-8">
                    {data.map((blog) => (
                        <Col key={blog.id} xs={24} sm={8} md={8} lg={8} xl={8} xxl={8} className='h_services mt-5'>
                            <div className="blog-card shadow-2 pb-4 ">
                                <div className="card-header">
                                    <div className="card_blog_image">
                                        <img src={blog.image} alt={`Image ${blog.id}`} />
                                        {/*        <div className="overlay">
                                            <Button shape='round' iconPosition='end' icon={<Icon.DATE />} type='primary'>
                                                {new Date(blog.date).toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })}
                                            </Button>
                                            <Icon.blog />
                                        </div> */}
                                    </div>

                                    <div className="card-info">
                                        <h3 className="title">{blog.short_title.split(" ").slice(0, 5).join(" ")}</h3>
                                        <span>{new Date(blog.date).toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                        <p className="description">{blog.short_description.split(" ").slice(0, 15).join(" ")}</p>
                                    </div>
                                </div>
                                <Link to={`/media-center/${blog.key_word_ar}`} className='btn mx-2'>
                                    <Button type="primary" shape='round' className="read-more-btn">
                                        {t('إقــرأ الـمــزيـد')}
                                    </Button>
                                </Link>
                            </div>
                        </Col>
                    ))}
                </Row>
                {/* ✅ Pagination   */}
                <div className="pagination-container mt-6 text-center" dir='ltr'>
                    <Pagination
                        current={currentPage}
                        pageSize={pageSize}
                        total={blogs?.length}
                        onChange={(page) => setCurrentPage(page)}
                    />
                </div>
            </main>
        </div>
    );
};

export default Blogs;
