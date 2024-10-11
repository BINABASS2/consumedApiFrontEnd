import Dashboard from "views/Dashboard.js";
import FixedAsset from "views/FixedAsset.js";
import Report from "views/Report.js";
import ManageStaff from "views/ManageStaff.js";
import ManageSupplier from "views/ManageSupplier.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-bar-32",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/ManageStaff",
    name: "Staff",
    icon: "tim-icons icon-single-02",
    component: <ManageStaff />,
    layout: "/admin",
  },
  {
    path: "/FixedAsset",
    name: "Asset",
    icon: "tim-icons icon-bank",
    component: <FixedAsset />,
    layout: "/admin",
  },
  {
    path: "/ManageSupplier",
    name: "Supplier",
    icon: "tim-icons icon-bus-front-12",
    component: <ManageSupplier />,
    layout: "/admin",
  },
  {
    path: "/Report",
    name: "Report",
    icon: "tim-icons icon-notes",
    component: <Report />,
    layout: "/admin",
  }
];

export default routes;
