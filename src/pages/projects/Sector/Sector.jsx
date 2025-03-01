import React from 'react'
import './sector.scss'
import { Col, Row } from 'antd'
import img from '@constants/img'
import Icon from '@constants/icon'
import TitleH from '@components/common/TitleH'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const Sector = () => {
  let { t } = useTranslation()

  return (
    <>
      <div className="app_sector">
        <header>
          <div className="wrapper_master" >
            <div className="header">
              <h1>القطاع السكني </h1>
              <h1>ومتعدد الاستعمال</h1>
            </div>
          </div>
          <img src={img.sector} alt="" />
        </header>
        <main>
          <div className="sector__num">
            <div className="icons">
              <Icon.projects />
              <div className="content">
                <p> المشاريع</p>
                <h3>6</h3>
              </div>
            </div>

            <div className="icons">
              <Icon.investment />
              <div className="content">
                <p> الاستثمارات</p>
                <h3>2 مليار</h3>
              </div>
            </div>
          </div>
          <p>مشروع فريد بموقعه في مكة مكرمة ملاصق لوجهة مسار ويبعد عن الحرم المكي الشريف قرابة 3600 متر، تطوره شركة موطن العقارية كبرج سكني بارتفاع 27 طابق على مساحة تبلغ 6,580 متر مربع وبمسطحات بناء حوالي 114 ألف متر مربع في منطقة الرصيفة بمكة المكرمة بإطلالة كاملة على الدائري الثالث وبجوار محطة قطار الحرمين ليشكل معلماً بارزاً للقادمين من مدينة جدة. ي</p>
        </main>



      </div>
      <div className="sector_projects">
        <TitleH title={'مشاريع'} highlight={'القطاع السكني'} />
        <div className="projects">
          <Row gutter={[50,50]} >
            <Col xl={12} md={12} xs={24} sm={24} >
              <div className="card">
                <div className="card_image">
                  <img src={img.Projects1} alt="" />
                </div>
                <div className="card_content">
                  <div className="flex justify-content-between ">

                    <div className="header">
                      <strong>(القــطاع السكنى)</strong>
                      <h2>موطن مسار تاورز </h2>
                    </div>
                    <Link to='/project/1' className="more flex justify-content-center align-items-center gap-4">
                      <span> {t('more')}  </span>
                      <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11.4095" cy="11.4095" r="11.1595" transform="matrix(-0.707107 0.707107 0.707107 0.707107 16.1367 0)" fill="white" stroke="#171E1C" stroke-width="0.5" />
                        <path d="M11.1367 16.3893C10.7853 16.0378 10.7853 15.4679 11.1367 15.1165L16.8643 9.38891C17.2158 9.03744 17.7856 9.03744 18.1371 9.38891C18.4886 9.74038 18.4886 10.3102 18.1371 10.6617L13.0459 15.7529L18.1371 20.844C18.4886 21.1955 18.4886 21.7654 18.1371 22.1168C17.7856 22.4683 17.2158 22.4683 16.8643 22.1168L11.1367 16.3893ZM20.498 16.6529L11.7731 16.6529L11.7731 14.8529L20.498 14.8529L20.498 16.6529Z" fill="#181818" />
                      </svg>
                    </Link>
                  </div>
                  <p className='mt-3' >مشروع فريد بموقعه في مكة مكرمة ملاصق لوجهة مسار ويبعد عن الحرم المكي الشريف قرابة 3600 متر، تطوره شركة موطن العقارية كبرج سكني بارتفاع 27 طابق على مساحة تبلغ 6,580 متر مربع وبمسطحات بناء حوالي 114 ألف متر مرب</p>
                </div>

              </div>
            </Col>
            <Col xl={12} md={12} xs={24} sm={24} >
              <div className="card">
                <div className="card_image">
                  <img src={img.Projects1} alt="" />
                </div>
                <div className="card_content">
                  <div className="flex justify-content-between ">

                    <div className="header">
                      <strong>(القــطاع السكنى)</strong>
                      <h2>موطن مسار تاورز </h2>
                    </div>
                    <Link to='/project/1' className="more flex justify-content-center align-items-center gap-4">
                      <span>اكتشف المزيد</span>
                      <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11.4095" cy="11.4095" r="11.1595" transform="matrix(-0.707107 0.707107 0.707107 0.707107 16.1367 0)" fill="white" stroke="#171E1C" stroke-width="0.5" />
                        <path d="M11.1367 16.3893C10.7853 16.0378 10.7853 15.4679 11.1367 15.1165L16.8643 9.38891C17.2158 9.03744 17.7856 9.03744 18.1371 9.38891C18.4886 9.74038 18.4886 10.3102 18.1371 10.6617L13.0459 15.7529L18.1371 20.844C18.4886 21.1955 18.4886 21.7654 18.1371 22.1168C17.7856 22.4683 17.2158 22.4683 16.8643 22.1168L11.1367 16.3893ZM20.498 16.6529L11.7731 16.6529L11.7731 14.8529L20.498 14.8529L20.498 16.6529Z" fill="#181818" />
                      </svg>
                    </Link>
                  </div>
                  <p className='mt-3' >مشروع فريد بموقعه في مكة مكرمة ملاصق لوجهة مسار ويبعد عن الحرم المكي الشريف قرابة 3600 متر، تطوره شركة موطن العقارية كبرج سكني بارتفاع 27 طابق على مساحة تبلغ 6,580 متر مربع وبمسطحات بناء حوالي 114 ألف متر مرب</p>
                </div>

              </div>
            </Col>
            <Col xl={12} md={12} xs={24} sm={24} >
              <div className="card">
                <div className="card_image">
                  <img src={img.Projects1} alt="" />
                </div>
                <div className="card_content">
                  <div className="flex justify-content-between ">

                    <div className="header">
                      <strong>(القــطاع السكنى)</strong>
                      <h2>موطن مسار تاورز </h2>
                    </div>
                    <Link to='/project/1' className="more flex justify-content-center align-items-center gap-4">
                      <span>اكتشف المزيد</span>
                      <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11.4095" cy="11.4095" r="11.1595" transform="matrix(-0.707107 0.707107 0.707107 0.707107 16.1367 0)" fill="white" stroke="#171E1C" stroke-width="0.5" />
                        <path d="M11.1367 16.3893C10.7853 16.0378 10.7853 15.4679 11.1367 15.1165L16.8643 9.38891C17.2158 9.03744 17.7856 9.03744 18.1371 9.38891C18.4886 9.74038 18.4886 10.3102 18.1371 10.6617L13.0459 15.7529L18.1371 20.844C18.4886 21.1955 18.4886 21.7654 18.1371 22.1168C17.7856 22.4683 17.2158 22.4683 16.8643 22.1168L11.1367 16.3893ZM20.498 16.6529L11.7731 16.6529L11.7731 14.8529L20.498 14.8529L20.498 16.6529Z" fill="#181818" />
                      </svg>
                    </Link>
                  </div>
                  <p className='mt-3' >مشروع فريد بموقعه في مكة مكرمة ملاصق لوجهة مسار ويبعد عن الحرم المكي الشريف قرابة 3600 متر، تطوره شركة موطن العقارية كبرج سكني بارتفاع 27 طابق على مساحة تبلغ 6,580 متر مربع وبمسطحات بناء حوالي 114 ألف متر مرب</p>
                </div>

              </div>
            </Col>
            <Col xl={12} md={12} xs={24} sm={24} >
              <div className="card">
                <div className="card_image">
                  <img src={img.Projects1} alt="" />
                </div>
                <div className="card_content">
                  <div className="flex justify-content-between ">

                    <div className="header">
                      <strong>(القــطاع السكنى)</strong>
                      <h2>موطن مسار تاورز </h2>
                    </div>
                    <Link to='/project/1' className="more flex justify-content-center align-items-center gap-4">
                      <span>اكتشف المزيد</span>
                      <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11.4095" cy="11.4095" r="11.1595" transform="matrix(-0.707107 0.707107 0.707107 0.707107 16.1367 0)" fill="white" stroke="#171E1C" stroke-width="0.5" />
                        <path d="M11.1367 16.3893C10.7853 16.0378 10.7853 15.4679 11.1367 15.1165L16.8643 9.38891C17.2158 9.03744 17.7856 9.03744 18.1371 9.38891C18.4886 9.74038 18.4886 10.3102 18.1371 10.6617L13.0459 15.7529L18.1371 20.844C18.4886 21.1955 18.4886 21.7654 18.1371 22.1168C17.7856 22.4683 17.2158 22.4683 16.8643 22.1168L11.1367 16.3893ZM20.498 16.6529L11.7731 16.6529L11.7731 14.8529L20.498 14.8529L20.498 16.6529Z" fill="#181818" />
                      </svg>
                    </Link>
                  </div>
                  <p className='mt-3' >مشروع فريد بموقعه في مكة مكرمة ملاصق لوجهة مسار ويبعد عن الحرم المكي الشريف قرابة 3600 متر، تطوره شركة موطن العقارية كبرج سكني بارتفاع 27 طابق على مساحة تبلغ 6,580 متر مربع وبمسطحات بناء حوالي 114 ألف متر مرب</p>
                </div>

              </div>
            </Col>

          </Row>

        </div>
      </div>
    </>
  )
}

export default Sector
