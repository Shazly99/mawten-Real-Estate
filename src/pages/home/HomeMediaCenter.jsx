import TitleH from "@components/common/TitleH";
import { Button, Carousel } from "antd";
import "antd/dist/reset.css"; // تأكد أنك مستورد CSS للـ Ant Design
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./slider.scss";

const HomeMediaCenter = ({ blog = [] }) => {
    const { t } = useTranslation();
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <section className="media-center mt_main">
            <div className="header   ">
                <TitleH highlight={t("blgos")} />
            </div>
            <div className="container">
                <Carousel
                    autoplay={false}
                    autoplaySpeed={1500}
                    speed={800}
                    infinite
                    dots={false}
                    beforeChange={(current, next) => setActiveSlide(next)}
                    slidesToShow={3}
                    responsive={[
                        {
                            breakpoint: 1280,
                            settings: { slidesToShow: 2 }
                        },
                        {
                            breakpoint: 1024,
                            settings: { slidesToShow: 3 }
                        },
                        {
                            breakpoint: 768,
                            settings: { slidesToShow: 2 }
                        },
                        {
                            breakpoint: 480,
                            settings: { slidesToShow: 1.2 }
                        },
                        {
                            breakpoint: 320,
                            settings: { slidesToShow: 1 }
                        }
                    ]}

                >
                    {blog.map((blog, index) => (
                        <div key={index} className="px-2 py-4" >
                            <div className="blog-card shadow-2 pb-4 ">
                                <Link to={`/media-center/${blog.key_word_ar}`} className="card-header">
                                    <div className="card_blog_image">
                                        <img src={blog.image} alt={`Image ${blog.id}`} />
                                        {/*     <div className="overlay">
                                            <Button shape='round' iconPosition='end' icon={<Icon.DATE />} type='primary'>
                                                {new Date(blog.date).toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })}
                                            </Button>
                                            <Icon.blog />
                                        </div> */}
                                    </div>

                                    <div className="card-info">
                                        <h3 className="title">{blog.short_title.split(" ").slice(0, 5).join(" ")}</h3>
                                        {/* <p className="description">{blog.short_description.split(" ").slice(0, 15).join(" ")}</p> */}
                                    </div>
                                </Link>
                    {/*             <Link dir="rtl" to={`/media-center/${blog.key_word_ar}`} className='block   mx-3'>
                                    <Button type="primary" shape='round' className="read-more-btn">
                                        {t('more')}
                                    </Button>
                                </Link> */}
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
            <Link to={'/media-center'} className="flex justify-content-center mt-4 w-full">
                <Button type="primary" size="large" className="px-5 shadow-none" >المركز الاعلامي</Button>
            </Link>
        </section>
    );
};

export default HomeMediaCenter;
