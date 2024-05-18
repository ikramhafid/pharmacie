// src/router/index.jsx
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import Pharmacien from '../Pages/Pharmacien';
import NotFound from '../Pages/NotFound';
import Login from '../Pages/Login';
import Layout from '../Layouts/Layout';
import Signup from '../Pages/Signup';
import Buying from '../Pages/Buying';
import Paiment from '../Pages/Paiment';
import Users from '../Pages/Users';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },

      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'buying',
        element: <Buying />,
      },
      {
        path: 'paiment',
        element: <Paiment />,
      },
      {
        path: 'Pharmacien',
        element: <Pharmacien/>,
      },
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: '*',
        element: <NotFound/>,
      },
    ],
  },
]);

export default router;
