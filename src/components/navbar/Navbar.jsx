import { HomeOutlined, InfoCircleOutlined, MenuOutlined, PhoneOutlined, ProjectOutlined, SettingOutlined, ShoppingOutlined } from '@ant-design/icons';
import Icon from '@constants/icon';
import Logo from '@constants/Logo';
import { GeneralData } from '@context/General';
import { Button, Dropdown, Menu } from 'antd';
import { motion } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import './navbar.scss';

const menu = (
    <Menu>
        <Menu.Item key="1">
            <NavLink to="/about">عن موطن</NavLink>
        </Menu.Item>
        <Menu.Item key="2">
            <NavLink to="/about/mission">تاريخنا</NavLink>
        </Menu.Item>

        <Menu.Item key="3">
            <NavLink to="/about/mission">أعضاء مجلس الإدارة</NavLink>
        </Menu.Item>

        <Menu.Item key="4">
            <NavLink to="/about/mission">الإدارة التنفيذية</NavLink>
        </Menu.Item>
    </Menu>
);
const Navbar = () => {
    const { i18n, t } = useTranslation();
    const { isLang, setIsLang } = useContext(GeneralData);
    const [placement, setPlacement] = useState('left');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setIsLang(lang);
        localStorage.setItem('i18nextLng', lang);
    };

    const languageMenu = (
        <Menu>
            <Menu.Item key="en" onClick={() => changeLanguage('en')}>
                <img src="https://flagcdn.com/16x12/gb.png" alt="English" />
                English
            </Menu.Item>
            <Menu.Item key="ar" onClick={() => changeLanguage('ar')}>
                <img src="https://flagcdn.com/16x12/eg.png" alt="Arabic" />
                Arabic
            </Menu.Item>
        </Menu>
    );

    useEffect(() => {
        const lang = localStorage.getItem('i18nextLng') || i18n.language;
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        setPlacement(lang === 'ar' ? 'left' : 'right');
        setIsLang(lang);
    }, [i18n.language]);

    return (
        <div className={`navbar-container ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>



            <motion.div
                className={`navbar-main ${isScrolled ? 'fixed-navbar' : 'navbar-main-scroll'}`}
                initial={{ backgroundColor: "rgba(0, 0, 0, 0.58)" }}
                animate={isScrolled ? { backgroundColor: "#fff", padding: "5px 80px" } : { backgroundColor: "rgba(0, 0, 0, 0.58)", padding: "5px 80px" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                <div className="navbar_main_responsive">
                    <Link to={'/'} className="logo">
                        <Logo />
                    </Link>
                    <div className="hamburger-menu" onClick={toggleMenu}>
                        <Button icon={<MenuOutlined />} shape='circle' size='large' type='primary' />
                    </div>
                </div>
                <nav className={`navbar-links ${isMenuOpen ? 'show-links' : 'd-none'}`}>
                    <NavLink to='/'>
                        <HomeOutlined className='icon_res_sm' />
                        {t('nav_home')}
                    </NavLink> 
                    <Dropdown overlay={menu}  trigger={['hover']} className='dropdown_link' >
                        <NavLink to='/about'>
                            <InfoCircleOutlined className='icon_res_sm' />
                            {t('nav_about')}
                        </NavLink>
                    </Dropdown>
                    <NavLink to='/projects'>
                        <ProjectOutlined className='icon_res_sm' />
                        {t('nav_Projects')}
                    </NavLink>
                    <NavLink to='/services'>
                        <SettingOutlined className='icon_res_sm' />
                        {t('nav_service')}
                    </NavLink>
                    <NavLink to='/media-center'>
                        <ShoppingOutlined className='icon_res_sm' />
                        {t('nav_Products')}
                    </NavLink>
                    <div className="path_sm">
                        <NavLink to='/contact'>
                            <PhoneOutlined className='icon_res_sm' />
                            {t('nav_contact')}
                        </NavLink>
                    </div>

                    <NavLink to='/contact' className=" contact_us_dot flex justify-content-center align-items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 11 11" fill="none">
                            <circle cx="5.5" cy="5.5" r="5.5" fill="white" fill-opacity="0.25" />
                            <circle cx="5.5" cy="5.5" r="2.5" fill="white" />
                        </svg>
                        <NavLink to='/contact'>
                            <PhoneOutlined className='icon_res_sm' />
                            {t('nav_contact')}
                        </NavLink>
                    </NavLink>


                    <div className="language-switcher sm_lang">
                        {
                            i18n.language == "ar" ?
                                <div className="text-container " onClick={() => changeLanguage('en')}>
                                    <span className="language-text">English</span>
                                    <Icon.lang />
                                </div> :
                                <div className="text-container" onClick={() => changeLanguage('ar')}>
                                    <span className="language-text">عربي</span>
                                    <Icon.lang />
                                </div>
                        }

                    </div>
                </nav>


                <div className="language-switcher lg_lang">
                    {
                        i18n.language == "ar" ?
                            <div className="text-container " onClick={() => changeLanguage('en')}>
                                <span className="language-text">English</span>
                                <Icon.lang />
                            </div> :
                            <div className="text-container" onClick={() => changeLanguage('ar')}>
                                <span className="language-text">عربي</span>
                                <Icon.lang />
                            </div>
                    }
                    <div className="circle-icon">
                        <Icon.langC />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Navbar;
