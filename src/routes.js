// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
 import Graphs from "views/Graphs/Graphs.jsx";


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    icon: "content_paste",
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: LibraryBooks,
    layout: "/admin"
  },
  {
    path: "/graphs",
    name: "Graphs",
    icon: BubbleChart,
    component: Graphs,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: LocationOn,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    layout: "/admin"
  }
];

export default dashboardRoutes;
