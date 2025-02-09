import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./homeProjects.scss";
import { Col, Row } from "antd";
import img from "@constants/img";
import Marquee from "react-fast-marquee";
import Icon from "@constants/icon";

const tabs = [
    { id: 0, label: "القطاع السكني" },
    { id: 1, label: "قطاع الضيافة" },
    { id: 2, label: "القطاع الصناعي واللوجستي" },
    { id: 3, label: "القطاع التجاري" },
];
const projects = [
    {
        image: img.Projects1,
        title: "برج موطن تاورز الرياض",
    },
    {
        image: img.Projects2,
        title: "هيلتون جاردن ان الرياض المركز المالي",
    },
    {
        image: img.Projects3,
        title: "مجمع توق الدار السكني",
    },
    {
        image: img.Projects1,
        title: "برج موطن تاورز الرياض",
    },
    {
        image: img.Projects2,
        title: "هيلتون جاردن ان الرياض المركز المالي",
    },
    {
        image: img.Projects3,
        title: "مجمع توق الدار السكني",
    },
    {
        image: img.Projects1,
        title: "برج موطن تاورز الرياض",
    },
    {
        image: img.Projects2,
        title: "هيلتون جاردن ان الرياض المركز المالي",
    },
    {
        image: img.Projects3,
        title: "مجمع توق الدار السكني",
    },
];
const HomeProjects = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [timerKey, setTimerKey] = useState(0); // مفتاح لإعادة تشغيل الـ Timer

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((prevTab) => (prevTab + 1) % tabs.length);
        }, 5000); // تغيير التبويب كل 5 ثوانٍ

        return () => clearInterval(interval);
    }, []);

    const nextTab = () => {
        setActiveTab((prevTab) => {
            const newTab = (prevTab + 1) % tabs.length;
            setTimerKey(newTab); // تغيير المفتاح عند تغيير التبويب
            return newTab;
        });
    };

    const prevTab = () => {
        setActiveTab((prevTab) => {
            const newTab = (prevTab - 1 + tabs.length) % tabs.length;
            setTimerKey(newTab); // تغيير المفتاح عند تغيير التبويب
            return newTab;
        });
    };

    useEffect(() => {
        const interval = setInterval(nextTab, 5000); // تغيير التبويب كل 5 ثوانٍ
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="app_projects">

            <div className="tabs tabs_web_page ">
                {tabs.map((tab, index) => (
                    <div key={tab.id} className={`tab ${activeTab === index ? "active" : ""}`}>
                        <span className="active_label">{tab.label}</span>
                        <div className="line-container">
                            <div className="base-line"></div> {/* الخط الرمادي */}
                            {activeTab === index && (
                                <motion.div
                                    className="active-line"
                                    initial={{ height: "0%", top: "0%" }} // يبدأ من الأعلى
                                    animate={{ height: "100%" }} // يتحرك للأسفل تدريجيًا
                                    transition={{ duration: 5 }} // يستغرق 5 ثوانٍ لإكمال الحركة
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="tabs_small_page">
                <div className="cursor-pointer  prevTab" onClick={prevTab}>
                    <Icon.right />
                </div>

                <div className="slider-container">
                    <div className="tab_small active">
                        <span className="active_label">{tabs[activeTab].label}</span>
                        <div className="progress-bar-container">
                            <div className="base-line"></div> {/* الخط الرمادي الثابت */}
                            <motion.div
                                key={timerKey} // هذا المفتاح يجبر React على إعادة تشغيل الحركة
                                className="progress-bar"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 5, ease: "linear" }}
                            />
                        </div>
                    </div>
                </div>

                <div className="cursor-pointer nextTab" onClick={nextTab}>
                    <Icon.left />
                </div>
            </div>
            {/* قسم المحتوى بناءً على الـ Tab المحددة */}
            <main className="main-content">
                {activeTab === 0 && (
                    <Row
                        className="content-wrapper"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Col xl={12} lg={12} className="wrapper_master"  >
                            <div className="header">
                                <h1>القطاع السكني </h1>
                                <h1>ومتعدد الاستعمال</h1>
                            </div>
                            <img src={img.map} alt="" srcset="" />
                        </Col>
                        <Col xl={12} lg={12} className="wrapper_details" >

                            <div className="stats-container">
                                <div className="stat">
                                    <h2>6</h2>
                                    <p>المشاريع</p>
                                </div>
                                <div className="divider"></div>
                                <div className="stat">
                                    <h2>2 مليار</h2>
                                    <p>الاستثمارات</p>
                                </div>
                            </div>

                            <p className="description">
                                مشروع فريد بموقعه في مكة مكرمة ملاصق لوجهة مسار ويبعد عن الحرم المكي الشريف قرابة 3600 متر، تطوره شركة موطن العقارية كبرج سكني بارتفاع 27 طابق على مساحة تبلغ 6,580 متر مربع وبمسطحات بناء حوالي 114 ألف متر مربع في منطقة الرصيفة بمكة المكرمة بإطلالة كاملة على الدائري الثالث وبجوار محطة قطار الحرمين ليشكل معلماً بارزاً للقادمين من مدينة جدة. ي
                            </p>

                            <div className="project-slider" dir="ltr" >
                                <Marquee pauseOnHover={true} speed={50} gradient={false}>
                                    {projects.map((project, index) => (
                                        <div key={index} className="project-item">
                                            <img src={project.image} alt={project.title} className="project-image" />
                                            <div className="project-title">{project.title}</div>
                                        </div>
                                    ))}
                                </Marquee>
                            </div>
                        </Col>
                    </Row>
                )}

                {activeTab === 1 && (
                    <Row
                        className="content-wrapper"
                    >
                        <Col xl={12} lg={12} className="wrapper_master"  >
                            <div className="header">
                                <h1>قطاع الضيافة </h1>
                                <h1>ومتعدد الاستخدام</h1>
                            </div>
                            <img src={img.map} alt="" srcset="" />
                        </Col>
                        <Col xl={12} lg={12} className="wrapper_details" >

                            <div className="stats-container">
                                <div className="stat">
                                    <h2>3</h2>
                                    <p>المشاريع</p>
                                </div>
                                <div className="divider"></div>
                                <div className="stat">
                                    <h2>2 مليار</h2>
                                    <p>الاستثمارات</p>
                                </div>
                            </div>

                            <p className="description">
                                مشروع فريد بموقعه في مكة مكرمة ملاصق لوجهة مسار ويبعد عن الحرم المكي الشريف قرابة 3600 متر، تطوره شركة موطن العقارية كبرج سكني بارتفاع 27 طابق على مساحة تبلغ 6,580 متر مربع وبمسطحات بناء حوالي 114 ألف متر مربع في منطقة الرصيفة بمكة المكرمة بإطلالة كاملة على الدائري الثالث وبجوار محطة قطار الحرمين ليشكل معلماً بارزاً للقادمين من مدينة جدة. ي
                            </p>

                            <div className="project-slider" dir="ltr" >
                                <Marquee pauseOnHover={true} speed={50} gradient={false}>
                                    {projects.map((project, index) => (
                                        <div key={index} className="project-item">
                                            <img src={project.image} alt={project.title} className="project-image" />
                                            <div className="project-title">{project.title}</div>
                                        </div>
                                    ))}
                                </Marquee>
                            </div>
                        </Col>
                    </Row>
                )}

                {activeTab === 3 && (
                    <Row
                        className="content-wrapper"
                    >
                        <Col xl={12} lg={12} className="wrapper_master"  >
                            <div className="header">
                                <h1>قطاع التجاري </h1>
                            </div>
                            <img src={img.map} alt="" srcset="" />
                        </Col>
                        <Col xl={12} lg={12} className="wrapper_details" >

                            <div className="stats-container">
                                <div className="stat">
                                    <h2>3</h2>
                                    <p>المشاريع</p>
                                </div>
                                <div className="divider"></div>
                                <div className="stat">
                                    <h2>2 مليار</h2>
                                    <p>الاستثمارات</p>
                                </div>
                            </div>

                            <p className="description">
                                مشروع فريد بموقعه في مكة مكرمة ملاصق لوجهة مسار ويبعد عن الحرم المكي الشريف قرابة 3600 متر، تطوره شركة موطن العقارية كبرج سكني بارتفاع 27 طابق على مساحة تبلغ 6,580 متر مربع وبمسطحات بناء حوالي 114 ألف متر مربع في منطقة الرصيفة بمكة المكرمة بإطلالة كاملة على الدائري الثالث وبجوار محطة قطار الحرمين ليشكل معلماً بارزاً للقادمين من مدينة جدة. ي
                            </p>

                            <div className="project-slider" dir="ltr" >
                                <Marquee pauseOnHover={true} speed={50} gradient={false}>
                                    {projects.map((project, index) => (
                                        <div key={index} className="project-item">
                                            <img src={project.image} alt={project.title} className="project-image" />
                                            <div className="project-title">{project.title}</div>
                                        </div>
                                    ))}
                                </Marquee>
                            </div>
                        </Col>
                    </Row>
                )}

                {activeTab === 2 && (
                    <Row
                        className="content-wrapper"
                    >
                        <Col xl={12} lg={12} className="wrapper_master"  >
                            <div className="header">
                                <h1>قطاع الصناعي </h1>
                                <h1>و القاطع اللوجستي</h1>
                            </div>
                            <img src={img.map} alt="" srcset="" />
                        </Col>
                        <Col xl={12} lg={12} className="wrapper_details" >

                            <div className="stats-container">
                                <div className="stat">
                                    <h2>6</h2>
                                    <p>المشاريع</p>
                                </div>
                                <div className="divider"></div>
                                <div className="stat">
                                    <h2>2 مليار</h2>
                                    <p>الاستثمارات</p>
                                </div>
                            </div>

                            <p className="description">
                                مشروع فريد بموقعه في مكة مكرمة ملاصق لوجهة مسار ويبعد عن الحرم المكي الشريف قرابة 3600 متر، تطوره شركة موطن العقارية كبرج سكني بارتفاع 27 طابق على مساحة تبلغ 6,580 متر مربع وبمسطحات بناء حوالي 114 ألف متر مربع في منطقة الرصيفة بمكة المكرمة بإطلالة كاملة على الدائري الثالث وبجوار محطة قطار الحرمين ليشكل معلماً بارزاً للقادمين من مدينة جدة. ي
                            </p>

                            <div className="project-slider" dir="ltr" >
                                <Marquee pauseOnHover={true} speed={50} gradient={false}>
                                    {projects.map((project, index) => (
                                        <div key={index} className="project-item">
                                            <img src={project.image} alt={project.title} className="project-image" />
                                            <div className="project-title">{project.title}</div>
                                        </div>
                                    ))}
                                </Marquee>
                            </div>
                        </Col>
                    </Row>
                )}
            </main>
        </div>
    );
};

export default HomeProjects;
