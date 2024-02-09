import {useGetEvents} from '../../api/event/useGetEvents'
import {TEvent} from '../../types'
import cn from '../../utils/cn'
import defaultImg from '../../assets/images/default.png'

const EventItemSection = () => {
  const {data: events, isLoading} = useGetEvents();

  if(isLoading){
    return <p className='text-center text-lg font-semibold text-[#922F86] py-4'>Loading ....</p>
  }

  return (
    <div className="custom-container my-10 md:my-28 z-40 relative">
      <h1  className="section-title">Event Items</h1>
      <p className="section-sub-text">Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.</p>

      <div className="mt-10 md:mt-14 grid grid-cols-12 gap-5 w-full max-w-[1210px] mx-auto">
        {
          events?.data?.length > 0 &&
          events?.data?.map((event : TEvent, index: number) => <div style={{backgroundColor: `#${event?.bgColor}`}} 
          className={cn('transition-all duration-75 ease-out cursor-pointer rounded-md p-6 overflow-hidden event-card bg-opacity-40', 
          {
            'col-span-12 sm:col-span-6' : index === 0 || index === 1
          },
          {
            'col-span-12 sm:col-span-4' : index >= 2
          },
          {
            'bg-[#f9b16e33]' : !event?.bgColor
          }
          )}
          >
          <div className={cn('w-full overflow-hidden', 
            {
              'h-[160px] lg:h-[332px]' : index === 0 || index === 1
            },
            {
              'h-[160px] lg:h-[187px]' : index >= 2
            }
          )}>
            {
              event?.img ? <img src={event?.img} alt="Event" className='h-full w-full object-cover event-img' />
              : <img src={defaultImg} alt="Event" className='h-full w-full object-cover event-img rounded-md' />
            }
            
          </div>
          <h3 className='text-lg md:text-[24px] font-semibold mt-4 '>{event?.title}</h3>
        </div>)
        }
      </div>
    </div>
  );
};

export default EventItemSection;