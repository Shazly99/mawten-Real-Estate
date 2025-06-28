import CustomFooter from '@components/footer/CustomFooter';
import Navbar from '@components/navbar/Navbar';
import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';


const MainLayout = () => {
  let location = useLocation()
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
  return (
    <div className='overflow-hidden'>
      <div className={
        (location.pathname == '/services' ||
          location.pathname.includes('projects') ||
          location.pathname == '/contact' ||
          location.pathname.includes('about') ||
          location.pathname == '/about/mission') ? isScrolled ? '' : 'other' :
          (location.pathname.includes('projects') ||
            location.pathname == '/contact') ? 'blogs_navbar'  :  (location.pathname.includes('/project/') ? '' : 'bg_dark') }       >
        <Navbar />
      </div>
      <Outlet />
      <CustomFooter />
    </div>
  );
}

export default MainLayout;
