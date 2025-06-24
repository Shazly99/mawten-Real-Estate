import img from '@constants/img';
import { Carousel } from 'antd';
import 'antd/dist/reset.css';

const images = [
    img.projectSlider1,
    img.projectSlider2,
    img.projectSlider3,
];

const titles = [
    "قطــاع الضيافة",
    "القطاع السكني",
    "القطاع الصناعي",
];

const SliderProject = () => (
    <div style={{ width: '100%' }}>
        <Carousel autoplay speed={1000} easing="cubic-bezier(0.4, 0, 0.2, 1)" fade>
            {images.map((src, idx) => (
                <div key={idx}>
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        height: '100vh',
                        borderRadius: 8,
                        overflow: 'hidden'
                    }}>
                        <img
                            src={src}
                            alt={`slide-${idx}`}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block'
                            }}
                        />
                        {/* Overlay */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'rgba(0,0,0,0.4)'
                        }} />
                        {/* Centered Title */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            color: '#fff',
                            fontSize: '3rem', // Increased font size
                            fontWeight: 'bold',
                            textAlign: 'center',
                            zIndex: 1,
                            textShadow: '0 2px 8px rgba(0,0,0,0.7)',
                            fontFamily: 'Arial, sans-serif' // Added font family
                        }}>
                            مشاريعنـــا
                        </div>
                        <div style={{
                            position: 'absolute',
                            top: '59%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            color: '#fff',
                            fontSize: '1.9rem', 
                            textAlign: 'center',
                            zIndex: 1, 
                        }}>نطور لينمو الوطن
                            
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    </div>
);

export default SliderProject;