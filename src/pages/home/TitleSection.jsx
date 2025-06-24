import TitleH from "@components/common/TitleH";
import { Col, Row } from "antd";
import { useTranslation } from 'react-i18next';
import CustomButton from './../../components/common/CustomButton';

const TitleSection = () => {
    let { t } = useTranslation()
    return (
        <div className="home-container bg-gray-100  ">
            {/* Top Section */}
            <div className="title_container">
                <Row gutter={[20, 20]} className="top-section flex   ">
                    <Col xl={10} md={12} xs={24} sm={24}>
                        {/* Content Section */}
                        <div className=" header_section">
                            <TitleH title={t('mawten')} className="text-4xl font-bold text-gray-900" />
                        </div>
                        <div className="content  mt-4">
                            <h2 className="title  font-bold " >نُطَوِّرْ لِيَنْموْ الْوَطَنْ</h2>
                        </div>

                    </Col>
                    <div className="sm_none">
                        <Col xl={2} md={24} xs={24} sm={24}></Col>
                    </div>

                    <Col xl={11} md={12} xs={24} sm={24}  >
                        {/* Description */}
                        <p>روّاد في التطوير العقاري بالمملكة العربية السعودية، بدأنا بمبادرة من غرفة التجارة والصناعة بالرياض في عام 2007م كشركة مساهمة مقفلة برأس مال مدفوع يبلغ 1,1 مليار ريال سعودي عبر نخبة من المستثمرين والأسماء العقارية العريقة
                        </p>
                    </Col>
                </Row>
                <a href="https://www.mawten-sa.com/Mawten%20Profile_Arb.pdf" target="_blank" rel="noopener noreferrer">
                    <CustomButton title={'ملف تعريفي'} />
                </a>

            </div>
        </div>)
}

export default TitleSection