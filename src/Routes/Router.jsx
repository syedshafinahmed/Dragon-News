import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Components/Pages/Home";
import CategoryNews from "../Components/Pages/CategoryNews";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../Components/Pages/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: '',
        element: <Home></Home>
      },
      {
        path: '/category/:id',
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch('/news.json')
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: '/news-details/:id',
    element:
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>,
    loader: () => fetch('/news.json')
  },
  {
    path: '/*',
    element: <h2>Error 404</h2>
  }
]);

export default router;