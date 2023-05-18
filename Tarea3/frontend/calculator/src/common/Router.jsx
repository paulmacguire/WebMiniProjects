import {
    createBrowserRouter,
    RouterProvider,
    redirect
  } from 'react-router-dom';
import Layout from "../pages/Layout"
import HomePage from "../pages/HomePage/HomePage"



export default function Router(){
    const router = createBrowserRouter([
        {
          path: '/',
          element: <Layout />,
          children: [
            {
              path: '/',
              element: <HomePage />
            }          
          ]
        },
        {
          path: '*', 
          loader: () => {
            return redirect('/')
          }
        }
      ])
    
      return (
        <RouterProvider router={router} />
      );
}
