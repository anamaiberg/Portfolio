import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App        from './components/App.jsx';
import Apresentacao from './pages/Apresentacao.jsx';
import Curriculo  from './pages/Curriculo.jsx';
import Portfolio  from './pages/Portfolio.jsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        { index: true,        element: <Apresentacao /> },
        { path: 'curriculo',  element: <Curriculo />   },
        { path: 'portfolio',  element: <Portfolio />   },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
