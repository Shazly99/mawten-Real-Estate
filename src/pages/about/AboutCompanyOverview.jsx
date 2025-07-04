import TitleH from "@components/common/TitleH";
import img from "@constants/img";
import { Col, Row } from "antd";
import { useLocation } from "react-router-dom";
import './about.scss';
const AboutCompanyOverview = () => {
    let lang = useLocation()
    return (
        <div className="company-overview company-overview_about ">
            <div className="container_main_90">
                <header className="header_section" >
                    <TitleH highlight={'خبرتنا وتفانينا في العمل'} />
                    <p>تمكّننا من كسب ثقة عملائنا وحلفاءنا ومساهمينا</p>
                 </header>
                <Row className="app_overview__about_us" >
                    <Col xl={12} md={12} className="image-container h-full">
                        <img src={img.CompanyOverview} alt="City in Hand" />
                    </Col>
                    <Col xl={12} md={12} className="content">
                        {/* الرؤية */}
                        <div className="section header_svg ">
                            <TitleH highlight={" رؤيتنا"} className="text-4xl font-bold text-gray-900" />
                            <p>الريادة في صناعة الحلول العقارية المبتكرة وقيادة التحالفات.</p>
                        </div>

                        {/* المهمة */}
                        <div className="section header_svg">
                            <TitleH highlight={" مهمتنا"} />
                            <p>تطوير حلول عقارية مبتكرة بجودة عالية تشكل إضافة للمجتمع وتخدم عملاءها ومساهميها من خلال خبرات مهنية متفردة ضمن بيئة عمل محفزة.</p>
                        </div>
                    </Col>
                </Row>
                <div className="content">

                    <div className="section section_last_about header_svg ">
                        <TitleH highlight={"  استراتيجيتنا   "} className="text-4xl font-bold text-gray-900" />
                        <p className="sub_title" >ننوّع الاستثمارات العقارية .. لنعزّز النمو والاستدامة</p>
                        <p className="last_title" >تنفرد موطن العقارية بتنوع أصولها العقارية التي تهدف من خلالها إلى تحقيق إيرادات متنوعة تضمن نمواً مستداماً وعائدات مجزية لمساهميها، حيث تركز استراتيجية موطن على الاستثمار في عدة قطاعات عقارية نوعية تحظى بطلب متزايد وتنويع محفظتها الاستثمارية من خلال تطوير عقارات سكنية التي تستهدف الطلب المتزايد من الأسر السعودية، وكذلك العقارات التجارية متعددة الاستعمالات، والعقارات الصناعية واللوجستية بإنشاء المصانع الجاهزة والمستودعات المتخصصة، إضافة إلى عقارات الضيافة المتمثلة في تطوير فنادق اقتصادية ذات جودة عالية بالشراكة مع أشهر الأسماء العالمية. وفي ذات الوقت تتكامل استراتيجية موطن لإدارة المخاطر مع استراتيجيتها الاستثمارية من خلال سعيها لضمان استمرارية أعمالها بسلاسة والحفاظ على التوازن المالي، عبر تبنى سياسة الاستثمار في مشاريع عقارية نوعية تسهم في تحقيق نمو متوازن مع تعظيم العوائد للمساهمين، والدخول في تحالفات قوية واستراتيجية تضمن نجاح المشاريع المستهدفة، وكذلك تملك مشاريع تحقق ايرادات متكررة ومجزية، مع العمل بشكل مستمر على بناء قاعدة متينة من العملاء في مختلف القطاعات التي تستهدفها.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutCompanyOverview
