import { CopyOutlined } from '@ant-design/icons';
import CustomTitle from '@components/common/CustomTitle';
import TitleH from '@components/common/TitleH';
import Icon from '@constants/icon';
import img from '@constants/img';
import { Button, Col, Row } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import GalleryProjects from './GalleryProjects';
import './ProjectDetails.scss';
import ProjectDetailsHeader from './ProjectDetailsHeader';

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
    if (loading) return <p>جاري تحميل البيانات...</p>;
    if (!projectData) return <p>لم يتم العثور على بيانات المشروع.</p>;

    return (
        <div className='app_details_projects_page'>
            <ProjectDetailsHeader imgs={projectData.image} data={projectData} />
            <div className="app__project_destails mb-4">


                <div className="details">
                    <Row gutter={[20, 20]}>
                        <Col xl={24} className='title flex flex-column gap-2'>
                            <TitleH highlight={'تفاصيل المشروع'} />
                            <p>{projectData.description}</p>
                        </Col>
                        <Col xl={24}>
                            <div className="project-container">
                                <Row gutter={[16, 16]}>
                                    {
                                        projectData?.type1 &&
                                        <Col lg={8} xs={24}>
                                            <div className="section">
                                                <div className="icon-text">
                                                    <div className="content flex flex-row gap-3 align-items-center justify-content-center">
                                                        <p className="label1">عدد الاراضي</p>
                                                        <div className="icon flex flex-row gap-3">
                                                            <Icon.HotelUnit />
                                                            <p className="value">{projectData.type1}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    }

                                    {
                                        projectData?.type2 &&
                                        <Col lg={8} xs={24}>
                                            <div className="section">
                                                <div className="icon-text">
                                                    <div className="content flex flex-row gap-3 align-items-center justify-content-center">
                                                        <p className="label1">عدد المصانع</p>
                                                        <div className="icon flex flex-row gap-3">
                                                            <Icon.HotelUnit />
                                                            <p className="value">{projectData.type2}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    }
                                    {
                                        projectData?.type3 &&
                                        <Col lg={8} xs={24}>
                                            <div className="section">
                                                <div className="icon-text">
                                                    <div className="content flex flex-row gap-3 align-items-center justify-content-center">
                                                        <p className="label1">عدد الطوابق</p>
                                                        <div className="icon flex flex-row gap-3">
                                                            <Icon.HotelUnit />
                                                            <p className="value">{projectData.type3}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    }
                                    {
                                        projectData?.floors &&
                                        <Col lg={8} xs={24}>
                                            <div className="section">
                                                <div className="icon-text">
                                                    <div className="content flex flex-row gap-3 align-items-center justify-content-center">
                                                        <p className="label1">عدد الطوابق</p>
                                                        <div className="icon flex flex-row gap-3">
                                                            <Icon.HotelUnit />
                                                            <p className="value">{projectData.floors}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    }
                                    {
                                        projectData?.area &&
                                        <Col lg={8} xs={24}>
                                            <div className="section">
                                                <div className="icon-text">
                                                    <div className="content flex flex-row gap-3 align-items-center justify-content-center">
                                                        <p className="label1">المساحة</p>
                                                        <div className="icon flex flex-row gap-3">
                                                            <Icon.size />
                                                            <p className="value">{projectData.area}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    }
                                    {
                                        projectData?.units &&
                                        <Col lg={8} xs={24}>
                                            <div className="section">
                                                <div className="icon-text">
                                                    <div className="content flex flex-row gap-3 align-items-center justify-content-center">
                                                        <p className="label1">الوحدات السكنية</p>
                                                        <div className="icon flex flex-row gap-3">
                                                            <Icon.projects />
                                                            <p className="value">{projectData.units}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    }
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="details-list">
                    <ul>
                        {projectData.scopes?.map((feature, index) => (
                            <li key={index}>{feature.scope_ar}</li>
                        ))}
                    </ul>
                </div>

                <div className="mt-5 video_project">
                    {
                        projectData?.video &&
                        <>
                            <Col xl={24} className='title flex flex-column gap-2'>
                                <div className="flex justify-content-center">
                                    <TitleH highlight={'فيديو توضيحي للمشروع'} />
                                </div>
                            </Col>
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
            </div>

            {
                projectData?.images?.length > 0 &&
                <GalleryProjects data={projectData?.images} />
            }


            <div className="address-section mt-8">
                <div className='container'>
                    <Row gutter={[16, 16]} align="middle">
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
                            >
                                {t('address.copyButton')}
                            </Button>
                        </Col>
                        <Col xs={24} md={12}>
                            <iframe
                                src={googleMapsLink}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
