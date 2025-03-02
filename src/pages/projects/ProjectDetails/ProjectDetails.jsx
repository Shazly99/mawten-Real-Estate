import { AreaChartOutlined, CopyOutlined, FileTextOutlined, HomeOutlined } from '@ant-design/icons';
import OverlayHeader from '@components/common/OverlayHeader';
import img from '@constants/img';
import { Button, Col, Row, Card } from 'antd';
import { useTranslation } from 'react-i18next';
import './ProjectDetails.scss';
import Icon from '@constants/icon';
import GalleryTitle from '@pages/home/GalleryTitle';
import CustomTitle from '@components/common/CustomTitle';
const ProjectDetails = () => {
    const { t } = useTranslation();

    const breadcrumbItems = [
        {
            label: t('المشاريع'),
            link: '/about',
        },
        {
            label: t('مجمع موطن هيلز السكني'),
            link: '/about',
            isBold: true,
        },
    ];
    const googleMapsLink = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6254.6695072769935!2d46.677645!3d24.77442!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efd2e2d0c9dfd%3A0xb9d16b091553550f!2sMawten%20Real%20Estate%20Company!5e1!3m2!1sen!2ssa!4v1739839290374!5m2!1sen!2ssa";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(googleMapsLink);
        alert("تم نسخ الرابط بنجاح!");
    };
    return (
        <>
            <OverlayHeader img={img.Projectscover} header={t('مجمع موطن هيلز السكني')} breadcrumbItems={breadcrumbItems} />
            <div className="app__project_destails mb-4">
                <Row>
                    <Col xl={14} xs={24}  >
                        <div className="project_summery">
                            <h1>هيلتون جاردن ان الرياض المركز المالي</h1>
                            <div className="points flex gap-4">
                                <div className="item flex align-items-center  gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 18 21" fill="none">
                                        <path d="M17.4938 6.7C16.4538 2.07 12.4138 0 8.87377 0C8.87377 0 8.87377 0 8.86377 0C5.33377 0 1.30377 2.07 0.253774 6.69C-0.926226 11.85 2.23377 16.22 5.09377 18.98C6.15377 20 7.51377 20.51 8.87377 20.51C10.2338 20.51 11.5938 20 12.6438 18.98C15.5038 16.22 18.6638 11.86 17.4938 6.7ZM12.1538 7.53L8.15377 11.53C8.00377 11.68 7.81377 11.75 7.62377 11.75C7.43377 11.75 7.24377 11.68 7.09377 11.53L5.59377 10.03C5.30377 9.74 5.30377 9.26 5.59377 8.97C5.88377 8.68 6.36377 8.68 6.65377 8.97L7.62377 9.94L11.0938 6.47C11.3838 6.18 11.8638 6.18 12.1538 6.47C12.4438 6.76 12.4438 7.24 12.1538 7.53Z" fill="#A61517" />
                                    </svg>
                                    <span>مكة المكرمة    </span>
                                </div>
                                <div className="item flex  align-items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none">
                                        <path d="M20 13V7C20 5.34 18.66 4 17 4H3C1.34 4 0 5.34 0 7V13C0 14.66 1.34 16 3 16H17C18.66 16 20 14.66 20 13Z" fill="#A61517" />
                                        <path d="M3.92923 17.5H16.0692C16.3892 17.5 16.6192 17.79 16.5592 18.1C16.2892 19.58 15.4192 20 13.3292 20H6.66923C4.56923 20 3.70923 19.58 3.43923 18.1C3.37923 17.79 3.60923 17.5 3.92923 17.5Z" fill="#A61517" />
                                        <path d="M6.66923 0H13.3292C15.4292 0 16.2892 0.42 16.5592 1.9C16.6192 2.21 16.3792 2.5 16.0692 2.5H3.92923C3.60923 2.5 3.37923 2.21 3.43923 1.9C3.70923 0.42 4.56923 0 6.66923 0Z" fill="#A61517" />
                                    </svg>
                                    <span>سكني</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl={10} xs={24}  >
                        <div className="item_share_btn flex  gap-4 align-items-center">
                            <Button size='large' iconPosition='left' className="custom-btn" icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M11.5074 0.33609L3.85698 2.87859C-1.28566 4.59901 -1.28566 7.40424 3.85698 9.11619L6.12754 9.87046L6.88157 12.1418C8.59296 17.2861 11.4057 17.2861 13.1171 12.1418L15.6673 4.49731C16.8025 1.06494 14.9387 -0.808035 11.5074 0.33609ZM11.7785 4.89564L8.55907 8.13309C8.43198 8.26021 8.27101 8.31954 8.11004 8.31954C7.94907 8.31954 7.78809 8.26021 7.66101 8.13309C7.41532 7.88731 7.41532 7.48051 7.66101 7.23474L10.8805 3.99729C11.1262 3.75151 11.5328 3.75151 11.7785 3.99729C12.0242 4.24306 12.0242 4.64986 11.7785 4.89564Z" fill="white" />
                            </svg>} type="primary">{t('سجل اهتمامك')}</Button>

                            <div className="item_share flex flex-column cursor-pointer ">
                                <img src={img.share} width={50} alt="" srcset="" />
                                <span>مشاركة</span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="details">

                    <Row gutter={[20, 20]} >
                        <Col xl={6} className='title' >
                            <h2>تفاصيل المشروع</h2>
                        </Col>
                        <Col xl={18} >

                            <div className="project-container">
                                <Row gutter={[16, 16]}>
                                    <Col lg={8} xs={24} >
                                        <div className="section">
                                            <div className="icon-text">
                                                <div className="content">
                                                    <p className="label1">الوحدات السكنية</p>
                                                    <div className="icon">
                                                        <Icon.projects />
                                                        <p className="value">950</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={8} xs={24} >
                                    
                                        <div className="section">
                                            <div className="icon-text">
                                                <div className="content">
                                                    <p className="label1">المساحة</p>
                                                    <div className="icon">

                                                        <Icon.size />
                                                        <p className="value">114 ألف</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={8} xs={24} >
                                    
                                        <div className="section">
                                            <div className="icon-text">
                                                <div className="content">
                                                    <p className="label1">عدد الطوابق</p>
                                                    <div className="icon">
                                                        <Icon.HotelUnit />
                                                        <p className="value">27</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="mt-5  video_project">
                    <img src={img.ProjectsV} className='w-full' alt="" srcset="" />
                    <p>مشروع فريد بموقعه في مكة مكرمة ملاصق لوجهة مسار ويبعد عن الحرم المكي الشريف قرابة 3600 متر، تطوره شركة موطن العقارية كبرج سكني بارتفاع 27 طابق على مساحة تبلغ 6,580 متر مربع وبمسطحات بناء حوالي 114 ألف متر مربع في منطقة الرصيفة بمكة المكرمة بإطلالة كاملة على الدائري الثالث وبجوار محطة قطار الحرمين ليشكل معلماً بارزاً للقادمين من مدينة جدة. يضم البرج 950 وحدة سكنية بنماذج ستوديو وغرفة وغرفتين وبمساحات مختلفة تتراوح بين 47 إلى 128 متر مربع بتصاميم عصرية فاخرة بالإضافة إلى ثلاث مستويات من المناطق التجارية في البرج. ويشمل البرج ما يلي</p>
                </div>
                <div className="details-list">
                    <ul>
                        <li>19 طابق سكني يضم حوالي 950 وحدة سكنية متعددة النماذج.</li>
                        <li>2 طابق لمواقف السيارات بدور القبو.</li>
                        <li>دور مواقف يضم مدخل للأبراج السكنية ومساحات تجارية على الواجهة الرئيسية ومواقف للسيارات في الجهة الخلفية.</li>
                        <li>دور ميزاني: يضم الخدمات الخاصة بالسكان (صالة رياضية للرجال وأخرى للسيدات – حضانة – كافيتريا – سوبر ماركت).</li>
                        <li>دور (ملاهي – المطاعم).</li>
                    </ul>
                </div>

            </div>
            <GalleryTitle />
            <div className="app__project_destails mt-0 mb-4">

                <div className=" video_project"> 
                    <p>وينفرد برج موطن المسار بقربه من محطة قطار الحرمين ما يمنح ساكنيه ميزة الوصول السهل للمحطة خاصة في المواسم المزدحمة، وكذلك سهولة الوصول إلى طريق وجهة مسار المؤدي مباشرة إلى الحرم المكي الشريف والاستفادة من خدمات المترو ومحطة الحافلات الترددية للوصول للحرم المكي في زمن قياسي، إضافة إلى مسارات المشاة والاستمتاع بالخدمات المتوفرة في الطريق.</p>
                </div>
            </div>

            
            <div className="address-section mt-8">
                <div className='container'>
                    <Row gutter={[16, 16]} align="middle" >
                        {/* Address Details */}
                        <Col xs={24} md={12} className="address-content">
                            <div className="title">
                                <CustomTitle title={t('address.title')} />
                            </div>
                            <p>
                                {t('address.line1')}
                                <br />
                                {t('address.line2')}
                            </p>

                            <Button
                                type="primary"
                                className="copy-button"
                                onClick={copyToClipboard}
                                icon={<CopyOutlined />}
                            >{t('address.copyButton')}</Button>
                        </Col>
                        {/* Google Map Embed */}
                        <Col xs={24} md={12}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6254.6695072769935!2d46.677645!3d24.77442!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efd2e2d0c9dfd%3A0xb9d16b091553550f!2sMawten%20Real%20Estate%20Company!5e1!3m2!1sen!2ssa!4v1739839290374!5m2!1sen!2ssa" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </Col>

                    </Row>
                </div>
            </div>
        </>
    )
}

export default ProjectDetails
