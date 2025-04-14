import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./home.scss";

const GalleryTitle = ({ data }) => {
    return (
        <div className="image-gallery">
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 1500 }}
                loop={true}
                slidesPerView={1.5} // عرض صورة واحدة في كل مرة
                spaceBetween={40} // المسافة بين الصور
                speed={1000} // سرعة الانتقال
                breakpoints={{
                    1500: { slidesPerView: 1.5 },
                    320: { slidesPerView: 2 }, // شاشت صغيرة - عرض صورتين
                    768: { slidesPerView: 2 }, // شاشات متوسطة فما فوق - صورة واحدة
                }}
                dir="ltr"
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index} className="overflow-hidden">
                        <img src={item.image} alt="City View" />
                    </SwiperSlide>
                ))}


            </Swiper>
        </div>
    );
};

export default GalleryTitle;
