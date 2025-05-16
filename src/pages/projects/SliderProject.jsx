import React from 'react';
import { Carousel } from 'antd';
import 'antd/dist/reset.css';
import img from '@constants/img';

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
        <Carousel autoplay>
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
                            fontSize: '2.5rem',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            zIndex: 1,
                            textShadow: '0 2px 8px rgba(0,0,0,0.7)'
                        }}>
                            {titles[idx]}
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    </div>
);

export default SliderProject;