import OverlayHeader from '@components/common/OverlayHeader';
import TitleH from '@components/common/TitleH';
import img from '@constants/img';
import { useTranslation } from 'react-i18next';
import './board.scss';
import Icon from '@constants/icon';
import { Col, Row } from 'antd';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Board = () => {
    const { t } = useTranslation();
    let location = useLocation()

    const breadcrumbItems = [
        {
            label: t('nav_about'),
            link: '/about',
        },
        {
            label: t('AboutMawten2'),
            link: '/about/board',
            isBold: true,
        },
    ];


    const breadcrumbItems2 = [
        {
            label: t('nav_about'),
            link: '/about',
        },
        {
            label: t('AboutMawten1'),
            link: '/about/executive-management',
            isBold: true,
        },
    ];

    useEffect(() => {
        console.log(location.pathname);

    }, [])


    return (
        <div className=' mb-8 pb-8'>
            <OverlayHeader img={img.aboutCover} header={t('AboutMawten')}
                breadcrumbItems={location.pathname == '/about/board' ? breadcrumbItems : breadcrumbItems2}
            />
            <div className="app_board">
                <header>
                    {
                        location.pathname == '/about/board' ?
                            <TitleH title={t('DirectorsMembers')} highlight={t('Management')} /> :
                            <TitleH title={t('Management')} highlight={t('Executive')} />
                    }
                </header>
                <main className="board-members mt-5">
                    <Row gutter={[30, 30]} >


                        <Col xl={8} lg={8} md={12} sm={24} xs={24} >
                            <div className="member-card" >
                                <div className="svg-icon">
                                    <Icon.IconEmp />
                                </div>
                                <img src={img.emp1} alt="member-photo" />
                            </div>
                            <div className="conetnt">
                                <h4>صالح بن محمد المطلق</h4>
                                <p>عضو مجلس الإدارة</p>
                            </div>
                        </Col>

                        <Col xl={8} lg={8} md={12} sm={24} xs={24} >

                            <div className="member-card" >
                                <div className="svg-icon">
                                    <Icon.IconEmp />
                                </div>
                                <img src={img.emp2} alt="member-photo" />
                            </div>
                            <div className="conetnt">
                                <h4>صالح بن محمد المطلق</h4>
                                <p>عضو مجلس الإدارة</p>
                            </div>
                        </Col>
                        <Col xl={8} lg={8} md={12} sm={24} xs={24} >

                            <div className="member-card" >
                                <div className="svg-icon">
                                    <Icon.IconEmp />
                                </div>
                                <img src={img.emp3} alt="member-photo" />
                            </div>
                            <div className="conetnt">
                                <h4>صالح بن محمد المطلق</h4>
                                <p>عضو مجلس الإدارة</p>
                            </div>
                        </Col>
                        <Col xl={8} lg={8} md={12} sm={24} xs={24} >

                            <div className="member-card" >
                                <div className="svg-icon">
                                    <Icon.IconEmp />
                                </div>
                                <img src={img.emp4} alt="member-photo" />
                            </div>
                            <div className="conetnt">
                                <h4>صالح بن محمد المطلق</h4>
                                <p>عضو مجلس الإدارة</p>
                            </div>
                        </Col>
                        <Col xl={8} lg={8} md={12} sm={24} xs={24} >

                            <div className="member-card" >
                                <div className="svg-icon">
                                    <Icon.IconEmp />
                                </div>
                                <img src={img.emp5} alt="member-photo" />
                            </div>
                            <div className="conetnt">
                                <h4>صالح بن محمد المطلق</h4>
                                <p>عضو مجلس الإدارة</p>
                            </div>
                        </Col>
                        <Col xl={8} lg={8} md={12} sm={24} xs={24} >
                            <div className="member-card" >
                                <div className="svg-icon">
                                    <Icon.IconEmp />
                                </div>
                                <img src={img.emp6} alt="member-photo" />
                            </div>
                            <div className="conetnt">
                                <h4>صالح بن محمد المطلق</h4>
                                <p>عضو مجلس الإدارة</p>
                            </div>
                        </Col>


                    </Row>
                </main>
            </div>
        </div>
    )
}

export default Board
