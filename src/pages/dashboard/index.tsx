import services from '../../assets/images/services.svg'
import events from '../../assets/images/events.svg'
import recentEvents from '../../assets/images/recent-events.svg'
import {useNavigate} from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="mt-14 grid grid-cols-12 gap-4 sm:gap-6 px-4 sm:px-8 md:px-12 lg:px-28">
        <div onClick={() => navigate("/dashboard/services")} className="col-span-6 flex justify-center border border-gray-400 rounded-xl p-4 sm:p-8 cursor-pointer hover:shadow-xl transition-all duration-100">
          <div className="flex items-center gap-2 sm:gap-3">
            <img src={services} alt="" className='h-6 sm:h-9 w-6 sm:w-9' />
            <p className='font-medium text-base sm:text-lg text-gray-700'>Services</p>
          </div>
        </div>
        <div onClick={() => navigate("/dashboard/events")} className="col-span-6 flex justify-center border border-gray-400 rounded-xl p-4 sm:p-8 cursor-pointer hover:shadow-xl transition-all duration-100">
          <div className="flex items-center gap-2 sm:gap-3">
            <img src={events} alt="" className='h-6 sm:h-9 w-6 sm:w-9' />
            <p className='font-medium text-base sm:text-lg text-gray-700'>Events</p>
          </div>
        </div>
        <div onClick={() => navigate("/dashboard/recent-events")} className="col-span-12 flex justify-center border border-gray-400 rounded-xl p-4 sm:p-8 cursor-pointer hover:shadow-xl transition-all duration-100">
          <div className="flex items-center gap-2 sm:gap-3">
            <img src={recentEvents} alt="" className='h-7 sm:h-9 w-7 sm:w-9' />
            <p className='font-medium text-base sm:text-lg text-gray-700'>Recent Events</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;