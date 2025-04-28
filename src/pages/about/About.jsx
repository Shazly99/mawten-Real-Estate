import OverlayHeader from '@components/common/OverlayHeader'
import TitleH from '@components/common/TitleH'
import img from '@constants/img'
import GalleryTitle from '@pages/home/GalleryTitle'
import { useTranslation } from 'react-i18next'
import AboutCompanyOverview from './AboutCompanyOverview'
import Value from './Value'
import SuccessPartnersSection from './SuccessPartnersSection'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Col, Row } from 'antd'

const About = () => {
    const { t } = useTranslation();
    // const categories = [
    //     {
    //         label: "السكني ومتعدد الاستخدام",
    //         className: "residential",
    //     },
    //     {
    //         label: "الصناعي واللوجستي",
    //         className: "industrial",
    //     },
    //     {
    //         label: "الضيافة",
    //         className: "hospitality",
    //     },
    // ];
    const breadcrumbItems = [
        {
            label: t('nav_about'),
            link: '/about',
        },
        {
            label: t('AboutMawten'),
            link: '/about',
            isBold: true,
        },
    ];
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://mawtan.rightclicksa.com/api/home`)
            .then(response => {
                const sectors = response.data?.data?.sectors?.data || [];
                const projects = response.data?.data?.projects?.data || [];
                setData(projects)
                setTabItems(sectors);
            })
            .catch(err => {
                console.error('فشل جلب بيانات القطاعات:', err);
            });
    }, []);

    return (
        <div className='app__about' >

            <OverlayHeader img={img.aboutCover} header={t('AboutMawten')} breadcrumbItems={breadcrumbItems} />

            <div className="home-container">
                {/* Top Section */}
                <Row justify={'center'} align={'middle'} >
                    <Col xl={12} lg={12} md={24} xs={24}>
                        <TitleH title={t('mawten')} highlight={t('')} className="text-4xl font-bold text-gray-900" />
                        <h2 className='mt-4' >نُطَوِّرْ لِيَنْموْ الْوَطَنْ</h2>
                        <div className="title_ mt-2">
                            {/* Description */}
                            <p className="mt-3">
                                روّاد في التطوير العقاري بالمملكة العربية السعودية، بدأنا بمبادرة من غرفة التجارة والصناعة بالرياض في عام 2007م كشركة مساهمة مقفلة برأس مال مدفوع يبلغ 1,1 مليار ريال سعودي عبر نخبة من المستثمرين والأسماء العقارية العريقة
                            </p>
                        </div>
                    </Col>
                    <Col xl={12} lg={12} md={24} xs={24}>
                        <img src={img.about} alt="" className='w-full p-2' />
                    </Col>
                </Row>
                {/*        <div className="mt-4 mb-5">
                    <span>نساهم في ازدهار القطاعات</span>
                </div> */}
                {/*           <div className="category-buttons">
                    {categories?.map((category, index) => (
                        <div key={index} className={`category-box ${category.className}`}>
                            <span>{category.label}</span>
                        </div>
                    ))}
                </div> */}
                <p className='app_category_' >ركزت موطن العقارية على تطوير المشاريع العقارية المتخصصة ورفد السوق بمنتجات عقارية نوعية ذات جودة عالية في مختلف القطاعات، كتطوير المشاريع العقارية الصناعية واللوجستية وإنشاء المصانع الجاهزة لاحتضان الصناعات الناشئة وتطوير البيئات المناسبة للخدمات اللوجستية المتخصصة. بالإضافة إلى تطوير المشاريع متعددة الاستخدامات والمشاريع السكنية النوعية المناسبة التي تتلاءم مع احتياجات وتطلعات السوق والعملاء وتبلور مفهوم المجمعات السكنية المتكاملة المخدومة، فضلاً عن الاستثمار في تطوير المشاريع الفندقية ذات الجودة العالية وتشغيلها بواسطة مشغلين عالميين</p>
            </div>
            <GalleryTitle data={data} />
            <AboutCompanyOverview />
            <Value />
            <SuccessPartnersSection />
        </div>
    )
}

export default About
