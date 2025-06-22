import { CaretDownFilled, HomeOutlined, InfoCircleOutlined, MenuOutlined, SettingOutlined, ShoppingOutlined } from '@ant-design/icons';
import Icon from '@constants/icon';
import Logo from '@constants/Logo';
import { GeneralData } from '@context/General';
import { Button, Dropdown, Menu, Modal } from 'antd';
import axios from "axios";
import { motion } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import './navbar.scss';

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
                        {sector.title} {sector.sub_title && `${sector.sub_title}`}
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
            }
        });
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
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

                    <NavLink to='/contact'>
                        <ShoppingOutlined className='icon_res_sm' />
                        <div className="drop_icon flex justify-content-center align-items-center gap-2 ">
                            {t('nav_contact')}
                         </div>
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
                    <div className="circle-icon">
                        <Icon.langC />
                    </div>
                    {/*   {
                        i18n.language == "ar" ? */}
                    <div className="text-container " onClick={showModal}>
                        <span className="language-text">En</span>
                        <Icon.lang />
                    </div>
                    {/*                      :
                    <div className="text-container" onClick={() => changeLanguage('ar')}>
                        <span className="language-text">عربي</span>
                        <Icon.lang />
                    </div>
                    } */}
                </div>
            </motion.div>

            <Modal
                title={null}
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                footer={null}
                onCancel={handleCancel}
            >
                <div className="p-8 flex flex-column justify-content-center align-items-center gap-4">

                    <svg width="80" height="80" viewBox="0 0 161 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_275_7911)">
                            <rect x="0.880249" y="0.628784" width="160.12" height="160.12" rx="80.0599" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.993896 29.5924C0.993896 13.8084 14.0602 0.74231 29.8441 0.74231H132.036C147.82 0.74231 160.887 13.8084 160.887 29.5924V131.785C160.887 147.569 147.82 160.635 132.036 160.635H29.8441C14.0602 160.635 0.993896 147.569 0.993896 131.785V29.5924ZM106.852 46.6534C103.632 47.2602 101.195 50.088 101.195 53.4849C101.195 57.3243 104.308 60.4367 108.147 60.4367H124.073C127.912 60.4367 131.025 57.3243 131.025 53.4849V37.5586C131.025 33.7192 127.912 30.6068 124.073 30.6068C120.399 30.6068 117.391 33.4568 117.138 37.0667C97.7515 21.012 69.7412 19.9085 49.1686 33.7561C46.2296 35.7342 43.4426 38.0176 40.8541 40.6061L40.8461 40.614C28.7293 52.7355 23.4787 68.6284 24.227 84.34C24.4096 88.1752 27.6665 91.1362 31.5016 90.9538C35.3367 90.7713 38.2975 87.5139 38.1149 83.6794C37.5361 71.5239 41.5732 59.5498 50.6855 50.4375C65.8387 35.2843 90.1711 34.0229 106.852 46.6534ZM37.8071 130.77C41.4784 130.77 44.4849 127.924 44.7413 124.318C66.8973 142.667 100.318 141.487 121.026 120.78C132.417 109.389 137.661 94.2846 137.661 80.0302C137.661 76.1906 134.549 73.0785 130.709 73.0785C126.87 73.0785 123.757 76.1906 123.757 80.0302C123.757 90.9072 119.774 102.255 111.391 110.75C111.325 110.812 111.259 110.875 111.194 110.94C96.0406 126.093 71.7086 127.354 55.0274 114.723C58.2483 114.117 60.685 111.289 60.685 107.892C60.685 104.053 57.5726 100.94 53.7332 100.94H37.8071C33.9678 100.94 30.8553 104.053 30.8553 107.892V123.818C30.8553 127.657 33.9678 130.77 37.8071 130.77Z" fill="#162A2B" />
                        </g>
                        <defs>
                            <clipPath id="clip0_275_7911">
                                <rect x="0.880249" y="0.628784" width="160.12" height="160.12" rx="80.0599" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <h2 className='text-center' >The English Language is under development & it will be ready soon</h2>



                </div>
            </Modal>
        </div>
    );
};

export default Navbar;
