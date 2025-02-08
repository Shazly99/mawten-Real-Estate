import CustomButton from "@components/common/CustomButton";
import TitleH from "@components/common/TitleH";
import img from "@constants/img";
import { Col, Row } from "antd";
import { useLocation } from "react-router-dom";


const CompanyOverview = () => {
  let lang = useLocation()
  return (
    <div className="company-overview">
      <div className="container_main_90">
        <Row >
          <Col xl={12} md={12} className="image-container">
            <img src={img.CompanyOverview} alt="City in Hand" />
          </Col>
          <Col xl={12} md={12} className="content">
            {/* الرؤية */}
            <div className="section">
              <TitleH highlight={" رؤيتنا"} className="text-4xl font-bold text-gray-900" />
              <p>الريادة في صناعة الحلول العقارية المبتكرة وقيادة التحالفات.</p>
            </div>

            {/* المهمة */}
            <div className="section">
              <TitleH highlight={" مهمتنا"} />
              <p>تطوير حلول عقارية مبتكرة بجودة عالية تشكل إضافة للمجتمع وتخدم عملاءها ومساهميها من خلال خبرات مهنية متفردة ضمن بيئة عمل محفزة.</p>
            </div>

            {/* استراتيجية الشركة */}
            <div className="section">
              <TitleH highlight={"  استراتيجية الشركة"} className="text-4xl font-bold text-gray-900" />
              <p>  تنفرد موطن العقارية بتنوع أصولها العقارية التي تهدف من خلالها إلى تحقيق إيرادات متنوعة تضمن نمواً مستداماً وعائدات مجزية لمساهميها، حيث تركز استراتيجية موطن على الاستثمار في عدة قطاعات عقارية نوعية تحظى بطلب متزايد وتنويع محفظتها الاستثمارية من خلال تطوير عقارات سكنية التي تستهدف الطلب المتزايد من الأسر السعودية، وكذلك العقارات التجارية متعددة الاستعمالات، والعقارات الصناعية واللوجستية بإنشاء المصانع الجاهزة والمستودعات المتخصصة، إضافة إلى عقارات الضيافة المتمثلة في تطوير فنادق اقتصادية ذات جودة عالية بالشراكة مع أشهر الأسماء العالمية. </p>
            </div>
            {
              lang.pathname != '/about' &
              <CustomButton />
            }
          </Col>
        </Row>
      </div>
    </div> 
  );
};

export default CompanyOverview;
