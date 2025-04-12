import React, { useEffect } from 'react';
 
import Icon from '@constants/icon';
import { Button } from 'antd';
import './style.scss';
import { Link } from 'react-router-dom';

const ContactUsV = ({ t }) => {
 

    return (
        <div className="stay_connected"  >
            {/* Section contact us */}
            <div className="stay_connected_content">
                <h4  >{t('call_nowH')}</h4>
                
                <div 
                    className="contact_button flex justify-content-center align-items-center gap-3" 
                 
                >
                    <a href="tel:+201115893336" target='_blank' className="icon">
                        <Icon.phoneBg />
                    </a>
                    <a href="tel:+201115893336" target='_blank' className="content">
                        <strong>{t('call_now')}</strong>
                        <p>0111 589 3336</p>
                    </a> 
                </div>

                <div className="contact_line" >
                    <Icon.line />
                </div>

                <Link to={'/contact'}>
                    <Button 
                        shape='round' 
                        size='small' 
                        icon={<Icon.ArrowRight />} 
                        iconPosition='right' 
                        className="get_quote_button"
                      
                    >
                        {t('btn_nav')}
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ContactUsV;
