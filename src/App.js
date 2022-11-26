import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home';
import MainPahe from './Pages/MainPahe';


const router = createBrowserRouter([
  {
    path: '/', element: <MainPahe />, children: [
      { path: '/', element: <Home /> }
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
