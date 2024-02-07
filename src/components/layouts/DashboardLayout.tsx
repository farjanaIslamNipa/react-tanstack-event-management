import {Outlet} from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      main layout
      <Outlet />
    </div>
  );
};

export default DashboardLayout;