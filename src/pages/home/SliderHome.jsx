import React from 'react'
 import img from '@constants/img'

const SliderHome = () => {
  return (
    <> 
    <div className='app__slider'>
      <video
        src={img.slider}
        className='  object-cover'
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
    </>
  )
}

export default SliderHome
