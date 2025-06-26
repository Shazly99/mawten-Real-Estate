import OverlayHeader from '@components/common/OverlayHeader';
import Icon from '@constants/icon';
import img from '@constants/img';
import { Button, Col, Row } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import GalleryProjects from './GalleryProjects';
import './ProjectDetails.scss';
import ProjectDetailsHeader from './ProjectDetailsHeader';
import UnitModels from './UnitModels';
import './projectdetails.css';
const ProjectDetails = () => {
    const { t } = useTranslation();
    const [projectData, setProjectData] = useState(null);
    const [loading, setLoading] = useState(true);
    let { id } = useParams()
    const breadcrumbItems = [
        {
            label: t('المشاريع'),
            link: '/projects',
        },
        {
            label: projectData?.title,
            link: '',
            isBold: true,
        },
    ];

    const googleMapsLink = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6254.6695072769935!2d46.677645!3d24.77442!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efd2e2d0c9dfd%3A0xb9d16b091553550f!2sMawten%20Real%20Estate%20Company!5e1!3m2!1sen!2ssa!4v1739839290374!5m2!1sen!2ssa";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(googleMapsLink);
        alert("تم نسخ الرابط بنجاح!");
    };
    const headers = {
        'Content-Type': 'application/json',
        'Accept-Language': localStorage.getItem('i18nextLng'),
    };
    let fetchData = async () => {
        try {
            const response = await axios.get(`https://mawtan.rightclicksa.com/api/home/projects/${id}`, { headers });
            setProjectData(response.data.data);
        } catch (error) {
            console.error("حدث خطأ أثناء جلب البيانات:", error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchData()
    }, []);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const currentUrl = window.location.href;

    const shareTo = (platform) => {
        let shareUrl = '';
        if (platform === 'facebook') {
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        } else if (platform === 'whatsapp') {
            shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;
        } else if (platform === 'twitter') {
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`;
        }
        window.open(shareUrl, '_blank', 'noopener,noreferrer');
    };

    const services = [
        { icon: Icon.kids, label: 'حضانة أطفال' },
        { icon: Icon.gymWomen, label: 'نادي رياضي نساء' },
        { icon: Icon.gymMen, label: 'نادي رياضي رجال' },
        { icon: Icon.lobby, label: 'مناطق استقبال وجلسات' },
        { icon: Icon.parking, label: 'مواقف سيارات' },
        { icon: Icon.warranty, label: 'ضمانات الإنشاء والتركيبات' },
        { icon: Icon.mosque, label: 'مصلى' },
        { icon: Icon.restaurant, label: 'مطاعم' },
        { icon: Icon.cafe, label: 'مقاهي' },
        { icon: Icon.supermarket, label: 'سوبر ماركت' },
    ];

    useEffect(() => {
        const scrollStep = -window.pageYOffset / 50; // سرعة التمرير
        const scrollInterval = setInterval(() => {
            if (window.pageYOffset !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 10); // التحكم في السلاسة

        return () => clearInterval(scrollInterval); // تنظيف التايمر
    }, []);

    if (loading) return <p>جاري تحميل البيانات...</p>;
    if (!projectData) return <p>لم يتم العثور على بيانات المشروع.</p>;

    return (
        <>
            <OverlayHeader img={img.aboutCover} header={projectData?.title} breadcrumbItems={breadcrumbItems} />
            <div className='app_details_projects_page'>
                <ProjectDetailsHeader imgs={projectData.image} data={projectData} />
                <div className="app__project_destails mb-4">
                    <div className="project-section">
                        {/* الكتلة الثانية */}
                        <Row gutter={[50, 50]} align="middle" style={{ marginTop: '64px' }}>
                            <Col xs={24} md={12}>
                                <h3 className="project-details-title">طيب الجوار والاستثمار قرب المسجد الحرام</h3>
                                <p className="project-description">
                                    يرتفع موطن مسار تاورز الفاخر حتى 27 طابقاً على مساحة تبلغ 6,580 متر مربع وبمسطحات بناء حوالي 114 ألف متر مربع في منطقة الرصيفة، وتضم وحدات سكنية راقية بعدد 948 وحدة سكنية بنماذج متعددة (ستوديو – غرفة – غرفتين - ثلاث غرف)، تنفرد بتصاميم عصرية فاخرة ومساحات متنوعة تتراوح بين 47 إلى 128م2، بالإضافة إلى ثلاث طوابق مخصصة لمحلات التجزئة. مع ضمانات شاملة.
                                </p>
                            </Col>
                            <Col xs={24} md={12}>
                                <img src={img.H2010} alt="مشروع 2" className="project-details-image" />
                            </Col>
                        </Row>
                        {/* الكتلة الأولى */}
                        <Row gutter={[50, 50]} align="middle" style={{ marginTop: '64px' }}>
                            <Col xs={24} md={12} order={2}>
                                <h3 className="project-details-title">طيب الجوار والاستثمار قرب المسجد الحرام</h3>
                                <p className="project-description">
                                    احظى بجودة حياة فريدة في موطن مسار تاورز، حيث سهولة الوصول الى الحرم المكي الشريف، والاستمتاع بالخدمات والتجارب المتكاملة في المناطق المحيطة، إضافة إلى مرافق وخدمات المتكاملة في موطن مسار تاورز تشمل مواقف سيارات في عدة طوابق، مساحات تجارية تخدم السكان، صالات الاستقبال والجلوس، نادي رياضي للرجال وآخر للسيدات، سوبر ماركت، كافتيريا، مطاعم، مصلى. فضلاً عن خدمات الصيانة الدورية                                    </p>
                            </Col>
                            <Col xs={24} md={12} order={1}>
                                <img src={img.H2010} alt="مشروع 1" className="project-details-image" />
                            </Col>
                        </Row>

                    </div>
                    <div className="item_share_btn flex justify-content-center"  >
                        <Link to={'/contact'} >
                            <Button size='large' iconPosition='left' className="custom-btn" type="primary">
                                {t('سجل اهتمامك')}
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-5 video_project">
                        {
                            projectData?.video &&
                            <>

                                <div className="w-full mt-3">
                                    {isPlaying ? (
                                        <video
                                            className="w-full"
                                            src={projectData.video}
                                            controls
                                            autoPlay
                                        />
                                    ) : (
                                        <img
                                            src={img.ProjectsV}
                                            className="w-full cursor-pointer"
                                            alt="Click to play"
                                            onClick={handlePlay}
                                        />
                                    )}
                                </div>
                            </>
                        }
                        <p className='text-center'>{projectData.description}</p>
                    </div>

                    <Row className="services-row" gutter={[0, 32]} justify="start">
                        {services.map((service, index) => (
                            <div className="service-col" key={index}>
                                <div className="icon-container">
                                    <img src={service.icon} alt={service.label} />
                                </div>
                                <p className="service-label">{service.label}</p>
                            </div>
                        ))}
                    </Row>
                </div>

                {
                    projectData?.images?.length > 0 &&
                    <GalleryProjects data={projectData?.images} />
                }

                <UnitModels />
                <div className="address-section mt-8">
                    <div className='container'>
                        <Row gutter={[16, 16]} align="middle">

                            <Col xs={24} md={24}>
                                <iframe
                                    src={googleMapsLink}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className='w-full h-[400px] rounded-lg'
                                ></iframe>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetails;
