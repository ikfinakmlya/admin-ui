import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorRoute from "./pages/errorRoute";

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <div>Halaman Utama</div>,
      errorElement: <ErrorRoute/>
    },
    {
      path: "/login",
      element: <SignInPage/>,
      
    },
    {
      path: "/register",
      element: <SignUpPage/>
    }
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
