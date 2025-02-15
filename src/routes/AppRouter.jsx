import Comp from '@constants/Comp';
import MainLayout from '@layout/MainLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Comp.Home />,
      },
      {
        path:'/about',
        element: <Comp.About />,
      },
      {
        path:'/services',
        element: <Comp.Services />,
      },

      {
        path:'/media-center',
        element: <Comp.Blogs />,
      },
     
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
