import CustomFooter from '@components/footer/CustomFooter';
import Navbar from '@components/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import '../components/style.scss';


const MainLayout = () => { 
  return (
    <div  className='overflow-hidden'>
      <Navbar />
      <Outlet />
      <CustomFooter />
    </div>
  );
}

export default MainLayout;
