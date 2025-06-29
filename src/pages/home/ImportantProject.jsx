import CustomButton from "@components/common/CustomButton";
import CustomTitle from "@components/common/CustomTitle";
import Icon from "@constants/icon";
import { Col, Row } from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ImportantProject = ({ data }) => {
    let { t } = useTranslation()

    return (
        <div className="important-projects container_main_85">
            {/* Section Title */}
            <div className="section-header">
                <CustomTitle title={t('Major')} title2={t('Projects')} />
                <Link to="/projects" className="discover-button">
                    <CustomButton />
                </Link>
            </div>

            {/* Project Cards */}
            <Row gutter={[24, 24]} justify="center" className="mb-8" >
                {data.filter((_, index) => index === 0 || index === 9).map((project) => (
                    <Col xs={24} sm={12} key={project.id}>
                        <Link to={`/project/${project.id}`} >
                            <div className="project-card" >
                                <img alt={project.title} src={project.image} />
                                <Row className="overlay flex justify-content-between">
                                    <Col xl={12} xs={24} sm={24} >
                                        <h3 className="title">{project.title}</h3>
                                    </Col>
                                    <Col xl={12} xs={24} sm={24}>
                                        <div className="left flex flex-column justify-content-end align-items-end gap-2">
                                            <span className="sector">({project.sector})</span>
                                            <Icon.arrowLight />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Link>
                    </Col>
                ))}
            </Row>
        </div >
    );
};

export default ImportantProject;
