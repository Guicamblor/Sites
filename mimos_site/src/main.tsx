import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App.tsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './page/home.tsx';

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   id: "1",
  //   element: <App />,
  // },
  {
    path: '',
    id: '2',
    element: <Home />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
