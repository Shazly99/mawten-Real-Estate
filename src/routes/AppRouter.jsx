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
        path: '/about',
        children: [
          {
            index: true,
            element: <Comp.About />,
          },
          {
            path: 'mission',
            element: <Comp.Mission />,
          },

        ]
      },
      {
        path: '/services',
        element: <Comp.Services />,
      },
      {
        path: '/contact',
        element: <Comp.Contact />,
      },

      {
        path: '/media-center',
        element: <Comp.Blogs />,
      },

    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
