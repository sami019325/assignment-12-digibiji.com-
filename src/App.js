import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home';
import MainPahe from './Pages/MainPahe';
import LogIn from './Pages/LogIn';
import Register from './Pages/Register';
import Blog from './Pages/Blog';
import Products from './Pages/Products/Products';
import SellProduct from './Pages/SellProduct';
import NoPage from './Pages/Home/NoPage';


const router = createBrowserRouter([
  {
    path: '/', element: <MainPahe />, children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <LogIn /> },
      { path: '/register', element: <Register /> },
      { path: '/sale', element: <SellProduct /> },
      { path: '/blog', element: <Blog /> },
      { path: '*', element: <NoPage /> },
      {
        path: '/products/:id',
        loader: ({ params }) => {
          const Dataid = params.id;
          return Dataid
        },
        element: <Products />
      },
    ]
  }
])

function App() {

  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
