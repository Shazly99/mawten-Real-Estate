import { CaretDownFilled, HomeOutlined, InfoCircleOutlined, MenuOutlined, PhoneOutlined, SettingOutlined, ShoppingOutlined } from '@ant-design/icons';
import Icon from '@constants/icon';
import Logo from '@constants/Logo';
import { GeneralData } from '@context/General';
import { Button, Dropdown, Menu } from 'antd';
import { motion } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import './navbar.scss';
import axios from "axios";

const Navbar = () => {
    const [sectors, setSectors] = useState([]);
    const { i18n, t } = useTranslation();
    const menu = (
        <Menu>
            <Menu.Item key="1">
                <NavLink to="/about"> {t('AboutMawten')}  </NavLink>
            </Menu.Item>
            <Menu.Item key="2">
                <NavLink to="/about/mission">{t('history')}</NavLink>
            </Menu.Item>

            <Menu.Item key="3">
                <NavLink to="/about/board">   {t('AboutMawten2')}  </NavLink>
            </Menu.Item>

            <Menu.Item key="4">
                <NavLink to="/about/executive-management">  {t('AboutMawten1')} </NavLink>
            </Menu.Item>
        </Menu>
    );

    const menuProjects = (
        <Menu>
          {sectors.map((sector) => (
            <Menu.Item key={sector.id}>
              <NavLink to={`/projects/sector/${sector.id}`}>
                {sector.title } 
              </NavLink>
            </Menu.Item>
          ))}
        </Menu>
      );
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

    
    useEffect(() => {
        const lang = localStorage.getItem('i18nextLng') || i18n.language;
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        setPlacement(lang === 'ar' ? 'left' : 'right');
        setIsLang(lang);
    }, [i18n.language]);


    useEffect(() => {
      axios.get("https://mawtan.rightclicksa.com/api/home/sectors").then((res) => {
        if (res.data.status === 200) {
          setSectors(res.data.data);
          console.log(res.data.data);
          
        }
      });
    }, []);
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
                    <Dropdown overlay={menu} placement={i18n.language == 'en' ? 'topLeft' : 'topRight'} trigger={['hover']} className='dropdown_link' >
                        <NavLink to='/about' className={'dropdown_trigger'}>
                            <InfoCircleOutlined className='icon_res_sm' />
                            <div className="drop_icon flex justify-content-center align-items-center gap-2 ">
                                {t('nav_about')}
                                <CaretDownFilled size={'small'} style={{ fontSize: '12px', marginTop: '2px', color: '#fff' }} /> {/* Make sure color is white */}
                            </div>
                        </NavLink>
                    </Dropdown>

                    <Dropdown overlay={menuProjects} placement={i18n.language == 'en' ? 'topLeft' : 'topRight'} trigger={['hover']} className='dropdown_link' >
                        <NavLink to='/projects' className={'dropdown_trigger'}>
                            <InfoCircleOutlined className='icon_res_sm' />
                            <div className="drop_icon flex justify-content-center align-items-center gap-2 ">
                                {t('nav_Projects')}
                                <CaretDownFilled size={'small'} style={{ fontSize: '12px', marginTop: '2px', color: '#fff' }} /> {/* Make sure color is white */}
                            </div>
                        </NavLink>
                    </Dropdown>
            
                    <NavLink to='/services'>
                        <SettingOutlined className='icon_res_sm' />
                        {t('nav_service')}
                    </NavLink>
                    <NavLink to='/media-center'>
                        <ShoppingOutlined className='icon_res_sm' />
                        <div className="drop_icon flex justify-content-center align-items-center gap-2 ">
                            {t('nav_Products')}
                            <CaretDownFilled size={'small'} style={{ fontSize: '12px', marginTop: '2px', color: '#fff' }} /> {/* Make sure color is white */}
                        </div>
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
