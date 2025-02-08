import React from 'react';
import { Link } from 'react-router-dom';
import img from '@constants/img';
import Icon from '@constants/icon';
import { motion } from 'framer-motion';

export const Header = ({ headerData }) => {
    return (
        <div className="app_header_page">
            {/* Animation for the image */}
            <motion.img
                src={headerData.image}
                alt="About Header"
                className="w-full"
                initial={{ scale: 1.2, opacity: 0 }} 
                animate={{ scale: 1, opacity: 1 }}   
                transition={{ duration: 1.5, ease: "easeOut" }}
            />

            <div className="overlay">
                <h2>{headerData.title}</h2>
                <div className="breadcrumb mt-3">
                    {headerData.breadcrumb.map((item, index) => (
                        <span key={index}>
                            <Link to={item.link}>{item.label}</Link>
                            {index < headerData.breadcrumb.length - 1 && <Icon.arrowP />}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};
