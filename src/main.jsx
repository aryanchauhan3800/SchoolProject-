import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home/Home.jsx';
import Layout from './Layout.jsx';
import About from './component/About/About.jsx';
import ContactUs from './component/Contact/ContactUs.jsx';
import Academics from './component/Acadmics/Academics.jsx';
import Admissions from './component/Admissions/Admissions.jsx';
import Faculty from './component/Faculty1/Faculty.jsx';
import Students from './component/Student/Students.jsx';
import Gallery from './Gallery/Gallery1.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contactus",
        element: <ContactUs />
      },
      {
        path: "/acadmics",
        element: <Academics />
      },
      {
        path: "/admissions",
        element: <Admissions />
      },
      {
        path: "/faculty",
        element: <Faculty />
      },
      {
         path:"/students",
         
          element:<Students/>
      
      },
      {
        path:"/gallery",
        element:<Gallery/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
