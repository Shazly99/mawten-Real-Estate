import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./homeProjects.scss";
import { Col, Row } from "antd";
import Marquee from "react-fast-marquee";
import Icon from "@constants/icon";
import TitleH from "@components/common/TitleH";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HomeProjects = ({ data }) => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState(0);
    const [timerKey, setTimerKey] = useState(0);
    const tabRef = useRef(0); // ❗️ لحفظ قيمة الـ tab الحالي خارج الـ re-render

    const nextTab = () => {
        tabRef.current = (tabRef.current + 1) % data.length;
        setActiveTab(tabRef.current);
        setTimerKey(Date.now()); // ❗️إعادة تشغيل الانيميشن
    };

    const prevTab = () => {
        tabRef.current = (tabRef.current - 1 + data.length) % data.length;
        setActiveTab(tabRef.current);
        setTimerKey(Date.now());
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextTab();
        }, 5000);
        return () => clearInterval(interval);
    }, [data]); // ❗️ نضيف data علشان نضمن إنها موجودة

    return (
        <div className="app_projects">
            <div className="tabs tabs_web_page ">
                {data.map((tab, index) => (
                    <div
                        key={index}
                        className={`tab ${activeTab === index ? "active" : ""}`}
                    >
                        <span className="active_label">{tab.title}</span>
                        <div className="line-container">
                            <div className="base-line"></div>
                            {activeTab === index && (
                                <motion.div
                                    className="active-line"
                                    initial={{ height: "0%", top: "0%" }}
                                    animate={{ height: "100%" }}
                                    transition={{ duration: 5 }}
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="tabs_small_page">
                <div className="cursor-pointer prevTab" onClick={prevTab}>
                    <Icon.right />
                </div>

                <div className="slider-container">
                    <div className="tab_small active">
                        <span className="active_label">{data[activeTab]?.title}</span>
                        <div className="progress-bar-container">
                            <div className="base-line"></div>
                            <motion.div
                                key={timerKey}
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

            <main className="main-content">
                <Row className="content-wrapper">
                    <Col xl={12} lg={12} className="wrapper_master">
                        <div className="header">
                            <h1>{data[activeTab]?.title}</h1>
                            <h1>{data[activeTab]?.sub_title}</h1>
                        </div>
                    </Col>

                    <Col xl={12} lg={12} className="wrapper_details">
                        <p className="description">{data[activeTab]?.description}</p>
                    </Col>

                    <Col span={24}>
                        <div className="project-slider" dir="ltr">
                            {
                                data[activeTab]?.projects?.length > 0 &&
                                <TitleH title={t("مشاريع")} highlight={t("")} />
                            }
                            <Marquee pauseOnHover={true} speed={50} gradient={false}>
                                {data[activeTab]?.projects?.map((project, index) => (
                                    <Link to={`/project/${project.id}`} key={index} className="project-item">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="project-image"
                                        />
                                        <div className="project-title">{project.title}</div>
                                    </Link>
                                ))}
                            </Marquee>
                        </div>
                    </Col>
                </Row>
            </main>
        </div>
    );
};

export default HomeProjects;
