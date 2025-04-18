import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';


import {Router, RouterProvider} from 'react-router-dom';
import { router } from './routes';
import GlobalStyles from './styles/globalStyles';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <GlobalStyles/>
    <ToastContainer autoClose={2000} theme='colored'/>
  </StrictMode>,
)
