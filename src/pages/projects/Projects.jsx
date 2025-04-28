import TitleH from '@components/common/TitleH'
import img from '@constants/img'
import { Col, Row } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import { useTranslation } from 'react-i18next'
import ImportantProjects from './ImportantProjects'
import './project.scss'
import ProjectsDep from './ProjectsDep'
import SliderHome from '@pages/home/SliderHome'

const Projects = () => {
    let { t } = useTranslation()
    const [tabItems, setTabItems] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://mawtan.rightclicksa.com/api/home`)
            .then(response => {
                const sectors = response.data?.data?.sectors?.data || [];
                const projects = response.data?.data?.projects?.data || [];
                setData(projects)
                const formatted = sectors.map((sector, index) => ({
                    key: String(sector.id),
                    label: sector.title?.trim() || ` `,
                    label2: sector.sub_title?.trim() || ` `,
                    title: sector.title?.trim() || '',
                    description: sector.description?.trim() || '',
                    investment: sector.investments ? `${sector.investments} مليون` : 'غير متوفر',
                    projectsCount: sector.projects?.length?.toString() || '0',
                    image1: img.Projects1, // يمكن تخصيص الصورة لاحقاً حسب البيانات
                    image2: img.Projects2,
                }));

                setTabItems(formatted);
            })
            .catch(err => {
                console.error('فشل جلب بيانات القطاعات:', err);
            });
    }, []);

    return (
        <div className='app_project' >
            {/* <img src={img.ProjectsSlider} className='w-full app_project_image' alt="" /> */}
            <SliderHome/>
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
                            <img src={img.projectBg2} className="w-full projects_images_o_0" alt="" />
                            <div className="overlay" dir="ltr">
                                <div className="overlay_img">
                                    <img src={img.projectBg2} className="w-full h-full" alt="" />
                                    <div className="overlay">

                                    </div>
                                </div>

                                <div className="project-slider" dir="ltr">
                                    <Marquee pauseOnHover={true} speed={20} gradient={false} style={{ overflow: 'hidden' }}>
                                        {data.map((item, index) => (
                                            <div key={index} className="mx-4">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    style={{ width: '200px', height: '150px', border: '2px solid #fff' }}
                                                />
                                            </div>
                                        ))}
                                    </Marquee>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <ImportantProjects data={data} />
            <ProjectsDep tabItems={tabItems} />
            {/* <OurProjects /> */}
            {/* <FeaturesMawten /> */}
        </div>
    )
}

export default Projects
