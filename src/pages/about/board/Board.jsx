import OverlayHeader from '@components/common/OverlayHeader';
import TitleH from '@components/common/TitleH';
import Icon from '@constants/icon';
import img from '@constants/img';
import { Col, Row } from 'antd';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import './board.scss';

const Board = () => {
    const { t } = useTranslation();
    const location = useLocation();

    const breadcrumbItems = [
        { label: t('nav_about'), link: '/about' },
        { label: t('AboutMawten2'), link: '/about/board', isBold: true },
    ];

    const breadcrumbItems2 = [
        { label: t('nav_about'), link: '/about' },
        { label: t('AboutMawten1'), link: '/about/executive-management', isBold: true },
    ];

    useEffect(() => {
        console.log(location.pathname);
    }, []);

    const members2 = [
        { name: 'حسين حسن مختار', position: 'رئيس تطوير الأعمال', img: img.emp6 },          // رقم 6
        { name: 'إبراهيم بن عبد العزيز المغيصيب', position: 'رئيس المالية', img: img.emp4 }, // رقم 4
        { name: 'د. رائد بن منصور الدخيل', position: 'رئيس التنفيذي', img: img.emp5 },       // رقم 5

        { name: 'أمجد بن عبد الله الماجد', position: 'رئيس الخدمات المشتركة', img: img.emp1 }, // رقم 1
        { name: 'عبد العزيز بن سعد الشهري', position: 'رئيس التسويق والمبيعات', img: img.emp2 }, // رقم 2
        { name: 'م. محمود عليوه', position: 'رئيس المشاريع', img: img.emp3 },               // رقم 3
    ];



    const members = [
        { name: 'عبد الله بن سعود الرشود', position: 'عضو مجلس الإدارة', img: img.emp7 },
        { name: 'حمد بن محمد الموسى', position: 'عضو مجلس الإدارة', img: img.emp8 },
        { name: 'عبد الحميد بن عبد الله الزامل', position: 'عضو مجلس الإدارة', img: img.emp9 },

        { name: 'صباح بن محمد المطلق', position: 'رئيس مجلس الإدارة', img: img.emp10 },
        { name: 'سليمان بن سليم الجريبي', position: 'نائب رئيس مجلس الإدارة', img: img.emp11 },
        { name: 'خالد بن محمد العمودي', position: 'عضو مجلس الإدارة', img: img.emp12 },

        { name: 'سعود بن محمد السليماني', position: 'عضو مجلس الإدارة', img: img.emp13 },
        { name: 'عبد العزيز بن حمد بن سعيدان', position: 'عضو مجلس الإدارة', img: img.emp14 },
        { name: 'حمد بن إبراهيم بن سعيدان', position: 'عضو مجلس الإدارة', img: img.emp15 },
    ];


    return (
        <div className="mb-8 pb-8">
            <OverlayHeader
                img={img.aboutCover}
                header={t('AboutMawten')}
                breadcrumbItems={location.pathname === '/about/board' ? breadcrumbItems : breadcrumbItems2}
            />
            <div className="app_board">
                <header>
                    {location.pathname === '/about/board' ? (
                        <TitleH title={t('DirectorsMembers')} highlight={t('Management')} />
                    ) : (
                        <TitleH title={t('Management')} highlight={t('Executive')} />
                    )}
                </header>

                <main className="board-members mt-5">
                    {location.pathname === '/about/board' ? (
                        <Row gutter={[30, 30]} dir='ltr' >
                            {members.map((member, index) => (
                                <Col key={index} xl={8} lg={8} md={12} sm={24} xs={24}>
                                    <div className="member-card">
                                        <div className="svg-icon">
                                            <Icon.IconEmp />
                                        </div>
                                        <img src={member.img} alt="member-photo" />
                                    </div>
                                    <div className="conetnt" dir='rtl' >
                                        <h4>{member.name}</h4>
                                        <p>{member.position}</p>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    ) : (

                        <Row gutter={[30, 30]} dir='ltr' >
                            {members2.map((member, index) => (
                                <Col key={index} xl={8} lg={8} md={12} sm={24} xs={24}>
                                    <div className="member-card">
                                        <div className="svg-icon">
                                            <Icon.IconEmp />
                                        </div>
                                        <img src={member.img} alt="member-photo" />
                                    </div>
                                    <div className="conetnt" dir='rtl' >
                                        <h4>{member.name}</h4>
                                        <p>{member.position}</p>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Board;
