import OverlayHeader from '@components/common/OverlayHeader'
import img from '@constants/img';
import React from 'react'
import { useTranslation } from 'react-i18next';

const ProjectDetails = () => {
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
        <>
            <OverlayHeader img={img.Projectscover} header={t('AboutMawten')} breadcrumbItems={breadcrumbItems} />
        </>
    )
}

export default ProjectDetails
