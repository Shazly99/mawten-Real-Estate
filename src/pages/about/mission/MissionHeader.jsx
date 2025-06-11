import OverlayHeader from '@components/common/OverlayHeader';
import TitleH from '@components/common/TitleH';
import img from '@constants/img'; // Path to your images if needed
import { useTranslation } from 'react-i18next';
import './mission.scss';

const MissionHeader = () => {
    const { t } = useTranslation();
    const breadcrumbItems = [
        {
            label: t('nav_about'),
            link: '/about',
        },
        {
            label: t('history'),
            link: '/about/mission',
            isBold: true,
        },
    ];
    return (
        <div>
            <div className="app__mission">

                <OverlayHeader img={img.aboutCover} header={t('تاريخ من الإنجازات')} breadcrumbItems={breadcrumbItems} />

                <header className="flex justify-center align-items-center">
                    <TitleH title={t('history')} highlight={t('')} />
                    <p>
                        منذ العام 2007م تمكنت موطن العقارية من بناء سجل حافل بالإنجازات وامدت السوق العقارية
                        بمشاريع نوعية مكنتها أن تصبح واحدة من كبرى شركات التطوير العقاري في المملكة العربية السعودية
                    </p>
                </header>
            </div>
        </div>
    )
}

export default MissionHeader
