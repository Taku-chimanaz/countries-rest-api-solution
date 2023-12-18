import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import { ThemeContext, ThemeProvider } from './context/ThemeProvider';
import App from './components/App';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { CountryDetails } from './components/CountryDetails';

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />
  },

  {
    path: "/country/:name",
    element: <CountryDetails />
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
