import img from '@constants/img'
import { Spin } from 'antd'
import React from 'react'

const Loader = () => {
    return (
        <div className="app__loading flex justify-content-center align-items-center">
            <img src={img.loader}  alt=""  />
        </div>
    )
}

export default Loader
