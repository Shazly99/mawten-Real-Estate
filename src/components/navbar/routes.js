import { HomeOutlined, InfoCircleOutlined, PhoneOutlined, ProjectOutlined, ReadOutlined, SolutionOutlined } from '@ant-design/icons';
import React from 'react';

const routes = [
    {
        path: "/",
        nameEn: "Home",
        nameAr: "الرئيسية",
        icon: React.createElement(HomeOutlined), 
    },
    {
        path: "/about",
        nameEn: "About Us",
        nameAr: "نبــذه عنــا",
        icon: React.createElement(InfoCircleOutlined), 
    },
    {
        path: "/service",
        nameEn: "Service",
        nameAr: "خدماتنا",
        icon: React.createElement(SolutionOutlined), 
    },
    {
        path: "/portfolio",
        nameEn: "Portfolio",
        nameAr: "اعمالنا",
        icon: React.createElement(ProjectOutlined), 
    },
    {
        path: "/blogs",
        nameEn: "Blogs",
        nameAr: "مدوناتنا",
        icon: React.createElement(ReadOutlined),
    }, 
    {
        path: "/contact",
        nameEn: "Contact Us",
        nameAr: "تـواصل معنــا",
        icon: React.createElement(PhoneOutlined),
    }, 
];

export default routes;
