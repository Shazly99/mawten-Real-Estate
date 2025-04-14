import { useEffect, useState } from 'react';
import axios from 'axios';
import TitleH from '@components/common/TitleH';
import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import './sector.scss';
import SectorHeader from './SectorHeader';

const Sector = () => {
  const { t } = useTranslation();
  const { id } = useParams(); 
  const [sectorData, setSectorData] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`https://mawtan.rightclicksa.com/api/home/sectors/${id}`)
      .then(res => {
        const data = res.data?.data;
        setSectorData(data);
        setProjects(data?.projects || []);
      })
      .catch(err => {
        console.error("فشل جلب بيانات القطاع", err);
      });
  }, [id]);

  return (
    <>
      <div className="app_sector">
        <SectorHeader data={sectorData} />
      </div>

      <div className="sector_projects">
        <TitleH title={'الـمشــاريـــع'} highlight={''} />
        <div className="projects">
          <Row gutter={[50, 50]}>
            {projects.map(project => (
              <Col xl={12} md={12} xs={24} sm={24} key={project.id}>
                <div className="card">
                  <div className="card_image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="card_content">
                    <div className="flex justify-content-between">
                      <div className="header">
                        {/* <strong>({project.sector})</strong> */}
                        <h2>{project.title}</h2>
                      </div>
                      <Link to={`/project/${project.id}`} className="more flex justify-content-center align-items-center gap-4">
                        <span>{t('more')}</span>
                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="11.4095" cy="11.4095" r="11.1595" transform="matrix(-0.707107 0.707107 0.707107 0.707107 16.1367 0)" fill="white" stroke="#171E1C" strokeWidth="0.5" />
                          <path d="M11.1367 16.3893C10.7853 16.0378 10.7853 15.4679 11.1367 15.1165L16.8643 9.38891C17.2158 9.03744 17.7856 9.03744 18.1371 9.38891C18.4886 9.74038 18.4886 10.3102 18.1371 10.6617L13.0459 15.7529L18.1371 20.844C18.4886 21.1955 18.4886 21.7654 18.1371 22.1168C17.7856 22.4683 17.2158 22.4683 16.8643 22.1168L11.1367 16.3893ZM20.498 16.6529L11.7731 16.6529L11.7731 14.8529L20.498 14.8529L20.498 16.6529Z" fill="#181818" />
                        </svg>
                      </Link>
                    </div>
                    <p className='mt-3'>{project.description.split(" ").slice(0, 30).join(" ")}...</p>
                    </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default Sector;
