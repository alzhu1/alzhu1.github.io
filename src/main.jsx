import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './components/App';
import Error from './components/Error';
import Home from './components/Home';
import History from './components/History';
import ProjectList from './components/ProjectList';

import './index.css';

const router = createBrowserRouter([
  {
    element: <App />,
    path: '/',
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'projects',
        element: <ProjectList />
      },
      {
        path: 'history',
        element: <History />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
