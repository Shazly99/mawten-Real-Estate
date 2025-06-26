import TitleH from '@components/common/TitleH';
import { Col, Pagination, Row } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import './sector.scss';
import SectorHeader from './SectorHeader';

const Sector = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [sectorData, setSectorData] = useState(null);
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

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
  const paginatedProjects = projects.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  useEffect(() => {
    const scrollStep = -window.pageYOffset / 50; // سرعة التمرير
    const scrollInterval = setInterval(() => {
      if (window.pageYOffset !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 10); // التحكم في السلاسة

    return () => clearInterval(scrollInterval); // تنظيف التايمر
  }, []);

  return (
    <>
      <div className="app_sector">
        <SectorHeader data={sectorData} />
      </div>

      <div className="sector_projects m-0">
        <TitleH title={'الـمشــاريـــع'} highlight={''} />
        <div className="projects">
          <Row gutter={[20, 20]}>
            {paginatedProjects.map(project => (
              <Col xl={12} md={12} xs={24} sm={24} key={project.id}>
                <div className="card">
                  <Link to={`/project/${project.id}`} className="card_image">
                    <img src={project.image} alt={project.title} />
                  </Link>
                  <div className="card_content">
                    <div className="flex justify-content-between">
                      <div className="header">
                        <h2>{project.title}</h2>
                        <span>مكة المكرمة</span>
                      </div>
              {/*         <Link to={`/project/${project.id}`} className="more flex justify-content-center align-items-center gap-4">
                        <span>{t('more')}</span>
                      </Link> */}
                    </div>
                    <p className='mt-3'>
                      {project.description.split(" ").slice(0, 30).join(" ")}...
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          {/* ✅ Pagination   */}
          <div className="pagination-container mt-6 text-center" dir='ltr'>
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={projects.length}
              onChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>

      </div>
    </>
  );
};

export default Sector;
