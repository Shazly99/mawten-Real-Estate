import Icon from '@constants/icon';
import img from '@constants/img'; // Path to your images if needed
import { Button, Col, Row, Slider, Typography } from 'antd';
import { useEffect, useState } from 'react';
import './mission.scss';
import MissionHeader from './MissionHeader';
const { Text } = Typography;
const Mission = () => {
    const years = ['2007', '2010', '2012', '2015', '2016', '2017', '2018', '2020', '2021', '2022', '2023'];
    const [selectedYearIndex, setSelectedYearIndex] = useState(0);
    const [isAutoSliding, setIsAutoSliding] = useState(true);


    const handleNextYear = () => {
        const nextIndex = Math.min(selectedYearIndex + 1, years.length - 1);
        animateProgressTo(nextIndex);
        setIsAutoSliding(false);
    };

    const handlePrevYear = () => {
        const prevIndex = Math.max(selectedYearIndex - 1, 0);
        animateProgressTo(prevIndex);
        setIsAutoSliding(false);
    };

    const animateProgressTo = (targetIndex) => {
        const duration = 3000;
        const fps = 60;
        const totalSteps = (duration / 1000) * fps;
        const stepSize = (targetIndex - progressValue) / totalSteps;

        let step = 0;
        const interval = setInterval(() => {
            setProgressValue((prev) => {
                const next = prev + stepSize;
                step++;

                if (step >= totalSteps || Math.abs(next - targetIndex) < 0.01) {
                    clearInterval(interval);
                    setProgressValue(targetIndex);
                    setSelectedYearIndex(targetIndex);
                    return targetIndex;
                }

                setSelectedYearIndex(Math.floor(next));
                return next;
            });
        }, 1000 / fps);
    };

    const [progressValue, setProgressValue] = useState(0);

    // Auto slide logic
    useEffect(() => {
        if (isAutoSliding) {
            const duration = 3000; // 3 ثواني
            const fps = 60;
            const totalSteps = (duration / 1000) * fps;
            const stepSize = 1 / totalSteps;

            let step = 0;
            const interval = setInterval(() => {
                setProgressValue((prev) => {
                    let next = prev + stepSize;

                    if (next >= years.length - 1) {
                        next = 0; // 🟢 نرجع للبداية
                        setSelectedYearIndex(0);
                    } else {
                        setSelectedYearIndex(Math.floor(next));
                    }

                    return next;
                });

                step++;
                if (step >= totalSteps) step = 0;
            }, 1000 / fps);

            return () => clearInterval(interval);
        }
    }, [isAutoSliding, years.length]);
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
        <div className="mission_bg">


            <div className="app__mission">
                <MissionHeader />

                <div className="timeline__history">
                    <Row justify="center" align="middle" className="timeline-row">
                        <Col span={24} className="timeline-col" dir="rtl">
                            <div className="timeline-nav">
                                <div className="timeline_next_btn">
                                    <Button
                                        icon={<Icon.arrowLightR />}
                                        onClick={handleNextYear}
                                        disabled={selectedYearIndex === years.length - 1}
                                        type="primary"
                                    />
                                </div>


                                <Slider
                                    min={0}
                                    max={years.length - 1}
                                    value={progressValue}
                                    onChange={(value) => {
                                        setProgressValue(value);
                                        setSelectedYearIndex(Math.round(value));
                                        setIsAutoSliding(false);
                                    }}
                                    marks={years.reduce((acc, year, index) => {
                                        acc[index] = year;
                                        return acc;
                                    }, {})}
                                    step={0.01}
                                    tooltipVisible
                                />

                                <div className="timeline_prev_btn">
                                    <Button
                                        icon={<Icon.arrowLightL />}
                                        onClick={handlePrevYear}
                                        className="timeline-nav-btn"
                                        disabled={selectedYearIndex === 0}
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
                                <img src={img.H2010} alt="Timeline" className="w-full rounded-lg shadow-lg" />
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
                                <img src={img.H2015} alt="Timeline" className="w-full rounded-lg shadow-lg" />
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
                    selectedYearIndex == 4 &&
                    <Row gutter={[50, 50]} className="timeline-section">
                        {/* Right Column with Image */}
                        <Col span={24} xs={24} sm={24} md={16} lg={12} xl={12}
                            className='flex justify-content-end align-items-end'
                        >
                            <div className="timeline-image">
                                <img src={img.H2016} alt="Timeline" className="w-full rounded-lg shadow-lg" />
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
                                <img src={img.H2017} alt="Timeline" className="w-full rounded-lg shadow-lg" />
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
                                <img src={img.H2018} alt="Timeline" className="w-full rounded-lg shadow-lg" />
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
                                <img src={img.H2020} alt="Timeline" className="w-full rounded-lg shadow-lg" />
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
                                <img src={img.H2021} alt="Timeline" className="w-full rounded-lg shadow-lg" />
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
                                <img src={img.H2022} alt="Timeline" className="w-full rounded-lg shadow-lg" />
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
                                <img src={img.H2023} alt="Timeline" className="w-full rounded-lg shadow-lg" />
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
