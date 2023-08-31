import React from "react";
import Slider from "react-slick";
import { Image, Header } from "semantic-ui-react";
import { Screenshot } from "../types/gameTypes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ScreenshotCarouselProps {
  screenshots: Screenshot[];
}

const ScreenshotCarousel: React.FC<ScreenshotCarouselProps> = ({
  screenshots,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ padding: "20px 40px" }}>
      <Header as="h3">Скриншоты</Header>
      <Slider {...settings}>
        {screenshots.map(({ id, image }) => (
          <Image src={image} alt={`screenshot ${id}`} key={id} />
        ))}
      </Slider>
    </div>
  );
};

export default ScreenshotCarousel;
