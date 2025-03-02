import img from '@constants/img'
import { Col, Row } from 'antd'
import React from 'react'
import './project.scss'
import TitleH from '@components/common/TitleH'
import { useTranslation } from 'react-i18next'
import Marquee from 'react-fast-marquee'
import ImportantProjects from './ImportantProjects'
import ProjectsDep from './ProjectsDep'
import OurProjects from './OurProjects'
import FeaturesMawten from './FeaturesMawten'
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
        image: img.ProjectsSlider,
        title: "برج موطن تاورز الرياض",
    },
    {
        image: img.Projects2,
        title: "هيلتون جاردن ان الرياض المركز المالي",
    },

];
const Projects = () => {
    let { t } = useTranslation()
    return (
        <div className='app_project' >
            <img src={img.ProjectsSlider} className='w-full app_project_image' alt="" />
            <div className="app_project_master">
                <Row gutter={[50, 50]} >
                    <Col xl={11} lg={11} md={11} sm={24} xs={24} className='mt-8  ' >
                        <div className="content">
                            <TitleH title={t('mawten')} highlight={t('RealEstate')} className="text-4xl font-bold text-gray-900" />
                            <h1>الريادة في صناعة الحلول العقارية المبتكرة </h1>
                            <p>اكتشف مشاريع موطن العقارية النوعية، حيث العقارات السكنية، والتجارية، والصناعية واللوجستية، والضيافة التي تنفرد بنوعيتها وموقعها الاستراتيجية وجودتها العالية في التصميم والتنفيذ لتلبى احتياجات وتطلعات العملاء المستهدفين وتثري السوق العقارية في المملكة العربية السعودية.</p>
                        </div>
                    </Col>

                    <Col xl={13} lg={13} md={13} sm={24} xs={24}>
                        <div className="projects_images overflow-hidden" dir="ltr">
                            <img src={img.ProjectsBg} className="w-full" alt="" />
                            <div className="overlay" dir="ltr">
                                <div className="overlay_img">
                                    <img src={img.Projects4} className="w-full" alt="" />
                                </div>

                                <div className="project-slider" dir="ltr">
                                    <Marquee pauseOnHover={true} speed={20} gradient={false} style={{ overflow: 'hidden' }}>
                                        {projects.map((project, index) => (
                                            <div key={index} className="project-item">
                                                <img src={project.image} alt={project.title} className="project-image" />
                                            </div>
                                        ))}
                                    </Marquee>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

            </div>
            <ImportantProjects />
            <ProjectsDep />
            <OurProjects />
            <FeaturesMawten />
        </div>
    )
}

export default Projects
