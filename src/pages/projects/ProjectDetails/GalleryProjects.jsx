import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../home/home.scss";

const GalleryProjects = ({ data }) => {
    return (
        <div className="gallery_ ">
            {/* <TitleH highlight={'صور المشروع'} /> */}
            <div className="mt-4">
                <div className="image-gallery">
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{ delay: 1500 }}
                        loop={true}
                        slidesPerView={3} // عرض صورة واحدة في كل مرة
                        spaceBetween={40} // المسافة بين الصور
                        speed={1000} // سرعة الانتقال
                        breakpoints={{
                            1500: { slidesPerView: 2.5 },
                            320: { slidesPerView: 2 }, // شاشت صغيرة - عرض صورتين
                            768: { slidesPerView: 2 }, // شاشات متوسطة فما فوق - صورة واحدة
                        }}
                        dir="ltr"
                    >
                        {
                            data?.map((item, index) => (
                                <SwiperSlide key={index} className="overflow-hidden h-full">
                                    <img src={item.image} alt={item.title} className="h-full" />
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default GalleryProjects;
