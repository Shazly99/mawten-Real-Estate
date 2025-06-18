import Icon from "@constants/icon";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import "./style.scss";

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
