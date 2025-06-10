import General from '@context/General';
import AppRouter from '@routes/AppRouter';
import { ConfigProvider, Slider } from 'antd';
import { useEffect } from 'react';
import './style/App.scss';


function App() {

  const theme = {
    token: {
      colorPrimary: '#0A1220',
      colorActiveText: 'red'
    },
    components: {
      Slider: {
        colorPrimary: '#A61517',
        colorActiveText: '#A61517'
      }
    },
  };
  useEffect(() => {
    const scrollStep = -window.pageYOffset / 50;
    const scrollInterval = setInterval(() => {
      if (window.pageYOffset !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 10);

    return () => clearInterval(scrollInterval); 
  }, []);
  return (
    <div className='trial__version'>
      <div className="trial__version__text">
        <span>  إطلاق تجريبي</span>
      </div>
      <ConfigProvider theme={theme} >
        <General>
          <AppRouter />
        </General>
      </ConfigProvider>
    </div>
  )
}

export default App 