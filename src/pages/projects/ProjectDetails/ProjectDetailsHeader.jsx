import { FacebookFilled, WhatsAppOutlined, XOutlined } from '@ant-design/icons';
import CustomButton from '@components/common/CustomButton';
import Icon from '@constants/icon';
import img from '@constants/img';
import { Col, Row } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import './ProjectDetailsHeader.css';
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
                                <div className="flex flex-row gap-4">
                                    <div className="points m-0 flex gap-4">
                                        <div className="item flex align-items-center gap-2">
                                            <Icon.location2 />
                                            <span>{data.location}</span>
                                        </div>
                                        {/*           <div className="item flex align-items-center gap-2">
                                            <Icon.type2 />
                                            <span>{data.key_word}</span>
                                        </div> */}
                                    </div>

                                    <div className="item_share flex flex-row align-items-center gap-2 cursor-pointer">
                                        <img
                                            src={img.share}
                                            width={40}
                                            alt="مشاركة"
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => setShowOptions(!showOptions)}
                                        />
                                        {showOptions && (
                                            <div className='app_image_social' style={{ position: 'absolute', bottom: 140, left: '71%', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                                                <button
                                                    style={{ backgroundColor: '#4267B2', color: 'white', border: 'none', borderRadius: '50%', width: 30, height: 30, cursor: 'pointer' }}
                                                    onClick={() => shareTo('facebook')}
                                                >
                                                    <FacebookFilled style={{ fontSize: '20px' }} />
                                                </button>

                                                <button
                                                    style={{ backgroundColor: '#25D366', color: 'white', border: 'none', borderRadius: '50%', width: 30, height: 30, cursor: 'pointer' }}
                                                    onClick={() => shareTo('whatsapp')}
                                                >
                                                    <WhatsAppOutlined style={{ fontSize: '20px' }} />
                                                </button>

                                                <button
                                                    style={{ backgroundColor: '#000', color: 'white', border: 'none', borderRadius: '50%', width: 30, height: 30, cursor: 'pointer' }}
                                                    onClick={() => shareTo('twitter')}
                                                >
                                                    <XOutlined style={{ fontSize: '20px' }} />
                                                </button>
                                            </div>
                                        )}
                                        <span>مشاركة</span>
                                    </div>

                                </div>
                                <div className="summary-box">
                                    <div className="summary-item">
                                        <div className="summary-number">{data?.units}</div>
                                        <div className="summary-label">وحدة سكنية</div>
                                    </div>
                                    <div className="divider-vertical" />
                                    <div className="summary-item">
                                        <div className="summary-number">{data?.floors}</div>
                                        <div className="summary-label">عدد الطوابق</div>
                                    </div>
                                </div>
                                <div className="button-card-group" dir="rtl">
                                    <div className="button-card">الكتب</div>
                                    <div className="button-card">سجل اهتماماتك</div>
                                    <div className="button-card">تحديثات البناء</div>
                                </div>

                            </div>
                        </Col>

                    </Row>
                </Col>
                <Col xs={24} md={12}>
                    <div className="app_project_content">
                        <h1>{data.title}</h1>
                        <p>{data.description}</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ProjectDetailsHeader;