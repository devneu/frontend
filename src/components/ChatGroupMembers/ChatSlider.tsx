import React, { useState } from 'react';
import Slider, { CustomArrowProps, Settings } from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import { Avatar } from 'antd';
import { GroupChat } from '../../types/ChatPreview.interface';
import './ChatSlider.scss';

interface ChatSliderProps {
  slides: GroupChat[];
}

const ChatSlider = ({ slides }: ChatSliderProps) => {
  const [activeNumberSlide, setActiveNumberSlide] = useState(1);
  const SLIDER_ITEMS_NUMBER = slides.length;
  const ITEMS_PER_SLIDE = 6;
  const lastNumberSlide = Math.ceil(SLIDER_ITEMS_NUMBER / ITEMS_PER_SLIDE);

  const SliderArrowNext = ({ currentSlide, slideCount, ...props }: CustomArrowProps) => (
    <img src={`${process.env.PUBLIC_URL}/images/next-arrow.png`} alt="prevArrow" {...props} />
  );
  const SliderArrowPrev = ({ currentSlide, slideCount, ...props }: CustomArrowProps) => (
    <img src={`${process.env.PUBLIC_URL}/images/prev-arrow.png`} alt="prevArrow" {...props} />
  );
  const settings: Settings = {
    className: 'slider',
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 3,
    nextArrow: <SliderArrowNext currentSlide={0} slideCount={lastNumberSlide} />,
    prevArrow: <SliderArrowPrev currentSlide={0} slideCount={lastNumberSlide} />,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars-experimental
    beforeChange: (current: number, next: number) => {
      setActiveNumberSlide(next + 1);
    },
  };

  return (
    <div className="chat-slider">
      <Slider {...settings}>
        {slides.map((item) => (
          <Avatar className="slider-img" alt="avatar" src={item.img} key={item.img} />
        ))}
      </Slider>
      <div className="slides-number">
        {activeNumberSlide}
        /
        {lastNumberSlide}
      </div>
    </div>
  );
};
export default ChatSlider;
