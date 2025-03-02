import OverlayHeader from '@components/common/OverlayHeader';
import TitleH from '@components/common/TitleH';
import img from '@constants/img'; // Path to your images if needed
import { Button, Col, Row, Slider, Typography } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './mission.scss';
const { Title, Text } = Typography;
const Mission = () => {
    const { t } = useTranslation();
    const years = ['2007', '2010', '2012', '2015', '2016', '2017', '2018', '2020', '2021', '2022', '2023'];
    const [selectedYearIndex, setSelectedYearIndex] = useState(0);

    const handleSliderChange = (value) => {
        setSelectedYearIndex(value);
    };

    // Navigate to the next year
    const handleNextYear = () => {
        const nextIndex = (selectedYearIndex + 1) % years.length;
        setSelectedYearIndex(nextIndex);
    };

    // Navigate to the previous year
    const handlePrevYear = () => {
        const prevIndex = (selectedYearIndex - 1 + years.length) % years.length;
        setSelectedYearIndex(prevIndex);
    };

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
        <div className="mission_bg">


            <div className="app__mission">
                <div className="app__mission">

                    <OverlayHeader img={img.aboutCover} header={t('AboutMawten')} breadcrumbItems={breadcrumbItems} />

                    <header className="flex justify-center align-items-center">
                        <TitleH title={t('history')} highlight={t('mawten')} />
                        <p>
                            منذ العام 2007م تمكنت موطن العقارية من بناء سجل حافل بالإنجازات وامدت السوق العقارية
                            بمشاريع نوعية مكنتها أن تصبح واحدة من كبرى شركات التطوير العقاري في المملكة العربية السعودية
                        </p>
                    </header>
                </div>

                <div className="timeline__history">
                    <Row justify="center" align="middle" className="timeline-row">
                        <Col span={24} className="timeline-col" dir='rtl'>
                            <div className="timeline-nav">
                                <div className="timeline_next_btn">
                                    <Button
                                        icon={
                                            <svg width="11" height="14" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path id="Arrow 9" d="M12.7071 8.70699C13.0976 8.31646 13.0976 7.6833 12.7071 7.29277L6.34315 0.92881C5.95262 0.538286 5.31946 0.538286 4.92893 0.92881C4.53841 1.31933 4.53841 1.9525 4.92893 2.34302L10.5858 7.99988L4.92893 13.6567C4.53841 14.0473 4.53841 14.6804 4.92893 15.0709C5.31946 15.4615 5.95262 15.4615 6.34315 15.0709L12.7071 8.70699ZM-3.39767e-08 8.99988L1.5 8.99988L1.5 6.99988L3.39767e-08 6.99988L-3.39767e-08 8.99988ZM4.5 8.99988L7.5 8.99988L7.5 6.99988L4.5 6.99988L4.5 8.99988ZM10.5 8.99988L12 8.99988L12 6.99988L10.5 6.99988L10.5 8.99988ZM12.7071 8.70699C13.0976 8.31646 13.0976 7.6833 12.7071 7.29277L6.34315 0.92881C5.95262 0.538286 5.31946 0.538286 4.92893 0.92881C4.53841 1.31933 4.53841 1.9525 4.92893 2.34302L10.5858 7.99988L4.92893 13.6567C4.53841 14.0473 4.53841 14.6804 4.92893 15.0709C5.31946 15.4615 5.95262 15.4615 6.34315 15.0709L12.7071 8.70699ZM-3.39767e-08 8.99988L1.5 8.99988L1.5 6.99988L3.39767e-08 6.99988L-3.39767e-08 8.99988ZM4.5 8.99988L7.5 8.99988L7.5 6.99988L4.5 6.99988L4.5 8.99988ZM10.5 8.99988L12 8.99988L12 6.99988L10.5 6.99988L10.5 8.99988Z" fill="white" />
                                            </svg>
                                        }
                                        onClick={handleNextYear}
                                        disabled={selectedYearIndex === years.length - 1} // Disable when at the last year
                                        type='primary'
                                    />
                                </div>

                                <Slider
                                    min={0}
                                    max={years.length - 1}
                                    value={selectedYearIndex}
                                    onChange={handleSliderChange}
                                    marks={years.reduce((acc, year, index) => {
                                        acc[index] = year;
                                        return acc;
                                    }, {})}
                                    step={1}
                                    tooltipVisible
                                />
                                <div className="timeline_prev_btn">
                                    <Button
                                        icon={
                                            <svg width="11" height="14" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path id="Arrow 11" d="M0.292893 8.70699C-0.0976311 8.31646 -0.0976311 7.6833 0.292893 7.29277L6.65685 0.92881C7.04738 0.538286 7.68054 0.538286 8.07107 0.92881C8.46159 1.31933 8.46159 1.9525 8.07107 2.34302L2.41421 7.99988L8.07107 13.6567C8.46159 14.0473 8.46159 14.6804 8.07107 15.0709C7.68054 15.4615 7.04738 15.4615 6.65685 15.0709L0.292893 8.70699ZM13 8.99988L11.5 8.99988L11.5 6.99988L13 6.99988L13 8.99988ZM8.5 8.99988L5.5 8.99988L5.5 6.99988L8.5 6.99988L8.5 8.99988ZM2.5 8.99988L1 8.99988L1 6.99988L2.5 6.99988L2.5 8.99988ZM0.292893 8.70699C-0.0976311 8.31646 -0.0976311 7.6833 0.292893 7.29277L6.65685 0.92881C7.04738 0.538286 7.68054 0.538286 8.07107 0.92881C8.46159 1.31933 8.46159 1.9525 8.07107 2.34302L2.41421 7.99988L8.07107 13.6567C8.46159 14.0473 8.46159 14.6804 8.07107 15.0709C7.68054 15.4615 7.04738 15.4615 6.65685 15.0709L0.292893 8.70699ZM13 8.99988L11.5 8.99988L11.5 6.99988L13 6.99988L13 8.99988ZM8.5 8.99988L5.5 8.99988L5.5 6.99988L8.5 6.99988L8.5 8.99988ZM2.5 8.99988L1 8.99988L1 6.99988L2.5 6.99988L2.5 8.99988Z" fill="black" fill-opacity="0.3" />
                                            </svg>
                                        }
                                        onClick={handlePrevYear}
                                        className="timeline-nav-btn"
                                        disabled={selectedYearIndex === 0} // Disable when at the first year
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

            </div>
            <div className="timeline_auto">

                {
                    selectedYearIndex == 0 &&
                    <Row gutter={[50, 50]} className="timeline-section">
                        {/* Right Column with Image */}
                        <Col span={24} xs={24} sm={24} md={16} lg={12} xl={12}
                            className='flex justify-content-end align-items-end'
                        >
                            <div className="timeline-image">
                                <img src={img.mission2017} alt="Timeline" className="w-full rounded-lg shadow-lg" />
                            </div>
                        </Col>

                        {/* Left Column with Text */}
                        <Col span={24} xs={24} sm={24} md={16} lg={12} xl={12}>
                            <div className="timeline-text">
                                <Row className="timeline_year">
                                    {/* Year 2008 */}
                                    <Col>
                                        <Text className="timeline-year">2008</Text>
                                    </Col>

                                    {/* Timeline line with circles */}
                                    <Col className="timeline-line">
                                        <div className="circle  circle1" />
                                        <div className="line" />
                                        <div className="circle circle2" />
                                    </Col>

                                    {/* Year 2007 */}
                                    <Col>
                                        <Text className="timeline-year">2007</Text>
                                    </Col>
                                </Row>
                                <Text className="text-base" style={{ lineHeight: 1.7 }}>
                                    منذ العام 2007م تمكنت موطن العقارية من بناء سجل حافل بالإنجازات وامدت السوق العقارية بمشاريع نوعية مكنتها أن تصبح واحدة من كبرى شركات التطوير العقاري في المملكة العربية السعودية
                                </Text>
                            </div>
                        </Col>
                    </Row>
                }

                {
                    selectedYearIndex == 1 &&
                    <Row gutter={[50, 50]} className="timeline-section">
                        {/* Right Column with Image */}
                        <Col span={24} xs={24} sm={24} md={16} lg={12} xl={12}
                            className='flex justify-content-end align-items-end'
                        >
                            <div className="timeline-image">
                                <img src={img.mission2017} alt="Timeline" className="w-full rounded-lg shadow-lg" />
                            </div>
                        </Col>

                        {/* Left Column with Text */}
                        <Col span={24} xs={24} sm={24} md={16} lg={12} xl={12}>
                            <div className="timeline-text">
                                <Row className="timeline_year">
                                    {/* Year 2008 */}
                                    <Col>
                                        <Text className="timeline-year">2010</Text>
                                    </Col>

                                    {/* Timeline line with circles */}
                                    <Col className="timeline-line">
                                        <div className="circle  circle1" />
                                        <div className="line" />
                                        <div className="circle circle2" />
                                    </Col>

                                    {/* Year 2007 */}
                                    <Col>
                                        <Text className="timeline-year">2009</Text>
                                    </Col>
                                </Row>
                                <Text className="text-base" style={{ lineHeight: 1.7 }}>
                                    2010 إطلاق مشروع مدينة البوابة الصناعية بمدينة الرياض بمساحة 6 ملايين متر مربع كأكبر مدينة صناعية خاصة في الشرق الأوسط                                </Text>
                            </div>
                        </Col>
                    </Row>
                }

                {
                    selectedYearIndex == 2 &&
                    <Row gutter={[50, 50]} className="timeline-section">
                        {/* Right Column with Image */}
                        <Col span={24} xs={24} sm={24} md={16} lg={12} xl={12}
                            className='flex justify-content-end align-items-end'
                        >
                            <div className="timeline-image">
                                <img src={img.mission2017} alt="Timeline" className="w-full rounded-lg shadow-lg" />
                            </div>
                        </Col>

                        {/* Left Column with Text */}
                        <Col span={24} xs={24} sm={24} md={16} lg={12} xl={12}>
                            <div className="timeline-text">
                                <Row className="timeline_year">
                                    {/* Year 2008 */}
                                    <Col>
                                        <Text className="timeline-year">2012</Text>
                                    </Col>

                                    {/* Timeline line with circles */}
                                    <Col className="timeline-line">
                                        <div className="circle  circle1" />
                                        <div className="line" />
                                        <div className="circle circle2" />
                                    </Col>

                                    {/* Year 2007 */}
                                    <Col>
                                        <Text className="timeline-year">2011</Text>
                                    </Col>
                                </Row>
                                <Text className="text-base" style={{ lineHeight: 1.7 }}>
                                    2012 إطلاق مشروع مخطط المعالي في مدينة الرياض على مساحة تتجاوز 1,5 مليون متر مربع                                </Text>
                            </div>
                        </Col>
                    </Row>
                }

                {
                    selectedYearIndex == 3 &&
                    <Row gutter={[50, 50]} className="timeline-section">
                        {/* Right Column with Image */}
                        <Col span={24} xs={24} sm={24} md={16} lg={12} xl={12}
                            className='flex justify-content-end align-items-end'
                        >
                            <div className="timeline-image">
                                <img src={img.mission2017} alt="Timeline" className="w-full rounded-lg shadow-lg" />
                            </div>
                        </Col>

                        {/* Left Column with Text */}
                        <Col span={24} xs={24} sm={24} md={16} lg={12} xl={12}>
                            <div className="timeline-text">
                                <Row className="timeline_year">
                                    {/* Year 2008 */}
                                    <Col>
                                        <Text className="timeline-year">2015</Text>
                                    </Col>

                                    {/* Timeline line with circles */}
                                    <Col className="timeline-line">
                                        <div className="circle  circle1" />
                                        <div className="line" />
                                        <div className="circle circle2" />
                                    </Col>

                                    {/* Year 2007 */}
                                    <Col>
                                        <Text className="timeline-year">2013</Text>
                                    </Col>
                                </Row>
                                <Text className="text-base" style={{ lineHeight: 1.7 }}>
                                    منذ العام 2015م تمكنت موطن العقارية من بناء سجل حافل بالإنجازات وامدت السوق العقارية بمشاريع نوعية مكنتها أن تصبح واحدة من كبرى شركات التطوير العقاري في المملكة العربية السعودية
                                </Text>
                            </div>
                        </Col>
                    </Row>
                }

                {
                    selectedYearIndex == 3 &&
                    <Row gutter={[50, 50]} className="timeline-section">
                        {/* Right Column with Image */}
                        <Col span={24} xs={24} sm={24} md={16} lg={12} xl={12}
                            className='flex justify-content-end align-items-end'
                        >
                            <div className="timeline-image">
                                <img src={img.mission2017} alt="Timeline" className="w-full rounded-lg shadow-lg" />
                            </div>
                        </Col>

                        {/* Left Column with Text */}
                        <Col span={24} xs={24} sm={24} md={16} lg={12} xl={12}>
                            <div className="timeline-text">
                                <Row className="timeline_year">
                                    {/* Year 2008 */}
                                    <Col>
                                        <Text className="timeline-year">2015</Text>
                                    </Col>

                                    {/* Timeline line with circles */}
                                    <Col className="timeline-line">
                                        <div className="circle  circle1" />
                                        <div className="line" />
                                        <div className="circle circle2" />
                                    </Col>

                                    {/* Year 2007 */}
                                    <Col>
                                        <Text className="timeline-year">2013</Text>
                                    </Col>
                                </Row>
                                <div className="list_misson">
                                    <ul>
                                        <li>2015 اكتمال تطوير مشروع فندق موطن لمار في مكة المكرمة يتكون من 614 غرفة وجناح فندقي بالقرب من الحرم المكي الشريف</li>
                                        <li>2015 تدشين المقر الرئيسي الجديد لشركة موطن العقارية بمدينة الرياض</li>
                                    </ul>
                                </div>

                            </div>
                        </Col>
                    </Row>
                }

                {
                    selectedYearIndex == 4 &&
                    <Row gutter={[50, 50]} className="timeline-section">
                        {/* Right Column with Image */}
                        <Col span={24} xs={24} sm={24} md={16} lg={12} xl={12}
                            className='flex justify-content-end align-items-end'
                        >
                            <div className="timeline-image">
                                <img src={img.mission2017} alt="Timeline" className="w-full rounded-lg shadow-lg" />
                            </div>
                        </Col>

                        {/* Left Column with Text */}
                        <Col span={24} xs={24} sm={24} md={16} lg={12} xl={12}>
                            <div className="timeline-text">
                                <Row className="timeline_year">
                                    {/* Year 2008 */}
                                    <Col>
                                        <Text className="timeline-year">2016</Text>
                                    </Col>

                                    {/* Timeline line with circles */}
                                    <Col className="timeline-line">
                                        <div className="circle  circle1" />
                                        <div className="line" />
                                        <div className="circle circle2" />
                                    </Col>

                                    {/* Year 2007 */}
                                    <Col>
                                        <Text className="timeline-year">2015</Text>
                                    </Col>
                                </Row>
                                <div className="list_misson">
                                    <ul>
                                        <li>2016 تدشين مشروع مجمع توق الدار لإسكان القوى العاملة بالمدينة الصناعية في الرياض</li>
                                        <li>2016افتتاح أكبر مدينة صناعية خاصة في الشرق الأوسط بمدينة الرياض برعاية معالي وزير التجارة والصناعة</li>

                                    </ul>
                                </div>

                            </div>
                        </Col>
                    </Row>
                }


                {
                    selectedYearIndex == 5 &&
                    <Row gutter={[50, 50]} className="timeline-section">
                        {/* Right Column with Image */}
                        <Col span={24} xs={24} sm={24} md={16} lg={12} xl={12}
                            className='flex justify-content-end align-items-end'
                        >
                            <div className="timeline-image">
                                <img src={img.mission2017} alt="Timeline" className="w-full rounded-lg shadow-lg" />
                            </div>
                        </Col>

                        {/* Left Column with Text */}
                        <Col span={24} xs={24} sm={24} md={16} lg={12} xl={12}>
                            <div className="timeline-text">
                                <Row className="timeline_year">
                                    {/* Year 2008 */}
                                    <Col>
                                        <Text className="timeline-year">2017</Text>
                                    </Col>

                                    {/* Timeline line with circles */}
                                    <Col className="timeline-line">
                                        <div className="circle  circle1" />
                                        <div className="line" />
                                        <div className="circle circle2" />
                                    </Col>

                                    {/* Year 2007 */}
                                    <Col>
                                        <Text className="timeline-year">2016</Text>
                                    </Col>
                                </Row>
                                <div className="list_misson">
                                    <ul>
                                        <li>2017 اكتمال مشروع مستودعات الخمرة في مدينة جدة</li>
                                        <li>2017 موطن العقارية تحصد جائزة سيتي سكيب العالمية لأفضل مشروع فندقي للأسواق الناشئة (هيلتون دبل تري وجاردن ان المركز المالي)</li>
                                        <li>2017 إطلاق الهوية الجديدة لشركة موطن العقارية</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                }


                {
                    selectedYearIndex == 6 &&
                    <Row gutter={[50, 50]} className="timeline-section">
                        {/* Right Column with Image */}
                        <Col span={24} xs={24} sm={24} md={16} lg={12} xl={12}
                            className='flex justify-content-end align-items-end'
                        >
                            <div className="timeline-image">
                                <img src={img.mission2017} alt="Timeline" className="w-full rounded-lg shadow-lg" />
                            </div>
                        </Col>

                        {/* Left Column with Text */}
                        <Col span={24} xs={24} sm={24} md={16} lg={12} xl={12}>
                            <div className="timeline-text">
                                <Row className="timeline_year">
                                    {/* Year 2008 */}
                                    <Col>
                                        <Text className="timeline-year">2018</Text>
                                    </Col>

                                    {/* Timeline line with circles */}
                                    <Col className="timeline-line">
                                        <div className="circle  circle1" />
                                        <div className="line" />
                                        <div className="circle circle2" />
                                    </Col>

                                    {/* Year 2007 */}
                                    <Col>
                                        <Text className="timeline-year">2017</Text>
                                    </Col>
                                </Row>
                                <Text className="text-base" style={{ lineHeight: 1.7 }}>
                                    2018 اكتمال تطوير مشروع ربوة المطلات في مكة المكرمة على مساحة تقارب نصف مليون متر مربع                                </Text>
                            </div>
                        </Col>
                    </Row>
                }


                {
                    selectedYearIndex == 7 &&
                    <Row gutter={[50, 50]} className="timeline-section">
                        {/* Right Column with Image */}
                        <Col span={24} xs={24} sm={24} md={16} lg={12} xl={12}
                            className='flex justify-content-end align-items-end'
                        >
                            <div className="timeline-image">
                                <img src={img.mission2017} alt="Timeline" className="w-full rounded-lg shadow-lg" />
                            </div>
                        </Col>

                        {/* Left Column with Text */}
                        <Col span={24} xs={24} sm={24} md={16} lg={12} xl={12}>
                            <div className="timeline-text">
                                <Row className="timeline_year">
                                    {/* Year 2008 */}
                                    <Col>
                                        <Text className="timeline-year">2020</Text>
                                    </Col>

                                    {/* Timeline line with circles */}
                                    <Col className="timeline-line">
                                        <div className="circle  circle1" />
                                        <div className="line" />
                                        <div className="circle circle2" />
                                    </Col>

                                    {/* Year 2007 */}
                                    <Col>
                                        <Text className="timeline-year">2019</Text>
                                    </Col>
                                </Row>
                                <Text className="text-base" style={{ lineHeight: 1.7 }}>
                                    2020 افتتاح المرحلة الأولى من مشروع المصانع الجاهزة بمدينة الرياض                                </Text>
                            </div>
                        </Col>
                    </Row>
                }

                {
                    selectedYearIndex == 8 &&
                    <Row gutter={[50, 50]} className="timeline-section">
                        {/* Right Column with Image */}
                        <Col span={24} xs={24} sm={24} md={16} lg={12} xl={12}
                            className='flex justify-content-end align-items-end'
                        >
                            <div className="timeline-image">
                                <img src={img.mission2017} alt="Timeline" className="w-full rounded-lg shadow-lg" />
                            </div>
                        </Col>

                        {/* Left Column with Text */}
                        <Col span={24} xs={24} sm={24} md={16} lg={12} xl={12}>
                            <div className="timeline-text">
                                <Row className="timeline_year">
                                    {/* Year 2008 */}
                                    <Col>
                                        <Text className="timeline-year">2021</Text>
                                    </Col>

                                    {/* Timeline line with circles */}
                                    <Col className="timeline-line">
                                        <div className="circle  circle1" />
                                        <div className="line" />
                                        <div className="circle circle2" />
                                    </Col>

                                    {/* Year 2007 */}
                                    <Col>
                                        <Text className="timeline-year">2020</Text>
                                    </Col>
                                </Row>
                                <Text className="text-base" style={{ lineHeight: 1.7 }}>
                                    2021 افتتاح فندق هيلتون جاردن ان المركز المالي بمدينة الرياض                                </Text>
                            </div>
                        </Col>
                    </Row>
                }


                {
                    selectedYearIndex == 9 &&
                    <Row gutter={[50, 50]} className="timeline-section">
                        {/* Right Column with Image */}
                        <Col span={24} xs={24} sm={24} md={16} lg={12} xl={12}
                            className='flex justify-content-end align-items-end'
                        >
                            <div className="timeline-image">
                                <img src={img.mission2017} alt="Timeline" className="w-full rounded-lg shadow-lg" />
                            </div>
                        </Col>

                        {/* Left Column with Text */}
                        <Col span={24} xs={24} sm={24} md={16} lg={12} xl={12}>
                            <div className="timeline-text">
                                <Row className="timeline_year">
                                    {/* Year 2008 */}
                                    <Col>
                                        <Text className="timeline-year">2022</Text>
                                    </Col>

                                    {/* Timeline line with circles */}
                                    <Col className="timeline-line">
                                        <div className="circle  circle1" />
                                        <div className="line" />
                                        <div className="circle circle2" />
                                    </Col>

                                    {/* Year 2007 */}
                                    <Col>
                                        <Text className="timeline-year">2021</Text>
                                    </Col>
                                </Row>
                                <Text className="text-base" style={{ lineHeight: 1.7 }}>
                                    افتتاح فندق هيلتون دبل تري المركز المالي بمدينة الرياض                                </Text>
                            </div>
                        </Col>
                    </Row>
                }

                {
                    selectedYearIndex == 10 &&
                    <Row gutter={[50, 50]} className="timeline-section">
                        {/* Right Column with Image */}
                        <Col span={24} xs={24} sm={24} md={16} lg={12} xl={12}
                            className='flex justify-content-end align-items-end'
                        >
                            <div className="timeline-image">
                                <img src={img.mission2017} alt="Timeline" className="w-full rounded-lg shadow-lg" />
                            </div>
                        </Col>

                        {/* Left Column with Text */}
                        <Col span={24} xs={24} sm={24} md={16} lg={12} xl={12}>
                            <div className="timeline-text">
                                <Row className="timeline_year">
                                    {/* Year 2008 */}
                                    <Col>
                                        <Text className="timeline-year">2023</Text>
                                    </Col>

                                    {/* Timeline line with circles */}
                                    <Col className="timeline-line">
                                        <div className="circle  circle1" />
                                        <div className="line" />
                                        <div className="circle circle2" />
                                    </Col>

                                    {/* Year 2007 */}
                                    <Col>
                                        <Text className="timeline-year">2022</Text>
                                    </Col>
                                </Row>
                                <div className="list_misson">
                                    <ul>
                                        <li>مجمع توق الدار يحصل على جائزة السكن المثالي للقوى العاملة من هيئة المدن الصناعية</li>
                                        <li>افتتاح المرحلة الثانية من مشروع المصانع الجاهزة بمدينة الرياض</li>
                                        <li>إطلاق مشروع المصانع المتخصصة في مدينة الرياض</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                }
            </div>

        </div >
    );
};

export default Mission;
