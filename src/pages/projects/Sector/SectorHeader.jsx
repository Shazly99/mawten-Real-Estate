import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
const SectorHeader = () => {
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
        <div className="app_projects m-0">
            <main className="main-content">
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
                    </Col>
                    <Col xl={24} lg={24} className="wrapper_details mt-8 " >
                        <p className="description">
                        مشروع فريد بموقعه في مكة مكرمة ملاصق لوجهة مسار ويبعد عن الحرم المكي الشريف قرابة 3600 متر، تطوره شركة موطن العقارية كبرج سكني بارتفاع 27 طابق على مساحة تبلغ 6,580 متر مربع وبمسطحات بناء حوالي 114 ألف متر مربع في منطقة الرصيفة بمكة المكرمة بإطلالة كاملة على الدائري الثالث وبجوار محطة قطار الحرمين ليشكل معلماً بارزاً للقادمين من مدينة جدة.                         </p>
                    </Col>
                </Row>

            </main>
            {/* قسم المحتوى بناءً على الـ Tab المحددة */}

        </div>
    );
};

export default SectorHeader;