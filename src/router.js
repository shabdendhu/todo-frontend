import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const AddTask = lazy(() => import("./Components/AddTask"));

const routes = [
  { path: "/", exact: true, component: Home },
  { path: "/add-task", exact: true, component: AddTask },
];

export default routes;
