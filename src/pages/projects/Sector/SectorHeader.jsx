import { useEffect, useState } from "react";

import { Col, Row } from "antd";

const tabs = [
    { id: 0, label: "القطاع السكني" },
    { id: 1, label: "قطاع الضيافة" },
    { id: 2, label: "القطاع الصناعي واللوجستي" },
];
const SectorHeader = ({ data }) => {
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
        <div className="app_projects m-0"
            style={{
                backgroundImage: data?.cover
                    ? `url(${data.cover})`
                    : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <main className="main-content">
                <Row
                    className="content-wrapper"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Col xl={12} lg={12} className="wrapper_master"  >
                        <div className="header">
                            <h1>{data?.title}</h1>
                            <h1>{data?.sub_title}</h1>
                        </div>

                    </Col>
                    <Col xl={12} lg={12} className="wrapper_details" >
                    </Col>
                    <Col xl={24} lg={24} className="wrapper_details mt-8 " >
                        <p className="description">{data?.description}</p>
                    </Col>
                </Row>

            </main>
            {/* قسم المحتوى بناءً على الـ Tab المحددة */}

        </div>
    );
};

export default SectorHeader;