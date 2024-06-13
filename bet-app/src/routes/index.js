import { lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Loader from "../pages/Loader/Loader";
import GuestGuard from "../guards/GuestGaurd";
import AuthGuard from "../guards/AuthGuard";

// Loadable component with loader
const LoadableWithLoader = (Component) => (props) => {
  return (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
};

// Loadable component without loader
const LoadableWithoutLoader = (Component) => (props) => {
  return (
    <Suspense fallback={null}>
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
        {
          path: "/features",
          element: (
            <GuestGuard>
              <OurFeatures />
            </GuestGuard>
          ),
        },
        {
          path: "/contact",
          element: (
            <GuestGuard>
              <ContactUs />
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
          path: "add-post",
          element: (
            <AuthGuard>
              <AddPost />
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

// Admin routes using Loadable with loader
const Login = LoadableWithLoader(lazy(() => import("../pages/loginForms/Login")));
const DashboardLayout = LoadableWithLoader(lazy(() => import("../pages/Dashboard/DashboardLayout")));
const NotFound = LoadableWithLoader(lazy(() => import("../pages/404/Page404")));
const UserList = LoadableWithLoader(lazy(() => import("../pages/UserList/UserList")));
const Post = LoadableWithLoader(lazy(() => import("../pages/ViewPost/Post")));
const AddPost = LoadableWithLoader(lazy(() => import("../pages/ViewPost/AddPost")));
const Dashboard = LoadableWithLoader(lazy(() => import("../pages/Dashboard/Dashboard")));
const Issues = LoadableWithLoader(lazy(() => import("../pages/Issues/Issues")));
const FeedBack = LoadableWithLoader(lazy(() => import("../pages/FeedBack/FeedBack")));
const General = LoadableWithLoader(lazy(() => import("../pages/Notification/General/General")));
const GroupNotification = LoadableWithLoader(lazy(() => import("../pages/Notification/Group/GroupNotification")));
const Individual = LoadableWithLoader(lazy(() => import("../pages/Notification/individual/Individual")));
const WithdrawRequest = LoadableWithLoader(lazy(() => import("../pages/WithdrawRequest/WithdrawRequest")));
const Rating = LoadableWithLoader(lazy(() => import("../pages/Ratings/Rating")));
const TransactionHistory = LoadableWithLoader(lazy(() => import("../pages/TransactionHistory/TransactionHistory")));
const AddTransactionHistory = LoadableWithLoader(lazy(() => import("../pages/TransactionHistory/AddTransactionHistory")));
const Group = LoadableWithLoader(lazy(() => import("../pages/Notification/Group/Group")));
const UserDetails = LoadableWithLoader(lazy(() => import("../pages/UserList/UserDetails")));

// Website routes using Loadable without loader
const MeetInGround = LoadableWithoutLoader(lazy(() => import("../pages/BetWebsite/MeetInGround/MeetInGround")));
const TermsCondition = LoadableWithoutLoader(lazy(() => import("../pages/BetWebsite/Terms&Condition/TermsCondition")));
const PrivacyPolicy = LoadableWithoutLoader(lazy(() => import("../pages/BetWebsite/PrivacyPolicy/PrivacyPolicy")));
const Faq = LoadableWithoutLoader(lazy(() => import("../pages/BetWebsite/Faq/Faq")));
const AboutUs = LoadableWithoutLoader(lazy(() => import("../pages/BetWebsite/AboutUs/AboutUs")));
const OurFeatures = LoadableWithoutLoader(lazy(() => import("../pages/BetWebsite/OurFeatures/OurFeatures")));
const ContactUs = LoadableWithoutLoader(lazy(() => import("../pages/BetWebsite/ContactUs/ContactUs")));


