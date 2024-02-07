
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperBtnNext from '../../components/SwiperBtnNext';
import SwiperBtnPrev from '../../components/SwiperBtnPrev';
import arrowNext from '../../assets/images/arrow-left.svg'
import arrowPrev from '../../assets/images/arrow-right.svg'
import {useGetRecentEvents} from '../../api/recentEvents/useGetRecentEvents';
import {TRecentEvent} from '../../types';

const RecentEvent = () => {
  const {data: recentEvents, isLoading} = useGetRecentEvents()

  if(isLoading){
    return <p className='text-center font-semibold text-lg'>Loading ....</p>
  }
  return (
    <div className="custom-container my-10 md:my-28">
      <h1 className="section-title">Recent Events</h1>
      <p className="section-sub-text max-w-[85ch]">Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.</p>
      <div className='pt-10 lg:pt-[75px] mx-14 relative recent-event-slider'>

        <Swiper
            spaceBetween={30}
            loop={true}
            slidesPerView={4}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              625:{
                slidesPerView:2,
                spaceBetween: 10
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              850:{
                slidesPerView: 4,
              }
            }}
          >
          <div className='absolute z-50 top-[120px] md:top-[178px] right-[-50px] lg:right-[-58px] visible'>
            <SwiperBtnNext className='h-9 lg:h-12 w-9 lg:w-12 shadow-md rounded-full flex justify-center items-center bg-[#DEDEDE] hover:bg-white transition-all delay-100 ease-in-out'>
              <img src={arrowNext} alt="Next" />
            </SwiperBtnNext>
          </div>
          <div className='absolute z-50 top-[120px] md:top-[178px] left-[-50px] lg:left-[-58px] visible'>
            <SwiperBtnPrev className='h-9 lg:h-12 w-9 lg:w-12 shadow-md rounded-full flex justify-center items-center bg-[#DEDEDE] hover:bg-white transition-all delay-100 ease-in-out'>
              <img src={arrowPrev} alt="Prev" />
            </SwiperBtnPrev>
          </div>
          {
            recentEvents?.data?.length > 0 && 
            recentEvents?.data?.map((event: TRecentEvent) => <SwiperSlide>
            <div className='bg-[#F2F2F2] rounded-md'>
              <div className='rounded-md rounded-b-none h-[160px] sm:h-[220px] w-full'>
                <img src={event?.img} alt={event?.title} className='rounded-md rounded-b-none h-full w-full object-cover' />
              </div>
              <div className="p-4">
                <p>{event?.title}</p>
                <p className='text-[#475569] text-sm'>{event?.owner}</p>
              </div>
            </div>
          </SwiperSlide> )
          }
        </Swiper>
      </div>

    </div>
  );
};

export default RecentEvent;