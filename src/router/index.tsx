import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Main from "../pages";
import Login from "../pages/Auth/Login/Login";
import Join from "../pages/Auth/Join/Join";

const routes: object[] = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/join",
        element: <Join />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
