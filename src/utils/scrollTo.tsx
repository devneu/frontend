import { scroller } from 'react-scroll';

function scrollTo(className: string): void {
  scroller.scrollTo(className, {
    duration: 300,
    delay: 0,
    offset: -100,
    smooth: 'easeInOutQuart',
  });
}

export default scrollTo;
