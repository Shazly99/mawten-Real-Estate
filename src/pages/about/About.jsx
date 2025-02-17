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
        <div>
            <div className="header_overlay">
                <img src={img.aboutCover} alt="Cover" className="w-full" />
                <div className="overlay">
                    <OverlayHeader header={t('AboutMawten')} breadcrumbItems={breadcrumbItems} />
                </div>
            </div>
            <TitleSection />
            <GalleryTitle />
            <AboutCompanyOverview />
            <Value />

        </div>
    )
}

export default About
