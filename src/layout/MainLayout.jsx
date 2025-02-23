import CustomFooter from '@components/footer/CustomFooter';
import Navbar from '@components/navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import '../components/style.scss';


const MainLayout = () => {
  let location = useLocation()
  return (
    <div className='overflow-hidden'>
      <div className={
        (location.pathname == '/services' ||   location.pathname.includes('about') || location.pathname == '/about/mission') ? 'other' :
          (location.pathname == '/media-center' || location.pathname.includes('projects')|| location.pathname == '/contact') ? 'blogs_navbar' :
            ''}>
        <Navbar />
      </div>
      <Outlet />
      <CustomFooter />
    </div>
  );
}

export default MainLayout;
