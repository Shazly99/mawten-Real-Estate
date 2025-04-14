import { useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import CustomButton from "@components/common/CustomButton";
import TitleH from "@components/common/TitleH";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./slider.scss";

const HomeMediaCenter = ({ blog = [] }) => {
    const { t } = useTranslation();
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="media-center mt_main">
            <div className="header">
                <TitleH title={t("Center")} highlight={t("Media")} />
            </div>

            <div className="container relative">
                {/* أسهم التنقل */}
                <div className="swiper-navigation">
                    <div ref={prevRef} className="swiper-button-prev custom-arrow">‹</div>
                    <div ref={nextRef} className="swiper-button-next custom-arrow">›</div>
                </div>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    loop={true}
                    speed={800}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
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
                                            {item.title?.split(" ").slice(0, 5).join(" ")}
                                        </h3>
                                        {isActive && (
                                            <p className="news-description">
                                                {item.short_description?.split(" ").slice(0, 15).join(" ")}...
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
