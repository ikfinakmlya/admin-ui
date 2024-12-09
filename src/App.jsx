import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import ErrorRoute from "./pages/errorRoute";
import { ForgotPassPages } from "./pages/ForgotPassPages";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";
import ExpensesPage from "./pages/expenses";
import GoalPage from "./pages/goals";

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage/>,
      errorElement: <ErrorRoute/>
    },
    {
      path: "/login",
      element: <SignInPage/>,
      
    },
    {
      path: "/register",
      element: <SignUpPage/>
    },
    {
      path: "/forgotpassword",
      element: <ForgotPassPages/>
    },
    {
      path: "/balance",
      element: <BalancePage/>
    },
    {
      path: "/expenses",
      element: <ExpensesPage/>
    },
    {
      path: "/goals",
      element: <GoalPage/>
    }
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
