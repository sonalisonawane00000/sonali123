import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Component/Home';
// import About from './Component/About';
import ContactUs from './Component/Contactus';
import Services from './Component/Services';
import Product1 from './Component/Product1';
import Nav from './Component/Nav';
import Error from './Component/Error';
import Productdetails from './Component/Productdetailes';
// import ThemeProvider, { ThemeContext } from './Context/ThemeContext';
import ThemeProvider, { ThemeContext } from './Context/ThemeContext';

const About = React.lazy(()=>import('./Component/About'));

const router = createBrowserRouter([
  {
    path:'/',
    element:<Nav/>,
    children:[
      {
        index:'/home',
        element:<Home/>
      },
       {
    path:'/home',
    element:<Home/>
  },
  {
    path:'/about',
    element:
    <React.Suspense>
      <About/>
    </React.Suspense>
  },
  {
    path:'/contact',
    element:<ContactUs/>
  },
  {
    path:'/services',
    element:<Services/>
  },
  {
    path:'/product',
    element:<Product1/>
  },
  {
    path:'/product/:id',
    element:<Productdetails/>
  },
  {
    path:'*',
    element:<Error/>
  }

    ]}
]);
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ThemeProvider>
  <RouterProvider router={router}/>
    </ThemeProvider>
  
);


reportWebVitals();