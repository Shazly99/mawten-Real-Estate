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
                        slidesPerView={4} // عرض صورة واحدة في كل مرة
                        spaceBetween={10} // المسافة بين الصور
                        speed={1000} // سرعة الانتقال
                        responsive={[
                            { breakpoint: 1200, settings: { slidesToShow: 4 } },
                            { breakpoint: 992, settings: { slidesToShow: 3 } },
                            { breakpoint: 768, settings: { slidesToShow: 2 } },
                            { breakpoint: 480, settings: { slidesToShow: 1 } },
                        ]}
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
