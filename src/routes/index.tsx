import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Home from "../pages/home";
import DashboardLayout from "../components/layouts/DashboardLayout";
import Dashboard from "../pages/dashboard";
import Services from "../pages/dashboard/services/Services";
import RecentEvents from "../pages/dashboard/recentEvents/RecentEvents";
import AddService from "../pages/dashboard/services/AddService";
import Events from "../pages/dashboard/events/Events";
import AddEvent from "../pages/dashboard/events/AddEvent";
import EditEvent from "../pages/dashboard/events/EditEvent";
import AddRecentEvent from "../pages/dashboard/recentEvents/AddRecentEvent";
import EditRecentEvent from "../pages/dashboard/recentEvents/EditRecentEvent";
import EditService from "../pages/dashboard/services/EditService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "add-service",
        element: <AddService />,
      },
      {
        path: "edit-service/:id",
        element: <EditService />,
      },
      {
        path: "add-event",
        element: <AddEvent />,
      },
      {
        path: "edit-event/:id",
        element: <EditEvent />,
      },
      {
        path: "recent-events",
        element: <RecentEvents />,
      },
      {
        path: "add-recent-event",
        element: <AddRecentEvent />,
      },
      {
        path: "edit-recent-event/:id",
        element: <EditRecentEvent />,
      },
    ],
  },
]);

export default router;
