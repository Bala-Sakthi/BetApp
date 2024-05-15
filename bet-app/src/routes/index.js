import { lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Loader from "../pages/Loader/Loader";
import GuestGuard from "../guards/GuestGaurd";
import AuthGuard from "../guards/AuthGuard";




const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([

    {
          path: "/",
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          ),
        },
        
     
    {
      children: [
        {
          path: "/admin",
          element: (
            <AuthGuard>
              <DashboardLayout/>
            </AuthGuard>
          ),
       
        },
        
      ],
    },




    {
       path: "*",
       children: [
         { path: "404", element: <NotFound /> },
         { path: "*", element: <Navigate to="/404" replace /> },
       ],
     },
  ]);
}

const Login = Loadable(lazy(() => import("../pages/loginForms/Login")));
const DashboardLayout = Loadable(lazy(() => import("../pages/Dashboard/DashboardLayout")));






















const NotFound = Loadable(lazy(() => import("../pages/404/Page404")));