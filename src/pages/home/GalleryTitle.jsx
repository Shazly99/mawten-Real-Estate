import { Carousel } from "antd";
import "./home.scss";

const GalleryTitle = ({ data }) => {
    return (
        <div className="image-gallery">
            <Carousel
                autoplay
                autoplaySpeed={2500}
                speed={1800}
                dots={false} 
                pauseOnHover={false}
                slidesToShow={4}
                responsive={[
                    { breakpoint: 1200, settings: { slidesToShow: 4 } },
                    { breakpoint: 992, settings: { slidesToShow: 3 } },
                    { breakpoint: 768, settings: { slidesToShow: 2 } },
                    { breakpoint: 480, settings: { slidesToShow: 1 } },
                ]}
                effect="scrollx"
                infinite
            >
                {data.map((item, index) => (
                    <div key={index} className="p-1">
                        <img src={item.image} alt="City View" style={{ width: "100%", objectFit: "cover" }} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default GalleryTitle;
