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

const newsData = [
    {
        id: 1,
        image: img.Projects1,
        title: 'صفقة "موطن العقارية" الفندقية تتجاوز مليار ريال',
        date: "02/11/2024",
        description: "عقدت جمعية تنامي ملتقى “استشراف المستقبل في القطاع غير الربحي”، حيث تم استعراض آفاق وتطلعات واستراتيجيات مبتكرة لتعزيز دور القطاع غير الربحي في المجتمع. ",
    },
    {
        id: 2,
        image: img.Projects2,
        title: "شركة الرياض للعقار تفتتح فرع جديد داخل الرياض",
        date: "02/11/2024",
        description: "عقدت جمعية تنامي ملتقى “استشراف المستقبل في القطاع غير الربحي”، حيث تم استعراض آفاق وتطلعات واستراتيجيات مبتكرة لتعزيز دور القطاع غير الربحي في المجتمع. ",
    },
    {
        id: 3,
        image: img.Projects3,
        title: "شركة الرياض للعقار تفتتح فرع جديد داخل الرياض",
        date: "02/11/2024",
        description: "عقدت جمعية تنامي ملتقى “استشراف المستقبل في القطاع غير الربحي”، حيث تم استعراض آفاق وتطلعات واستراتيجيات مبتكرة لتعزيز دور القطاع غير الربحي في المجتمع. ",
    },

    {
        id: 1,
        image: img.blog1,
        title: 'صفقة "موطن العقارية" الفندقية تتجاوز مليار ريال',
        date: "02/11/2024",
        description: "عقدت جمعية تنامي ملتقى “استشراف المستقبل في القطاع غير الربحي”، حيث تم استعراض آفاق وتطلعات واستراتيجيات مبتكرة لتعزيز دور القطاع غير الربحي في المجتمع. ",
    },
    {
        id: 2,
        image: img.blog2,
        title: "شركة الرياض للعقار تفتتح فرع جديد داخل الرياض",
        date: "02/11/2024",
        description: "عقدت جمعية تنامي ملتقى “استشراف المستقبل في القطاع غير الربحي”، حيث تم استعراض آفاق وتطلعات واستراتيجيات مبتكرة لتعزيز دور القطاع غير الربحي في المجتمع. ",
    },
    {
        id: 3,
        image: img.blog3,
        title: "شركة الرياض للعقار تفتتح فرع جديد داخل الرياض",
        date: "02/11/2024",
        description: "عقدت جمعية تنامي ملتقى “استشراف المستقبل في القطاع غير الربحي”، حيث تم استعراض آفاق وتطلعات واستراتيجيات مبتكرة لتعزيز دور القطاع غير الربحي في المجتمع. ",

    },
];

const HomeMediaCenter = () => {
    let {t} = useTranslation()
    return (
        <section className="media-center mt_main">
            <div className="header">
                <TitleH title={t('Center')} highlight={t('Media')} />
            </div>
            <div className="container">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20} // مسافة بين الشرائح
                    loop={true}  // تمكين التكرار للتمرير السلس
                    speed={800}  // سرعة الانتقال بين الشرائح
                    autoplay={{
                        delay: 2500, // تأخير بين الشرائح
                        disableOnInteraction: true, // لا توقف التشغيل التلقائي عند التفاعل
                    }}
                    navigation
                    breakpoints={{
                        320: { slidesPerView: 1 },  // شاشة الموبايل الصغيرة
                        480: { slidesPerView: 1.2 }, // موبايل متوسط
                        768: { slidesPerView: 2 },  // تابلت
                        1024: { slidesPerView: 2.5 }, // لابتوب
                        1280: { slidesPerView: 2.5 }, // شاشات كبيرة
                    }}
                    className="custom-swiper"
                >


                    {newsData.map((news, index) => (
                        <SwiperSlide key={news.id}>
                            {({ isActive }) => (
                                <div className={`news-card ${isActive ? "active" : "inactive"}`}>
                                    <img src={news.image} alt={news.title} className={`news-image ${isActive ? "active_image" : "inactive_image"}`} />
                                    <div className="news-content">
                                        <h3 className="news-title">{news.title}</h3>
                                        {isActive && <p className="news-description">{news.description}</p>}
                                        {isActive &&
                                            <CustomButton />
                                        }
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </section >
    );
};

export default HomeMediaCenter;
