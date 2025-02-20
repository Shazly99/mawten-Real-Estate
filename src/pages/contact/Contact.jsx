import { CopyOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined, XOutlined } from '@ant-design/icons';
import CustomTitle from '@components/common/CustomTitle';
import TitleH from '@components/common/TitleH';
import img from '@constants/img';
import { Button, Card, Col, Form, Input, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import './contact.scss';

const Contact = () => {
    let { t } = useTranslation()
    const contactDetails = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                <rect x="0.791016" y="1.21606" width="31.0328" height="31.0328" rx="5.5" stroke="#A61517" />
                <path d="M16.3071 19.2995C14.5199 19.2995 13.0586 17.8452 13.0586 16.0461C13.0586 14.2487 14.5182 12.8024 16.3071 12.8024C18.0943 12.8024 19.5556 14.2567 19.5556 16.0558C19.5556 17.8533 18.096 19.2995 16.3071 19.2995ZM16.3071 13.2572C14.7725 13.2572 13.5115 14.5084 13.5115 16.0558C13.5115 17.6019 14.7615 18.8544 16.3071 18.8544C17.8527 18.8544 19.1027 17.6019 19.1027 16.0558C19.1027 14.5084 17.8417 13.2572 16.3071 13.2572Z" fill="#368095" stroke="#A61517" />
                <path d="M9.84107 14.1491L9.84118 14.1486C10.6326 10.3839 13.6583 8.71307 16.3024 8.71307H16.3024H16.3024H16.3024H16.3024H16.3024H16.3024H16.3024H16.3024H16.3024H16.3024H16.3024H16.3024H16.3024H16.3024H16.3024H16.3024H16.3024H16.3024H16.3024H16.3024H16.3024H16.3024H16.3025H16.3025H16.3025H16.3025H16.3025H16.3025H16.3025H16.3025H16.3025H16.3025H16.3025H16.3025H16.3025H16.3025H16.3025H16.3025H16.3025H16.3025H16.3025H16.3026H16.3026H16.3026H16.3026H16.3026H16.3026H16.3026H16.3026H16.3026H16.3026H16.3026H16.3026H16.3026H16.3026H16.3026H16.3026H16.3026H16.3026H16.3026H16.3026H16.3026H16.3026H16.3027H16.3027H16.3027H16.3027H16.3027H16.3027H16.3027H16.3027H16.3027H16.3027H16.3027H16.3027H16.3027H16.3027H16.3027H16.3027H16.3027H16.3027H16.3028H16.3028H16.3028H16.3028H16.3028H16.3028H16.3028H16.3028H16.3028H16.3028H16.3028H16.3028H16.3028H16.3028H16.3029H16.3029H16.3029H16.3029H16.3029H16.3029H16.3029H16.3029H16.3029H16.3029H16.3029H16.3029H16.3029H16.303H16.303H16.303H16.303H16.303H16.303H16.303H16.303H16.303H16.303H16.303H16.303H16.3031H16.3031H16.3031H16.3031H16.3031H16.3031H16.3031H16.3031H16.3031H16.3031H16.3031H16.3032H16.3032H16.3032H16.3032H16.3032H16.3032H16.3032H16.3032H16.3032H16.3033H16.3033H16.3033H16.3033H16.3033H16.3033H16.3033H16.3033H16.3033H16.3034H16.3034H16.3034H16.3034H16.3034H16.3034H16.3034H16.3034H16.3034H16.3035H16.3035H16.3035H16.3035H16.3035H16.3035H16.3035H16.3035H16.3036H16.3036H16.3036H16.3036H16.3036H16.3036H16.3036H16.3037H16.3037H16.3037H16.3037H16.3037H16.3037H16.3037H16.3038H16.3038H16.3038H16.3038H16.3038H16.3038H16.3038H16.3039H16.3039H16.3039H16.3039H16.3039H16.3039H16.304H16.304H16.304H16.304H16.304H16.304H16.304H16.3041H16.3041H16.3041H16.3041H16.3041H16.3041H16.3042H16.3042H16.3042H16.3042H16.3042H16.3043H16.3043H16.3043H16.3043H16.3043H16.3043H16.3044H16.3044H16.3044H16.3044H16.3044H16.3045H16.3045H16.3045H16.3045H16.3045H16.3045H16.3046H16.3046H16.3046H16.3046H16.3046H16.3047H16.3047H16.3047H16.3047H16.3047H16.3048H16.3048H16.3048H16.3048H16.3049H16.3049H16.3049H16.3049H16.3049H16.305H16.305H16.305H16.305H16.305H16.3051H16.3051H16.3051H16.3051H16.3052H16.3052H16.3052H16.3052H16.3053H16.3053H16.3053H16.3053H16.3054H16.3054H16.3054H16.3054H16.3054H16.3055H16.3055H16.3055H16.3055H16.3056H16.3056H16.3056H16.3056H16.3057H16.3057H16.3057H16.3058H16.3058H16.3058H16.3058H16.3059H16.3059H16.3059H16.3059H16.306H16.306H16.306H16.306H16.3061H16.3061H16.3061H16.3062H16.3062H16.3062H16.3062H16.3063H16.3063H16.3063H16.3064H16.3064H16.3064H16.3064H16.3065H16.3065H16.3065H16.3066H16.3066H16.3066H16.3067H16.3067H16.3067H16.3067H16.3068H16.3068H16.3068H16.3069H16.3069H16.3069H16.307H16.307H16.307H16.3071H16.3071H16.3071H16.3072H16.3072H16.3072H16.3073H16.3073H16.3073H16.3074H16.3074H16.3074H16.3075H16.3075H16.3075H16.3076H16.3076H16.3076H16.3077H16.3077H16.3077H16.3078H16.3078H16.3079H16.3079H16.3079H16.308H16.308H16.308H16.3081H16.3081H16.3081H16.3082H16.3082H16.3083H16.3083H16.3083H16.3084H16.3084H16.3084H16.3085H16.3085H16.3086H16.3086H16.3086H16.3087H16.3087H16.3088H16.3088H16.3088H16.3089H16.3089H16.309H16.309H16.309H16.3091H16.3091H16.3092H16.3092H16.3092H16.3093H16.3093H16.3094H16.3094H16.3095H16.3095H16.3095H16.3096H16.3096H16.3097H16.3097H16.3098H16.3098H16.3098H16.3099H16.3099H16.31C18.9537 8.71307 21.9796 10.3836 22.7711 14.1566C23.6495 18.3471 21.31 21.9062 19.0935 24.2104C18.3008 25.0292 17.293 25.4334 16.3024 25.4334C15.3117 25.4334 14.3039 25.0292 13.5112 24.2104C11.295 21.9064 8.95548 18.3394 9.84107 14.1491ZM22.636 14.2155L22.6356 14.2137C21.8124 10.3378 18.6997 8.9488 16.3024 8.9488C13.9045 8.9488 10.7995 10.3383 9.9842 14.2142C9.10649 18.3487 11.5186 21.8591 13.5922 24.0064C15.1088 25.5865 17.5036 25.5865 19.0202 24.0063C21.0859 21.8593 23.4976 18.3493 22.636 14.2155Z" fill="#368095" stroke="#A61517" />
            </svg>,
            title: t('Ourlocation1'),
            description: t('Ourlocation2'),
            buttonText: 'info@email.org.sa',
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                <rect x="1.31641" y="0.852539" width="31.0328" height="31.0328" rx="5.5" stroke="#A61517" />
                <path d="M9.40094 9.21271H23.5772C24.5518 9.21271 25.3492 10.0178 25.3492 11.0018V21.7362C25.3492 22.7202 24.5518 23.5253 23.5772 23.5253H9.40094C8.42632 23.5253 7.62891 22.7202 7.62891 21.7362V11.0018C7.62891 10.0178 8.42632 9.21271 9.40094 9.21271Z" stroke="#A61517" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M25.3492 11.2573L16.4891 17.3913L7.62891 11.2573" stroke="#A61517" stroke-linecap="round" stroke-linejoin="round" />
            </svg>,

            title: t('ContactUsVia1'),
            description: t('ContactUsVia2'),
            buttonText: 'info@mawten.sa',
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                <rect x="1.24219" y="0.5" width="31.0328" height="31.0328" rx="5.5" stroke="#A61517" />
                <path d="M24.5931 19.9148V22.2746C24.594 22.4937 24.5491 22.7105 24.4611 22.9113C24.3732 23.112 24.2442 23.2922 24.0825 23.4403C23.9207 23.5884 23.7297 23.7011 23.5218 23.7713C23.3139 23.8415 23.0935 23.8676 22.8749 23.8478C20.4496 23.5848 18.1199 22.7577 16.073 21.433C14.1687 20.2253 12.5541 18.6139 11.344 16.7133C10.012 14.6612 9.18308 12.3249 8.92437 9.89347C8.90467 9.67594 8.93057 9.45671 9.00042 9.24973C9.07028 9.04274 9.18255 8.85254 9.33009 8.69123C9.47763 8.52993 9.65721 8.40105 9.85739 8.3128C10.0576 8.22455 10.274 8.17887 10.4928 8.17867H12.8573C13.2398 8.17491 13.6106 8.31009 13.9007 8.55901C14.1907 8.80794 14.3801 9.15362 14.4337 9.53163C14.5335 10.2868 14.7185 11.0283 14.9854 11.742C15.0914 12.0235 15.1144 12.3295 15.0515 12.6237C14.9886 12.9178 14.8426 13.1879 14.6307 13.4017L13.6297 14.4007C14.7517 16.37 16.3855 18.0006 18.3587 19.1203L19.3597 18.1214C19.574 17.9099 19.8445 17.7641 20.1393 17.7014C20.434 17.6386 20.7406 17.6616 21.0227 17.7674C21.7378 18.0337 22.4808 18.2184 23.2375 18.318C23.6203 18.3719 23.97 18.5644 24.22 18.8588C24.4699 19.1532 24.6027 19.529 24.5931 19.9148Z" stroke="#A61517" stroke-linecap="round" stroke-linejoin="round" />
            </svg>,
            title: t('nav_contact'),
            description: t('ContactUsVia3'),
            buttonText: '(05)52213324',
        }
    ];

    const googleMapsLink = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6254.6695072769935!2d46.677645!3d24.77442!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efd2e2d0c9dfd%3A0xb9d16b091553550f!2sMawten%20Real%20Estate%20Company!5e1!3m2!1sen!2ssa!4v1739839290374!5m2!1sen!2ssa";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(googleMapsLink);
        alert("تم نسخ الرابط بنجاح!");
    };
    return (
        <div className="app_contact">
            <div className="contact-container mb-8">
                <Row gutter={[50, 50]}>
                    {/* Right Side: Contact Form */}
                    <Col xs={24} md={15} className="contact-right">
                        <TitleH title={t('ContactUs')} highlight={t('ContactUs2')} />
                        <p>{t('ContactUsP')}</p>
                        <div className="hr my-5">
                            <hr />
                        </div>
                        {/* Social Links */}
                        <div className="social">
                            <div className="title flex justify-content-center  align-items-center">
                                <span> {t('Follow')}  </span>
                            </div>
                            <div className="social-links">
                                <a href="https://linkedin.com" className="social-icon"><LinkedinOutlined /></a>
                                <a href="https://instagram.com" className="social-icon"><InstagramOutlined /></a>
                                <a href="https://facebook.com" className="social-icon"><FacebookOutlined /></a>
                                <a href="https://twitter.com" className="social-icon"><XOutlined /></a>
                            </div>
                        </div>
                        <div className="contact-info-container mt-5">
                            <Row gutter={[16, 16]} justify="center">
                                {contactDetails.map((item, index) => (
                                    <Col xs={24} sm={12} md={8} key={index}>
                                        <Card bordered className="contact-card">
                                            <div className="icon-container">{item.icon}</div>
                                            <h3>{item.title}</h3>
                                            <p className='text-center' >{item.description}</p>
                                            <Button size='small' type="primary" className="contact-button">
                                                {item.buttonText}
                                            </Button>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                        {/* Contact Form */}
                        <Form
                            name="contact-form"
                            layout="vertical"
                            initialValues={{ email: 'info@gmail.com' }}
                            onFinish={(values) => console.log('Form submitted:', values)}
                            className='contact-form mt-6'
                        >
                            <Form.Item
                                label={t('form.name')}
                                name="name"
                                rules={[{ required: true, message: t('validation.nameRequired') }]}
                            >
                                <Input size='large' />
                            </Form.Item>

                            <Row gutter={[20, 20]}>
                                <Col span={12}>
                                    <Form.Item
                                        label={t('form.phone')}
                                        name="phone"
                                        rules={[{ required: true, message: t('validation.phoneRequired') }]}
                                    >
                                        <Input size='large' />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label={t('form.email')}
                                        name="email"
                                        rules={[{ required: true, message: t('validation.emailRequired') }]}
                                    >
                                        <Input type="email" size='large' />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Form.Item
                                label={t('form.company')}
                                name="company"
                            >
                                <Input size='large' />
                            </Form.Item>

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
                    </Col>


                    {/* Left Side: Image */}
                    <Col xs={24} md={9} className="contact-left">
                        <img src={img.contact} alt="Handshake" className="contact-image" />
                    </Col>
                </Row>
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
