import React from "react";
import { Button } from "antd";
import "./style.scss";
import Icon from "@constants/icon";

const CustomButton = ({ title }) => {
    return (
        <Button type="text" className="custom-button">
            {
                title ?
                    <span>{title}</span> :
                    <span> اكتشف المزيد </span>
            }
            <div className="icon-container">
                <Icon.arrow />
            </div>
        </Button>
    );
};

export default CustomButton;
