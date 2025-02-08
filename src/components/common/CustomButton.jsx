import React from "react";
import { Button } from "antd";
import "./style.scss";
import Icon from "@constants/icon";
import { useTranslation } from "react-i18next";

const CustomButton = ({ title }) => {
    let { t } = useTranslation()
    return (
        <Button type="text" className="custom-button">
            {
                title ?
                    <span>{title}</span> :
                    <span>   {t('more')}  </span>
            }
            <div className="icon-container">
                <Icon.arrow />
            </div>
        </Button>
    );
};

export default CustomButton;
