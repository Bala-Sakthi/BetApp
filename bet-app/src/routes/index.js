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
      path: "/admin",
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      
      children: [
        {
          path: "/admin/user-list",
          element: (
            <AuthGuard>
              <UserList />
            </AuthGuard>
          ),
        },
        {
          path: "/admin/post",
          element: (
            <AuthGuard>
              <Post />
            </AuthGuard>
          ),
        },
        {
          path: "/admin/dashboard",
          element: (
            <AuthGuard>
              <Dashboard />
            </AuthGuard>
          ),
        },
        {
          path: "/admin/issue",
          element: (
            <AuthGuard>
              <Issues />
            </AuthGuard>
          ),
        },
        {
          path: "/admin/feedback",
          element: (
            <AuthGuard>
              <FeedBack />
            </AuthGuard>
          ),
        },
        
      ],
    },
    
    {
      path: "404",
      element: <NotFound />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);
}
const Login = Loadable(lazy(() => import("../pages/loginForms/Login")));
const DashboardLayout = Loadable(lazy(() => import("../pages/Dashboard/DashboardLayout")));
const NotFound = Loadable(lazy(() => import("../pages/404/Page404")));
const UserList = Loadable(lazy(() => import("../pages/UserList/UserList")));
const Post = Loadable(lazy(() => import("../pages/ViewPost/Post")));
const Dashboard = Loadable(lazy(() => import("../pages/Dashboard/Dashboard")));
const Issues = Loadable(lazy(() => import("../pages/Issues/Issues")));
const FeedBack = Loadable(lazy(() => import("../pages/FeedBack/FeedBack")));













