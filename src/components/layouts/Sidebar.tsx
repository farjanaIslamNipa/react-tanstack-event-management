import {NavLink} from "react-router-dom";
import logo from '../../assets/images/footer-logo.svg'

const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-800 sticky top-0 left-0 overflow-y-auto">
      <nav className="flex flex-col pt-5 pl-4 gap-y-4 text-gray-100 truncate">
        <NavLink to="/dashboard">
          <img src={logo} alt="logo" className="mb-10" />
        </NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/admin/services">Services</NavLink>
        <NavLink to="/admin/add-services">Events</NavLink>
        <NavLink to="/admin/add-services">Recent Events</NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;