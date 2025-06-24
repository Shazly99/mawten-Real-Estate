import TitleH from '@components/common/TitleH';
import img from '@constants/img';
import { Col, Row } from 'antd';


const values = [
    {
        title: 'الإبتكار والتميز',
        description: 'نشجع ثقافة الابتكار في العمل ونحفز الحلول الإبداعية مع المداومة على انجاز أعمالنا عبر التعلم وتحسين الكفاءة التي تحقق لنا التميز.',
        img:img.value1
    },
    {
        title: 'الجودة والحيوية',
        description: 'نتطلع باستمرار إلى أداء أعمالنا بأفضل الطرق والأساليب والاستمرار في تحسينها بشكل مستمر من خلال رؤية جديدة وذكية ومبتكرة بشكل متجدد وحيوي.',
        img:img.value2
    },
    {
        title: 'التعاون والإحترام',
        description: 'نعمل بروح الجماعة ونتعاون بشفافية ونتبادل المعارف والمهارات ليكون موظفونا الأفضل، ونكتسب الاحترام من خلال التزامنا بالعدل والثقة والنزاهة في جميع علاقاتنا',
        img:img.value2
    },
    {
        title: 'التفاني والتفوق',
        description: 'نفخر بعملنا ونجتهد دوماً لتحقيق نتائج مميزة، ونتميز في إنجاز أعمالنا ونقدم خدماتنا بانتظام أفضل مستويات الجودة التي تلبي تطلعات عملائنا.',
        img:img.value4
    },
    {
        title: 'النزاهة والشفافية',
        description: 'نعمل بروح الجماعة ونتعاون بشفافية ونتبادل المعارف والمهارات ليكون موظفونا الأفضل، ونكتسب الاحترام من خلال التزامنا بالعدل والثقة والنزاهة في جميع علاقاتنا',
        img:img.value5
    }
];

const Value = () => {
    return (
        <div className='app_value container_main_90  mt-8 mb-5'>
            <header className='header_section' >
                <TitleH title={'قــيمنا'} />
            </header>

            <div className='values-container mt-6'>
                <Row gutter={[50, 50]} className='values-grid'>
                    {values?.map((value, index) => (
                        <Col xl={value} lg={index == 4 ? 24 : 12} sm={24} xs={24} key={index} >
                            <Row  className='value-card flex justify-content-center align-items-center'>
                                <Col xl={24}>
                                    <h3 className='value-title'>{value.title}</h3>
                                    <p className='value-description'>{value.description}</p>
                                </Col>
                            </Row>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}

export default Value
