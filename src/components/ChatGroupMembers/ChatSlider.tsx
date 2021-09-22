import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import { Avatar } from 'antd';
import { groupData } from '../../types/ChatPreview.interface';
import './ChatSlider.scss';

interface ChatSliderProps {
  slides: groupData[];
}

const ChatSlider = ({ slides }: ChatSliderProps) => {
  const [activeSlide, setActiveSlide] = useState(1);
  const amountOfPhotos = slides.length;
  const oneSlidePhotos = 6;
  const lastSlide = Math.ceil(amountOfPhotos / oneSlidePhotos);

  const SliderArrowNext = ({ currentSlide, slideCount, ...props }: any) => (
    <img src={`${process.env.PUBLIC_URL}/images/next-arrow.png`} alt="prevArrow" {...props} />
  );
  const SliderArrowPrev = ({ currentSlide, slideCount, ...props }: any) => (
    <img src={`${process.env.PUBLIC_URL}/images/prev-arrow.png`} alt="prevArrow" {...props} />
  );
  const settings = {
    className: 'slider',
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 3,
    nextArrow: <SliderArrowNext currentSlide={0} slideCount={lastSlide} />,
    prevArrow: <SliderArrowPrev currentSlide={0} slideCount={lastSlide} />,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars-experimental
    beforeChange: (current: number, next: number) => {
      setActiveSlide(next + 1);
    },
  };

  return (
    <div className="chat-slider">
      <Slider {...settings}>
        {slides.map((item: any) => (
          <Avatar className="slider-img" alt="avatar" src={item.img} key={item.img} />
        ))}
      </Slider>
      <div className="slides-number">
        <p>
          {activeSlide}
          /
          {lastSlide}
        </p>
      </div>
    </div>
  );
};
export default ChatSlider;
