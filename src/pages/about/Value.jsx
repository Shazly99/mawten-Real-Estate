import TitleH from '@components/common/TitleH';
import img from '@constants/img';
import { Col, Row } from 'antd';


const values = [
    {
        title: 'الإبتكار والتميز',
        description: 'نسعى لتحقيق الابتكار في العمل ونوفر الحلول الإبداعية مع التميز في تقديم أعمالنا لنحقق الكفاءة التي تحقق لنا النجاح.',
        img:img.value1
    },
    {
        title: 'الجودة والحيوية',
        description: 'نلتزم باستمرار إلى أداء أعمالنا بأفضل الطرق والأساليب والابتكار بما يساعدنا في تحقيق نتائج متميزة من خلال رؤية جديدة وأفكار متجددة بمنهجية متجددة ومرنة.',
        img:img.value2
    },
    {
        title: 'التعاون والإحترام',
        description: 'نحترم الروح الجماعية ونتعاون مع زملائنا وشركائنا التجاريين ونعمل على تحقيق نتائج إيجابية من خلال التعاون المثمر والهادف والمبني على روح الفريق.',
        img:img.value2
    },
    {
        title: 'الشفافية والتفوق',
        description: 'نعمل بوضوح واجتهاد، حيث أن أعمالنا نتائج مميزة، ونسعى في إنجاز أعمالنا بأفضل كفاءة لنحقق أهدافنا ونلتزم بأعلى مستويات الجودة التي تلبي تطلعات عملائنا.',
        img:img.value4
    },
    {
        title: 'الزراعة والشاملة',
        description: 'نعمل عبر الصناعة والعالم وندير المشاريع لتكون موضوعة للأفضل ونكتسب الخبرة من خلال التوازن بين النجاح والنمو والريادة في جميع أعمالنا.',
        img:img.value5
    }
];

const Value = () => {
    return (
        <div className='app_value container_main_90  '>
            <header  >
                <TitleH title={'قــيمنا'} />
            </header>

            <div className='values-container mt-6'>
                <Row gutter={[50, 50]} className='values-grid'>
                    {values?.map((value, index) => (
                        <Col xl={value} lg={index == 4 ? 24 : 12} sm={24} xs={24} key={index} >
                            <Row  className='value-card flex justify-content-center align-items-center'>
                                <Col xl={2}  >
                                    <div className='icon-container'>
                                        <img src={value.img} alt="" srcset="" />
                                    </div>
                                </Col> 

                                <Col xl={20} offset={2}  >
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
