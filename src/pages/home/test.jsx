import CustomButton from "@components/common/CustomButton";
import TitleH from "@components/common/TitleH";
import img from "@constants/img";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./slider.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HomeMediaCenter = ({ blog = [] }) => {
    const { t } = useTranslation();

    return (
        <section className="media-center mt_main">
            <div className="header">
                <TitleH title={t("Center")} highlight={t("Media")} />
            </div>
            <div className="container">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    loop={true}
                    speed={800}
                    navigation
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        480: { slidesPerView: 1.2 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 2.5 },
                        1280: { slidesPerView: 2.5 },
                    }}
                    className="custom-swiper"
                >
                    {blog.map((item) => (
                        <SwiperSlide key={item.id}>
                            {({ isActive }) => (
                                <div className={`news-card ${isActive ? "active" : "inactive"}`}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className={`news-image ${isActive ? "active_image" : "inactive_image"}`}
                                    />
                                    <div className="news-content">
                                        <h3 className="news-title">
                                            {item.title.split(" ").slice(0, 5).join(" ")}
                                        </h3>
                                        {isActive && (
                                            <p className="news-description">
                                                {item.short_description.split(" ").slice(0, 15).join(" ")}
                                            </p>
                                        )}
                                        {isActive && (
                                            <Link to={`/media-center/${item.key_word_ar}`}>
                                                <CustomButton />
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default HomeMediaCenter;
