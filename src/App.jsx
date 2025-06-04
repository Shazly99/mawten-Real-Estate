import React, { useRef, useState } from 'react';
import './style/App.scss';
import baseImage from '/copy.jpg'; // تأكد من المسار الصحيح

function App() {
  const canvasRef = useRef(null);
  const [employeeName, setEmployeeName] = useState('');

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.src = baseImage;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      // إعدادات النص
      ctx.font = '80px "Bahij", sans-serif'; // اسم الخط المزخرف بعد تثبيته
      ctx.fillStyle = '#f11d23';
      ctx.textAlign = 'center';

      ctx.shadowColor = 'rgba(0,0,0,0.4)';
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
      ctx.shadowBlur = 4;

      ctx.fillText(employeeName, canvas.width / 2, canvas.height - 110);

      const link = document.createElement('a');
      link.download = `${employeeName}.jpg`;
      link.href = canvas.toDataURL('image/jpeg');
      link.click();
    };
  };

  return (
    <div className="background-container">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="الرجاء إدخال الاسم"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
        />
        <button onClick={handleDownload}>احصل على بطاقتك</button>
      </div>

      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
}

export default App;
