import img from '@constants/img'
import CompanyOverview from '@pages/home/CompanyOverview'
import GalleryTitle from '@pages/home/GalleryTitle'
import HomeContactUs from '@pages/home/HomeContactUs'
import TitleSection from '@pages/home/TitleSection'
import React from 'react'
import AboutCompanyOverview from './AboutCompanyOverview'
import Value from './Value'
import OverlayHeader from '@components/common/OverlayHeader'
import { useTranslation } from 'react-i18next'
import { Col, Row } from 'antd'
import Icon from '@constants/icon'
import TitleH from '@components/common/TitleH'

const About = () => {
    const { t } = useTranslation();

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

    return (
        <div className='app__about' >

            <OverlayHeader img={img.aboutCover} header={t('AboutMawten')} breadcrumbItems={breadcrumbItems} />

            <div className="home-container">
                {/* Top Section */}
                <TitleH title={t('mawten')} highlight={t('RealEstate')} className="text-4xl font-bold text-gray-900" />

                <div className="title_">
                    {/* Content Section */}
                    <h2  >
                        الريادة في صناعة الحلول العقارية المبتكرة
                    </h2>

                    {/* Description */}
                    <p>
                        تعد شركة موطن العقارية أحد شركات التطوير العقاري الرائدة في المنطقة، حيث أُسست بمبادرة من غرفة التجارة والصناعة بالرياض في العام 2007م كشركة مساهمة مقفلة برأس مال مدفوع يبلغ 1,1 مليار ريال سعودي عبر نخبة من المستثمرين والأسماء العقارية العريقة.
                    </p>
                    <p>ركزت موطن العقارية على تطوير المشاريع العقارية المتخصصة ورفد السوق بالمنتجات النوعية ذات الجودة العالية، وذلك عبر تطوير المشاريع العقارية الصناعية واللوجستية وإنشاء مصانع جاهزة لاحتضان الصناعات الناشئة وتطوير البيئات المناسبة للخدمات اللوجستية المتخصصة. بالإضافة إلى تطوير المشاريع متعددة الاستخدامات والمشاريع السكنية النوعية المناسبة التي تتلاءم مع احتياجات وتطلعات السوق والعملاء وتبلور مفهوم المجمعات السكنية المتكاملة المخدومة، فضلاً عن الاستثمار في تطوير المشاريع الفندقية ذات الجودة العالية وتشغيلها بواسطة مشغلين عالميين.</p>
                    <p className='mt-3' >واستطاعت شركة موطن العقارية كسب ثقة عملائها ومساهميها وحلفائها بفضل تميزها في اقتناص الفرص الاستثمارية وخبرتها في تطوير وإدارة المشاريع، ما مكنها من تعزيز تعاونها مع المؤسسات المالية والاستثمارية. ولضمان استدامة أعمالها تستمر شركة موطن العقارية بشكل حثيث ومستمر في تطوير وتحديث خططها الطموحة والتوسع في كسب ثقة السوق والاستمرار في تزويد السوق بالمشاريع والمنتجات العقارية النوعية وتقديم خدماتها بمهنية واحترافية عالية والتركيز على قطاعات التطوير والاستثمار العقاري التي تتواكب مع رؤية وخطط الدولة، وفي ذات الوقت تحقق التوازن ما بين تقليص المخاطر وتحقيق النمو والعوائد المجزية للمساهمين.</p>
                </div>
            </div>)
            <GalleryTitle />
            <AboutCompanyOverview />
            <Value />

        </div>
    )
}

export default About
