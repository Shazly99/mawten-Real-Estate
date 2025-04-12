import OverlayHeader from '@components/common/OverlayHeader';
import img from '@constants/img';
import { useTranslation } from 'react-i18next';
import './contact.scss';

import {
    TwitterOutlined,
    FacebookFilled,
    InstagramOutlined,
    LinkedinFilled,
    CopyOutlined,
} from '@ant-design/icons';
import { Button, Col, Form, Input, Row } from 'antd';
import WorkingHoursSection from './WorkingHoursSection';
import CustomTitle from '@components/common/CustomTitle';

const Contact = () => {
    const { t } = useTranslation();

    const breadcrumbItems = [
        {
            label: t('nav_home'),
            link: '/',
        },
        {
            label: t('_contact'),
            link: '/about',
            isBold: true,
        },
    ];

    const googleMapsLink = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6254.6695072769935!2d46.677645!3d24.77442!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efd2e2d0c9dfd%3A0xb9d16b091553550f!2sMawten%20Real%20Estate%20Company!5e1!3m2!1sen!2ssa!4v1739839290374!5m2!1sen!2ssa";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(googleMapsLink);
        alert("تم نسخ الرابط بنجاح!");
    };
    return (
        <div className="app_contact">
            <OverlayHeader img={img.contact} header={t('nav_contact')} breadcrumbItems={breadcrumbItems} />

            <div className="contact-wrapper">
                <header>
                    <div className="contact-section">

                        <div className="contact-content">
                            <h2>
                                نحن هنا لمساعدتك. <span className="highlight">تواصل معنا!</span>
                            </h2>
                            <div className="mt-3 mb-4">
                                <hr />
                            </div>

                            <div className="socials">
                                <p>نسعد بتواصلكم واستفساراتكم عبر القنوات التالية</p>
                                <Button className="follow-btn">تابعونا على</Button>
                                <div className="icons">
                                    <span className="icon-box twitter"><TwitterOutlined /></span>
                                    <span className="icon-box facebook"><FacebookFilled /></span>
                                    <span className="icon-box instagram"><InstagramOutlined /></span>
                                    <span className="icon-box linkedin"><LinkedinFilled /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <Row gutter={32} className="contact-content">
                    {/* يمين: معلومات التواصل */}
                    <Col xs={24} md={12}  >
                        <WorkingHoursSection />
                    </Col>
                    {/* يسار: شبكة صور */}
                    <Col xs={24} md={12}>
                        <div className="diamond ">
                            <img src={img.contentLeft} alt="Kingdom Tower" />
                        </div>
                    </Col>

                </Row>
            </div>
            <div className="form_containers">

                <div className="mt-3 mb-4">
                    <hr />
                </div>
                <h2>
                    املأ الاستمارة , وسيقوم فريقنا<span className="highlight"> بالاتصال بك</span>
                </h2>

                <Form
                    name="contact-form"
                    layout="vertical"
                    initialValues={{ email: 'info@gmail.com' }}
                    onFinish={(values) => console.log('Form submitted:', values)}
                    className='contact-form shadow-sm '
                >


                    <Row gutter={[20, 20]}>
                        <Col xl={12} xs={24}>
                            <Form.Item
                                label={t('form.name')}
                                name="name"
                                rules={[{ required: true, message: t('validation.nameRequired') }]}
                            >
                                <Input size='large' />
                            </Form.Item>
                        </Col>
                        <Col xl={12} xs={24}>
                            <Form.Item
                                label={t('form.phone')}
                                name="phone"
                                rules={[{ required: true, message: t('validation.phoneRequired') }]}
                            >
                                <Input size='large' />
                            </Form.Item>
                        </Col>
                        <Col xl={12} xs={24}>
                            <Form.Item
                                label={t('form.email')}
                                name="email"
                                rules={[{ required: true, message: t('validation.emailRequired') }]}
                            >
                                <Input type="email" size='large' />
                            </Form.Item>
                        </Col>
                        <Col xl={12} xs={24}>
                            <Form.Item
                                label={t('form.company')}
                                name="company"
                                rules={[{ required: true, message: t('validation.nameRequired') }]}
                            >
                                <Input size='large' />
                            </Form.Item>
                        </Col>

                    </Row>



                    <Form.Item
                        label={t('form.message')}
                        name="message"
                        rules={[{ required: true, message: t('validation.messageRequired') }]}
                    >
                        <Input.TextArea rows={4} />
                    </Form.Item>

                    <div className='flex justify-content-center mt-5'>
                        <Form.Item>
                            <Button size='large' type="primary" htmlType="submit" className="submit-btn">
                                {t('form.submit')}
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>


            <div className="address-section">
                <div className='container'>
                    <Row gutter={[16, 16]} align="middle" >
                        {/* Address Details */}
                        <Col xs={24} md={12} className="address-content">
                            <div className="title">
                                <CustomTitle title={t('address.title')} />
                            </div>
                            <p>
                                {t('address.line1')}
                                <br />
                                {t('address.line2')}
                            </p>

                            <Button
                                type="primary"
                                className="copy-button"
                                onClick={copyToClipboard}
                                icon={<CopyOutlined />}
                            >{t('address.copyButton')}</Button>
                        </Col>
                        {/* Google Map Embed */}
                        <Col xs={24} md={12}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6254.6695072769935!2d46.677645!3d24.77442!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efd2e2d0c9dfd%3A0xb9d16b091553550f!2sMawten%20Real%20Estate%20Company!5e1!3m2!1sen!2ssa!4v1739839290374!5m2!1sen!2ssa" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </Col>

                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Contact;
