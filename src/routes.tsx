import { createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <SignIn /> },
      { path: "signUp", element: <SignUp /> },
    ],
  },

  { index: true, element: <SignIn /> },
  { path: "signUp", element: <SignUp /> },
]);

export default router;
