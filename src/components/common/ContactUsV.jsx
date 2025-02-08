import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Icon from '@constants/icon';
import { Button } from 'antd';
import './style.scss';
import { Link } from 'react-router-dom';

const ContactUsV = ({ t }) => {
    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            easing: 'ease-in-out', // Animation easing
            once: true, // Trigger animation once when in view
        });
    }, []);

    return (
        <div className="stay_connected" data-aos="fade-up">
            {/* Section contact us */}
            <div className="stay_connected_content">
                <h4 data-aos="fade-up" data-aos-delay="200">{t('call_nowH')}</h4>
                
                <div 
                    className="contact_button flex justify-content-center align-items-center gap-3" 
                    data-aos="zoom-in" 
                    data-aos-delay="400"
                >
                    <a href="tel:+201115893336" target='_blank' className="icon">
                        <Icon.phoneBg />
                    </a>
                    <a href="tel:+201115893336" target='_blank' className="content">
                        <strong>{t('call_now')}</strong>
                        <p>0111 589 3336</p>
                    </a> 
                </div>

                <div className="contact_line" data-aos="fade-up" data-aos-delay="600">
                    <Icon.line />
                </div>

                <Link to={'/contact'}>
                    <Button 
                        shape='round' 
                        size='small' 
                        icon={<Icon.ArrowRight />} 
                        iconPosition='right' 
                        className="get_quote_button"
                        data-aos="fade-up" 
                        data-aos-delay="800"
                    >
                        {t('btn_nav')}
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ContactUsV;
