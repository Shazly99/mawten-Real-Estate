import TitleH from '@components/common/TitleH'
import img from '@constants/img'
import { Col, Row } from 'antd'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './services.scss'

const Services = () => {
    let { t } = useTranslation()

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

    return (
        <div className='app_services'>
            <header>
                <div className="content">
                    <TitleH title={t('nav_service')} />
                    <p>تتمتع شركة موطن العقارية بخبرات عميقة وكفاءات بشرية مؤهلة في مختلف المجالات في القطاع العقاري ما يمكنها من تقديم خدماتها التالية</p>
                </div>
                <img src={img.headerImg} className='headerImg' alt="" />
                <div className="left">
                    <img src={img.left} alt="" />
                </div>
                <div className="right">
                    <img src={img.right} alt="" />
                </div>
            </header>


            <main className='mb-8'>
                <Row gutter={[16, 16]} className='h-full mt-8'>
                    <Col xl={12} lg={12} xxl={12} md={24} xs={24} sm={24} className='h_services' >
                        <img src={img.services1} className='w-full p-6' alt="" />
                    </Col>
                    <Col xl={11} offset={1} lg={11} xxl={11} md={24} xs={24} sm={24} className='h_services' >
                        <div className="services_content">
                            <TitleH title={'التطوير '} highlight={'العقــاري'} />
                            <p>النشاط الأساسي لشركة موطن العقارية، ويشمل تطوير العقارات السكنية والتجارية والصناعية واللوجستية والضيافة، حيث تتولى الشركة عملية تطوير المشروع ابتداء من دراسة الجدوى مروراً بتطوير فكرة المشروع وتصميمه، وتطوير النموذج المالي للمشروع، ثم إدارة عملية التطوير، وانتهاءً بعملية تسويق وبيع المشروع أو تأجيره واضافته لمحفظة الشركة الاستثمارية</p>
                        </div>
                    </Col>
                </Row>


                <Row gutter={[16, 16]} className='h-full mt-8'>
                    <Col xl={11} offset={1} lg={11} xxl={11} md={24} xs={24} sm={24} className='h_services' >
                        <div className="services_content">
                            <TitleH title={'الاستثمار '} highlight={'العقــاري'} />
                            <p>تستهدف موطن العقارية اقتناص الفرص الاستثمارية المجدية والتي تحقق عوائد مجزية للشركة ومساهميها، حيث تعمل على خلق الفرص الاستثمارية إما بالمشاركة في شركات ومشاريع عقارية أو الاستحواذ على شركات تعمل في مجالات عقارية، أو من خلال المشاركة في تأسيس كيانات مالية تخدم توجهات الشركة مثل شركات الاستثمار المالي العقاري والصناديق المالية العقارية</p>
                        </div>
                    </Col>
                    <Col xl={12} lg={12} xxl={12} md={24} xs={24} sm={24} className='h_services' >
                        <img src={img.services2} className='w-full p-5' alt="" />
                    </Col>
                </Row>

                <Row gutter={[16, 16]} className='h-full mt-8'>
                    <Col xl={12} lg={12} xxl={12} md={24} xs={24} sm={24} className='h_services_2 mt-8' >
                        <img src={img.services3} className='w-full' alt="" />
                    </Col>
                    <Col xl={11} offset={1} lg={11} xxl={11} md={24} xs={24} sm={24} className='h_services' >
                        <div className="services_content">
                            <TitleH title={'إدارة  '} highlight={'  الأملاك'} />
                            <p>تسعى الشركة لتكوين محفظة أصول صلبة تعظم من الإيرادات المالية المتكررة والمستدامة من خلال عمليات التأجير والإدارة والتشغيل لهذه الأصول، كما تقوم الشركة بإدارة أملاك الغير والاستفادة من خبراتها في تحقيق أقصى العوائد المالية لمالكيها</p>
                        </div>
                    </Col>
                </Row>

                <Row gutter={[16, 16]} className='h-full  mb-8'>
                    <Col xl={11} offset={1} lg={11} xxl={11} md={24} xs={24} sm={24} className='h_services_2' >
                        <div className="services_content">
                            <TitleH title={' التسويق '} highlight={'والمبيعات'} />
                            <p>تحظى موطن العقارية بكفاءات بشرية في مجال التسويق والمبيعات تتمتع بقدرات تسويقية وبيعية عالية عبر فريق عمل تنفيذي ذو خبرة عميقة في المجال العقاري وتطوير الخطط الاستراتيجية التسويقية لمشاريع الشركة أو مشاريع الغير</p>
                        </div>
                    </Col>
                    <Col xl={12} lg={12} xxl={12} md={24} xs={24} sm={24} className='h_services_2' >
                        <img src={img.services4} className='w-full' alt="" />
                    </Col>
                </Row>
            </main>
        </div>
    )
}

export default Services
