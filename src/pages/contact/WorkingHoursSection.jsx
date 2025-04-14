// src/components/WorkingHoursSection.jsx
import React from "react";
import "./contact.scss"; // Assuming you have a CSS file for styles
import { PhoneOutlined } from "@ant-design/icons";
import TitleH from "@components/common/TitleH";
import { Button } from "antd";

const contactData = [
    { label: "التسويق", email: "Markting@Mawten.Com.Sa" },
    { label: "المبيعات", email: "Sales@Mawten.Com.Sa" },
    { label: "التأجير", email: "Leasing@Mawten.Com.Sa" },
    { label: "علاقات المستثمرين", email: "IR@Mawten.Com.Sa" },
    { label: "التوظيف", email: "Recruitment@Mawten.Com.Sa" },
];

const WorkingHoursSection = () => {
    return (
        <div className="working-hours-section">
            <div className="section-header">
                <TitleH highlight={'ساعات العمل'} />
            </div>
            <div className="range flex justify-content-between align-items-center">
                <div className="days-range">
                    <span className="day">الاحد</span>
                    <span className="arrow">←</span>
                    <span className="day">الخميس</span>
                </div>

                <div className="timing">
                    <span className="time">09:00</span>
                    <span className="tag">صباحاً</span>
                    <span className="arrow">
                        <svg width="45" height="8" viewBox="0 0 45 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.646446 3.64645C0.451183 3.84171 0.451183 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM45 3.5L1 3.5V4.5L45 4.5V3.5Z" fill="#181820" />
                        </svg>
                    </span>

                    <span className="time">06:00</span>
                    <span className="tag red">مساءً</span>
                </div>
            </div>


            <div className="emails ">
                <div className="email-row flex justify-content-center align-items-center">
                    <span className="red-dot mt-0 " />
                    <div className="flex justify-content-between aline-items-center  w-full">

                        <span className="email-title flex justify-content-center align-items-center">اتصل بنا</span>
                        <a href="tel:+966920000598" className="contact">
                            <Button className="phone-box" dir="ltr" >+966 9200 00598</Button>
                        </a> 
                    </div>
                </div>
                {contactData.map((item, idx) => (
                    <div className="email-row" key={idx}>
                        <span className="red-dot" />
                        <div className="email-info">
                            <span className="label_">{item.label}</span>
                            <a className="email" href={`mailto:${item.email}`} >{item.email}</a> 
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkingHoursSection;
