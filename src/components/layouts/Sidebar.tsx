import {NavLink} from "react-router-dom";
import logo from '../../assets/images/footer-logo.svg'
import dashboardIcon from '../../assets/images/dashbaord-white.svg'
import serviceIcon from '../../assets/images/service-white.svg'
import eventIcon from '../../assets/images/event-white.svg'
import recentEventIcon from '../../assets/images/recent-event-white.svg'

const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-800 sticky top-0 left-0 overflow-y-auto">
      <nav className="flex flex-col pt-5 px-4 gap-y-4 text-gray-100 truncate">
        <NavLink to="/dashboard">
          <img src={logo} alt="logo" className="mb-10" />
        </NavLink>
        <NavLink to="/dashboard">
          <div className="flex items-end gap-2">
            <img src={dashboardIcon} alt="Dashboard" className="h-8 sm:h-6 w-8 sm:w-6" />
            <p className="text-[15px] hover:text-[#c756ba] transition-all ease-in-out duration-100 hidden sm:block">Dashboard</p>
          </div>
        </NavLink>
        <NavLink to="/dashboard/services">
          <div className="flex items-end gap-2">
            <img src={serviceIcon} alt="Services" className="h-8 sm:h-6 w-8 sm:w-6" />
            <p className="text-[15px] hover:text-[#c756ba] transition-all ease-in-out duration-100 hidden sm:block">Services</p>
          </div>
        </NavLink>
        <NavLink to="/dashboard/events">
          <div className="flex items-end gap-2">
            <img src={eventIcon} alt="Events" className="h-8 sm:h-6 w-8 sm:w-6" />
            <p className="text-[15px] hover:text-[#c756ba] transition-all ease-in-out duration-100 hidden sm:block">Events</p>
          </div>
        </NavLink>
        <NavLink to="/dashboard/recent-events">
          <div className="flex items-end gap-2">
            <img src={recentEventIcon} alt="Recent Events" className="h-8 sm:h-6 w-8 sm:w-6" />
            <p className="text-[15px] hover:text-[#c756ba] transition-all ease-in-out duration-100 hidden sm:block">Recent Events</p>
          </div>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;