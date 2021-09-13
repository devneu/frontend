import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import './ChatSlider.scss';
import { Avatar } from 'antd';
import { ChatData } from '../../types/ChatPreview.interface';

interface SliderProps {
  slider: ChatData[];
}
const ChatSlider = ({ slider }: SliderProps) => {
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
            <Avatar className="slider-img" src={item.img} key={item.img} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default ChatSlider;
