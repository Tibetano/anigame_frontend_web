import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App.tsx';
import './index.css';

import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Ticket from './components/pages/Ticket';
import Schedule from './components/pages/Schedule';
import Gallery from './components/pages/Gallery';
import Products from './components/pages/Products.tsx';
import About from './components/pages/About';
import ErrorPage from './components/pages/ErrorPage';
import Product from './components/pages/Product.tsx';
import OurTeam from './components/pages/OurTeam.tsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {path:"/", element:<Home /> },
      {path:"/anigame_frontend_web", element:<Home />},
      {path:"/ingresso", element:<Ticket />},
      {path:"/programacao", element:<Schedule />},
      {path:"/galeria", element:<Gallery />},
      {path:"/produtos", element:<Products />},
      {path:"/sobre", element:<About />},
      {path:"/contato", element:<Contact />},
      {path:"/produto/:id", element:<Product/>},
      {path:"/nossotime", element:<OurTeam/>}
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
