import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import user1 from '../../assets/images/user-1.jpg'
import user2 from '../../assets/images/user-2.svg'
import user3 from '../../assets/images/user-3.png'

const ReviewSection = () => {
  return (
    <div className="mt-10 pt-14 md:pt-16 lg:pt-[88px] pb-10 md:pb-20 bg-gradient-to-r from-[#6A0DE0] to-[#1E0044]">
      <div className="custom-container">
        <h1 className="text-[38px] md:text-[50px] lg:text-[64px] font-bold text-white leading-none pb-10 lg:pb-[88px]">What everyone says</h1>
      </div>
      <div className='pl-5 md:pl-10'>
        <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            autoplay={true}
            loop={true}
            slidesPerView={3.3}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
                spaceBetween: 10
              },
              625:{
                slidesPerView:2.3,
                spaceBetween: 10
              },
              768: {
                slidesPerView: 2.3,
                spaceBetween: 20
              },
              850:{
                slidesPerView: 3.3,
              }
            }}
          >
            <SwiperSlide>
              <div className='bg-[#A1B5CC] bg-opacity-30 px-[30px] py-[35px] rounded-md text-white'>
                <p>Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.</p>
                <div className="flex items-center gap-3 mt-5">
                  <img src={user1} alt="" className='rounded-full' />
                  <div>
                    <p className='text-[18px]'>Hellen Jummy</p>
                    <p className='text-[#8190A6]'>Financial Counselor</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>            
              <div className='bg-[#A1B5CC] bg-opacity-30 px-[30px] py-[35px] rounded-md text-white'>
                <p className='font-light'>Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.</p>
                <div className="flex items-center gap-3 mt-5">
                  <img src={user2} alt="" className='rounded-full' />
                  <div>
                    <p className='text-[18px]'>Ralph Edwards</p>
                    <p className='text-[#8190A6]'>Math Teacher</p>
                  </div>
                </div>
              </div></SwiperSlide>
            <SwiperSlide>
            <div className='bg-[#A1B5CC] bg-opacity-30 px-[30px] py-[35px] rounded-md text-white'>
                <p className='font-light'>Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.</p>
                <div className="flex items-center gap-3 mt-5">
                  <img src={user3} alt="" className='rounded-full' />
                  <div>
                    <p className='text-base md:text-[18px]'>Hellena John</p>
                    <p className='text-sm md:text-base text-[#8190A6]'>Psychology Student</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='bg-[#A1B5CC] bg-opacity-30 px-[30px] py-[35px] rounded-md text-white'>
                <p className='font-light'>Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.</p>
                <div className="flex items-center gap-3 mt-5">
                  <img src={user3} alt="" className='rounded-full' />
                  <div>
                    <p className='text-[18px]'>Hellen Jummy</p>
                    <p className='text-[#8190A6]'>Financial Counselor</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='bg-[#A1B5CC] bg-opacity-30 px-[30px] py-[35px] rounded-md text-white'>
                <p className='font-light'>Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.</p>
                <div className="flex items-center gap-3 mt-5">
                  <img src={user1} alt="" className='rounded-full' />
                  <div>
                    <p className='text-[18px]'>Hellen Jummy</p>
                    <p className='text-[#8190A6]'>Financial Counselor</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='bg-[#A1B5CC] bg-opacity-30 px-[30px] py-[35px] rounded-md text-white'>
                <p className='font-light'>Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.</p>
                <div className="flex items-center gap-3 mt-5">
                  <img src={user2} alt="" className='rounded-full' />
                  <div>
                    <p className='text-[18px]'>Hellen Jummy</p>
                    <p className='text-[#8190A6]'>Financial Counselor</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSection;