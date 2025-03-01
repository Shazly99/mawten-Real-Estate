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



// import React from 'react';
// import './style.scss';
// import r from './Frame.png';
// import img from '@constants/img';
// import html2canvas from 'html2canvas';

// const MainLayout = () => {
//   const handleDownloadImage = () => {
//     const contentElement = document.querySelector(".bg"); 

//     if (contentElement) {
//       html2canvas(contentElement, {
//         scale: 3, 
//         useCORS: true,
//         logging: true, 
//         backgroundColor: null, 
//       }).then((canvas) => {
//         const imgData = canvas.toDataURL('image/png');
//         const link = document.createElement('a');
//         link.href = imgData;
//         link.download = 'page_image.png';
//         link.click();
//       });
//     } else {
//       console.error('Element not found: .content');
//     }
//   };

//   return (
//     <div className="bg">
//       <button onClick={handleDownloadImage}>تحميل الصورة</button>
//     </div>
//   );
// };

// export default MainLayout;
