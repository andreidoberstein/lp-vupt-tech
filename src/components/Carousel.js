// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import Feed from '../image/prt.jpg'
import Feed1 from '../image/feed-1.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function Carousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >

      <SwiperSlide><img src={Feed1} alt='feed' className='h-[30rem] bg-indigo-100 p-6 rounded shadow' /></SwiperSlide>
      <SwiperSlide><img src={Feed} alt='feed' className='h-[30rem] bg-indigo-100 p-6 rounded shadow' /></SwiperSlide>
      <SwiperSlide><img src={Feed} alt='feed' className='h-[30rem] bg-indigo-100 p-6 rounded shadow' /></SwiperSlide>
      <SwiperSlide><img src={Feed} alt='feed' className='h-[30rem] bg-indigo-100 p-6 rounded shadow' /></SwiperSlide>
      <SwiperSlide><img src={Feed} alt='feed' className='h-[30rem] bg-indigo-100 p-6 rounded shadow' /></SwiperSlide>
      <SwiperSlide><img src={Feed} alt='feed' className='h-[30rem] bg-indigo-100 p-6 rounded shadow' /></SwiperSlide>
      <SwiperSlide><img src={Feed} alt='feed' className='h-[30rem] bg-indigo-100 p-6 rounded shadow' /></SwiperSlide>
    </Swiper>
  );
};