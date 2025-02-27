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
          {
            path: 'board',
            element: <Comp.Board />,
          },


          {
            path: 'executive-management',
            element: <Comp.Board />,
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
        path: '/projects',
        children: [
          {
            index: true,
            element: <Comp.Projects />,
          },
          {
            path: ':id',
            element: <Comp.ProjectDetails />,
          },
          {
            path: 'sector/:id',
            element: <Comp.Sector />,
          },
        ]
      },
      {
        path: '/media-center', children: [
          { index: true, element: <Comp.Blogs /> },
          { path: ':id', element: <Comp.BlogDetails /> }
        ]
      },

    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
