import React from "react";
import { Row, Col, Button, Card } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import img from "@constants/img"; // Adjust import according to your file structure
import CustomButton from "@components/common/CustomButton";
import CustomTitle from "@components/common/CustomTitle";

const projects = [
    {
        id: 2,
        title: "هيلتون جاردن ان الرياض المركز المالي",
        sector: " القطاع التجاري ",
        image: img.Projects2, // Replace with actual image path
    },
    {
        id: 1,
        title: "برج موطن تاورز الرياض",
        sector: " القطاع السكني ",
        image: img.Projects1, // Replace with actual image path
    },
];

const ImportantProject = () => {
    return (
        <div className="important-projects container_main_80">
            {/* Section Title */}
            <div className="section-header">
                <CustomTitle />
                <CustomButton />
            </div>

            {/* Project Cards */}
            <Row gutter={[24, 24]} justify="center" className="mb-8" >
                {projects.map((project) => (
                    <Col xs={24} sm={12} key={project.id}>
                        <div className="project-card" >
                            <img alt={project.title} src={project.image} />
                            <Row className="overlay flex justify-content-between">
                                <Col xl={12} >
                                    <h3 className="title">{project.title}</h3>
                                </Col>
                                <Col xl={12} >
                                    <div className="left flex flex-column justify-content-end align-items-end gap-2">
                                        <span className="sector">({project.sector})</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                            <circle cx="15.3714" cy="15.3714" r="15.1214" transform="matrix(-0.707107 0.707107 0.707107 0.707107 21.7384 0)" fill="white" stroke="#171E1C" stroke-width="0.5" />
                                            <path d="M15.2242 21.8591C14.8727 21.5076 14.8727 20.9377 15.2242 20.5863L20.9518 14.8587C21.3032 14.5072 21.8731 14.5072 22.2246 14.8587C22.576 15.2102 22.576 15.78 22.2246 16.1315L17.1334 21.2227L22.2246 26.3138C22.576 26.6653 22.576 27.2351 22.2246 27.5866C21.8731 27.9381 21.3032 27.9381 20.9518 27.5866L15.2242 21.8591ZM27.6152 22.1227L15.8606 22.1227L15.8606 20.3227L27.6152 20.3227L27.6152 22.1227Z" fill="#181818" />
                                        </svg>
                                    </div>
                                </Col>

                            </Row>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ImportantProject;
