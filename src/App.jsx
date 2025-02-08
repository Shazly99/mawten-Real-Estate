import General from '@context/General';
import AppRouter from '@routes/AppRouter';
import { ConfigProvider } from 'antd';
import { useEffect } from 'react';
import './style/App.scss';
 

function App() {

  const theme = {
    token: {
      colorPrimary: '#0A1220',
      colorActiveText: 'red'
    },
    components: {
     
    },
  };
  useEffect(() => {
    const scrollStep = -window.pageYOffset / 50; // سرعة التمرير
    const scrollInterval = setInterval(() => {
        if (window.pageYOffset !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 10); // التحكم في السلاسة

    return () => clearInterval(scrollInterval); // تنظيف التايمر
}, []);
  return (
    <>
   
      <ConfigProvider theme={theme} >
        <General>
          <AppRouter /> 
        </General>
      </ConfigProvider>
    </>
  )
}

export default App
