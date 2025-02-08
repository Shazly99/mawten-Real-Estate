import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import img from "@constants/img";
import "./home.scss";

const GalleryTitle = () => {
    return (
        <div className="image-gallery">
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 1500 }}
                loop={true}
                slidesPerView={1.5} // عرض صورة واحدة في كل مرة
                spaceBetween={10} // المسافة بين الصور
                speed={1000} // سرعة الانتقال
                breakpoints={{
                    1500: { slidesPerView: 1.5 },
                    320: { slidesPerView: 2 }, // شاشت صغيرة - عرض صورتين
                    768: { slidesPerView: 2 }, // شاشات متوسطة فما فوق - صورة واحدة
                }}
                dir="ltr"
            >
                <SwiperSlide className="overflow-hidden">
                    <img src={img.gallery2} alt="City View" />
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden">
                    <img src={img.gallery1} alt="Skyline" />
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden">
                    <img src={img.gallery2} alt="City View" />
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden">
                    <img src={img.gallery1} alt="Skyline" />
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden">
                    <img src={img.gallery2} alt="City View" />
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden">
                    <img src={img.gallery1} alt="Skyline" />
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default GalleryTitle;
