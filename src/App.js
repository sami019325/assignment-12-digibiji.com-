import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home';
import MainPahe from './Pages/MainPahe';
import LogIn from './Pages/LogIn';
import Register from './Pages/Register';


const router = createBrowserRouter([
  {
    path: '/', element: <MainPahe />, children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <LogIn /> },
      { path: '/register', element: <Register /> },
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
