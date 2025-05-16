import { Row, Col, Button } from 'antd';
import React from 'react';
import './ProjectDetailsHeader.css';
import Icon from '@constants/icon';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import img from '@constants/img';
import CustomButton from '@components/common/CustomButton';
const ProjectDetailsHeader = ({ imgs, data }) => {
    const { t } = useTranslation();
    const [showOptions, setShowOptions] = React.useState(false);
    return (
        <div className="project-details-header">
            <Row gutter={[20, 20]} align="middle">
                <Col xs={24} md={12}>
                    <Row>
                        <Col xl={24} xs={24}>
                            <div className="project_summery">
                                <CustomButton title={'صفحة المشاريع'} />
                                <h1 className='mt-3' >{data.title}</h1>
                                <div className="points m-0 flex gap-4">
                                    <div className="item flex align-items-center gap-2">
                                        <Icon.location2 />
                                        <span>{data.location}</span>
                                    </div>
                                    <div className="item flex align-items-center gap-2">
                                        <Icon.type2 />
                                        <span>{data.key_word}</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={24} xs={24}>
                            {
                                data?.sector != "قطاع الضيافة\r\n" &&
                                <div className="item_share_btn"  >
                                    <Link to={'/contact'} >
                                        <Button size='large' iconPosition='left' className="custom-btn" icon={<Icon.share />} type="primary">
                                            {t('سجل اهتمامك')}
                                        </Button>
                                    </Link>
                                    <div className="item_share flex flex-column cursor-pointer">

                                        {/* زر الصورة */}
                                        <img
                                            src={img.share}
                                            width={50}
                                            alt="مشاركة"
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => setShowOptions(!showOptions)}
                                        />

                                        {/* قائمة الأزرار تظهر فوق الصورة */}
                                        {showOptions && (
                                            <div className='app_image_social' style={{ position: 'absolute', bottom: 120, left: 5, display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                                                <button
                                                    style={{ backgroundColor: '#4267B2', color: 'white', border: 'none', borderRadius: '50%', width: 40, height: 40, cursor: 'pointer' }}
                                                    onClick={() => shareTo('facebook')}
                                                >
                                                    <FacebookFilled style={{ fontSize: '20px' }} />
                                                </button>

                                                <button
                                                    style={{ backgroundColor: '#25D366', color: 'white', border: 'none', borderRadius: '50%', width: 40, height: 40, cursor: 'pointer' }}
                                                    onClick={() => shareTo('whatsapp')}
                                                >
                                                    <WhatsAppOutlined style={{ fontSize: '20px' }} />
                                                </button>

                                                <button
                                                    style={{ backgroundColor: '#000', color: 'white', border: 'none', borderRadius: '50%', width: 40, height: 40, cursor: 'pointer' }}
                                                    onClick={() => shareTo('twitter')}
                                                >
                                                    <XOutlined style={{ fontSize: '20px' }} />
                                                </button>
                                            </div>
                                        )}
                                        <span>مشاركة</span>
                                    </div>
                                </div>
                            }

                        </Col>
                    </Row>
                </Col>
                <Col xs={24} md={12}>
                    <div className="image-container">
                        <img
                            src={imgs}
                            alt="Project"
                            className="project-image w-full"
                        />
                        <div className="overlay-square "></div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ProjectDetailsHeader;