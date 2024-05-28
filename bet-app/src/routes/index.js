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
        children: [
          {
            path: "/",
            element: (
              <GuestGuard>
                <MeetInGround />
              </GuestGuard>
            ),
          },
          {
            path: "/login",
            element: (
              <GuestGuard>
                <Login />
              </GuestGuard>
            ),
          },
          {
            path: "/terms-condition",
            element: (
              <GuestGuard>
                <TermsCondition />
              </GuestGuard>
            ),
          },
          {
            path: "/privacy-policy",
            element: (
              <GuestGuard>
                <PrivacyPolicy />
              </GuestGuard>
            ),
          },
          {
            path: "/faq",
            element: (
              <GuestGuard>
                <Faq />
              </GuestGuard>
            ),
          },
          {
            path: "/about-us",
            element: (
              <GuestGuard>
                <AboutUs />
              </GuestGuard>
            ),
          },
        ],
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
            path: "user-list",
            element: (
              <AuthGuard>
                <UserList />
              </AuthGuard>
            ),
          },
          {
            path: "post",
            element: (
              <AuthGuard>
                <Post />
              </AuthGuard>
            ),
          },
          {
            path: "dashboard",
            element: (
              <AuthGuard>
                <Dashboard />
              </AuthGuard>
            ),
          },
          {
            path: "issue",
            element: (
              <AuthGuard>
                <Issues />
              </AuthGuard>
            ),
          },
          {
            path: "feedback",
            element: (
              <AuthGuard>
                <FeedBack />
              </AuthGuard>
            ),
          },
          {
            path: "general",
            element: (
              <AuthGuard>
                <General />
              </AuthGuard>
            ),
          },
          {
            path: "group-notification",
            element: (
              <AuthGuard>
                <GroupNotification />
              </AuthGuard>
            ),
          },
          {
            path: "individual",
            element: (
              <AuthGuard>
                <Individual />
              </AuthGuard>
            ),
          },
          {
            path: "withdraw-request",
            element: (
              <AuthGuard>
                <WithdrawRequest />
              </AuthGuard>
            ),
          },
          {
            path: "ratings",
            element: (
              <AuthGuard>
                <Rating />
              </AuthGuard>
            ),
          },
          {
            path: "transaction-history",
            element: (
              <AuthGuard>
                <TransactionHistory />
              </AuthGuard>
            ),
          },
          {
            path: "add-transaction",
            element: (
              <AuthGuard>
                <AddTransactionHistory />
              </AuthGuard>
            ),
          },
          {
            path: "group",
            element: (
              <AuthGuard>
                <Group />
              </AuthGuard>
            ),
          },
          {
            path: "user-details/:phonenumber",
            element: (
              <AuthGuard>
                <UserDetails />
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
const General = Loadable(lazy(() => import("../pages/Notification/General/General")));
const GroupNotification = Loadable(lazy(() => import("../pages/Notification/Group/GroupNotification")));
const Individual = Loadable(lazy(() => import("../pages/Notification/individual/Individual")));
const WithdrawRequest = Loadable(lazy(() => import("../pages/WithdrawRequest/WithdrawRequest")));
const Rating = Loadable(lazy(() => import("../pages/Ratings/Rating")));
const TransactionHistory = Loadable(lazy(() => import("../pages/TransactionHistory/TransactionHistory")));
const AddTransactionHistory = Loadable(lazy(() => import("../pages/TransactionHistory/AddTransactionHistory")));
const Group = Loadable(lazy(() => import("../pages/Notification/Group/Group")));
const UserDetails = Loadable(lazy(() => import("../pages/UserList/UserDetails")));





const MeetInGround = Loadable(lazy(() => import("../pages/BetWebsite/MeetInGround/MeetInGround")));
const TermsCondition = Loadable(lazy(() => import("../pages/BetWebsite/Terms&Condition/TermsCondition")));
const PrivacyPolicy = Loadable(lazy(() => import("../pages/BetWebsite/PrivacyPolicy/PrivacyPolicy")));
const Faq = Loadable(lazy(() => import("../pages/BetWebsite/Faq/Faq")));
const AboutUs = Loadable(lazy(() => import("../pages/BetWebsite/AboutUs/AboutUs")));




















