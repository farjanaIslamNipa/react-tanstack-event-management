import checkMark from '../../assets/images/check-mark.svg'
import {useGetServices} from '../../api/services/useGetServices';
import {ReactNode} from 'react';
import {TService} from '../../types';

const ServicesSection = () => {
  const { data: services, isLoading } = useGetServices()

  if(isLoading){
    return <p className='text-center font-semibold text-lg'>Loading ....</p>
  }
  return (
    <div className="custom-container my-8 sm:my-12 lg:my-20">
      <h1 className="section-title">Our Services</h1>
      <p className="section-sub-text">Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.</p>

      <div className="mt-8 sm:mt-10 lg:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        
        {
          services?.data?.length > 0 && 
          services?.data?.map((service: TService) =>  <div className="bg-[#F6F2FC] hover:bg-[#E6D9F7] transition-all duration-75 ease-out cursor-pointer rounded-md p-6 overflow-hidden service-card relative">
          <div className="h-[253px] sm:h-[180px] lg:h-[253px] w-full rounded-md service-img transition-all delay-75 ease-out">
            <img src={service?.img} alt={service?.title} className='h-full w-full object-cover rounded-md' />
          </div>
          <div className='service-title'>
            <h4 className='text-[25px] lg:text-[32px] leading-[30px] font-extrabold mt-4 lg:mt-6 mb-2'>{service?.title}</h4>
            <p className='text-[#566B84] service-details pb-8 pt-3'>Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies.Ut posuere felis arcu tellus tempus in in ultricies.</p>
          </div>

          <div className='space-y-4 pt-2'>
            {
            service?.facilities?.map((item:ReactNode) => <div className="flex items-center gap-x-2 lg:gap-x-[18px] tracking-wide">
                <img src={checkMark} alt="Check mark" />
                <p className='text-base lg:text-lg'>{item}</p>
              </div>)
            }
          </div>
          <div className="check-out-btn pt-10">
            <button className='w-full bg-[#5A01CB] text-white font-semibold text-center h-[52px] rounded-md'>Check it out</button>
          </div>
        </div>)
        }
      </div>
    </div>
  );
};

export default ServicesSection;