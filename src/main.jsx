import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './AppRouter/App';
import About from './Pages/About';
import Work from './Pages/Work';
import Contact from './Pages/Contact';
import SingleProject from './Pages/SingleProject';
import RootLayout from './AppRouter/RootLayout';
import './Sass/App.scss';

const router = createBrowserRouter([
  { 
    path: '/', element: <RootLayout />, children: [
      { path: "/", element: <App /> },
      { path: "/about", element: <About /> },
      { path: "/work", element: <Work /> },
      { path: "/contact", element: <Contact /> },
      { path: "/work/:slug", element: <SingleProject /> },
    ]  
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
