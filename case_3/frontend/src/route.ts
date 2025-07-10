import { createBrowserRouter } from "react-router";
import Home from "./home/page";
import Error from "./error/page";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "*",
    Component: Error,
  },
]);

export default router;
