import img from '@constants/img'
import CompanyOverview from '@pages/home/CompanyOverview'
import GalleryTitle from '@pages/home/GalleryTitle'
import HomeContactUs from '@pages/home/HomeContactUs'
import TitleSection from '@pages/home/TitleSection'
import React from 'react'
import AboutCompanyOverview from './AboutCompanyOverview'
import Value from './Value'

const About = () => {
    return (
        <div>
            <img src={img.aboutCover} alt="" srcset="" className='w-full' />
            <TitleSection />
            <GalleryTitle />
            <AboutCompanyOverview />
            <Value />
         
        </div>
    )
}

export default About
