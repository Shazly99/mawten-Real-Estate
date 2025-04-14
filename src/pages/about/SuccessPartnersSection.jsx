import TitleH from '@components/common/TitleH';
import img from '@constants/img';
import { useTranslation } from 'react-i18next';
 
const partners = [
    { name: 'بيت الخبرة للدراسات الاجتماعية', logo: img.clients1 },
    { name: 'التأمينات الاجتماعية', logo: img.clients2 },
    { name: 'تطوير', logo: img.clients3 },
    { name: 'جمعية مكنون', logo: img.clients4 },
    { name: 'عون التقنية', logo: img.clients5 },
    { name: 'جمعية إنصات', logo: img.clients6 },
    { name: 'وزارة الاتصالات وتقنية المعلومات', logo: img.clients7 },
    { name: 'تقدير', logo: img.clients8 },
    { name: 'جامعة الملك خالد', logo: img.clients9 },
    { name: 'جامعة الملك خالد', logo: img.clients10 },
    { name: 'جامعة الملك خالد', logo: img.clients11},
];

const SuccessPartnersSection = () => {
    const { t } = useTranslation();

    return (
        <div className="partners-section">
            <div className="container">
                <div className="section-title">
                    <TitleH
                        title=""
                        highlight={t('شركاء النجاح واثر الاستدامة')}
                        className="custom-title"
                    />
                </div>

                <div className="partners-grid">
                    {partners.map((partner, index) => (
                        <div key={index} className="partner-card">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="partner-logo"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SuccessPartnersSection;
