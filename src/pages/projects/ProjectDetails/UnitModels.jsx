import TitleH from "@components/common/TitleH";
import Icon from "@constants/icon";
import img from "@constants/img";
import { Button, Col, Row } from "antd";
import './UnitModels.scss';
// افترض أن عندك الصور في مجلد assets
const modelImages = [
    { id: "A", src: img.modelA },
    { id: "B", src: img.modelB },
    { id: "C", src: img.modelC },
    { id: "D", src: img.modelD },
    { id: "E", src: img.modelD },
];

export default function UnitModels() {
    const selected = "A";

    return (
        <div className="unit-models-container">

            <Row gutter={48} className="unit-models" >
                {/* تفاصيل */}
                <Col md={12} xs={24}>
                    <TitleH highlight={'نماذج الوحدات'} />

                    <div className="model-selector mt-4">
                        {modelImages.map((m) => (
                            <Button
                                key={m.id}
                                className={`model-button ${m.id === selected ? "active" : ""}    `}
                            >
                                {m.id}
                            </Button>
                        ))}
                    </div>

                    <Row className="unit-info" justify="space-between">
                        <Col span={12} className="info-block">
                            <div className="info-label">المساحة</div>
                            <div className="info-value">70 <sub> م<sup>2</sup></sub> </div>
                        </Col>
                        <Col span={12} className="info-block">
                            <div className="info-label">عدد الغرف</div>
                            <div className="info-value">1</div>
                        </Col>
                    </Row>


                    <Button icon={<Icon.share />} iconPosition="end" size="large" className="tour-button">
                        جولة افتراضية 360°
                    </Button>

                    <Button type="primary" size="large" className="book-button">
                        احجز الآن
                    </Button>
                </Col>
                {/* صورة الوحدة */}
                <Col md={12} xs={24}>
                    <img
                        src={img.unit}
                        alt={`نموذج ${selected}`}
                        className="main-plan"
                    />

                    {/* صور مصغرة */}
                    <div className="thumbnails ">
                        {modelImages.map((img) => (
                            <img
                                key={img.id}
                                src={img.src}
                                alt={img.id}
                                className={`thumb ${img.id === selected ? "active" : ""}`}
                            />
                        ))}
                    </div>
                </Col>
            </Row>
        </div>

    );
}
