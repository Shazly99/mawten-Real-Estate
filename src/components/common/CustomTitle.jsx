import React from "react";
import "./style.scss";
 
const CustomTitle = ({title , title2}) => {
    return (
        <div className="custom-title">
            <span className="title-main">
                <span className="title-gray">{title}</span>
                <span className="title-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                        <path d="M0 0H18C22.9706 0 27 4.02944 27 9V27L24.8682 9.94595C24.3576 5.86045 21.1396 2.64244 17.0541 2.13176L0  " fill="#A61517" />
                    </svg>
                </span>
            </span>
            <span className="title-black">{title2}</span>
        </div>
    );
};

export default CustomTitle;