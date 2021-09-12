import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import './SimpleSlider.scss';

const SimpleSlider = ({ slider }: any) => {
  const settings = {
    className: 'simpleSlider',
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 3,
  };
  return (
    <div className="simple-slider">
      <Slider {...settings}>
        {slider.map((item: any) => (
          <div>
            <img className="slider-img" alt="avatar" src={item.img} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default SimpleSlider;
