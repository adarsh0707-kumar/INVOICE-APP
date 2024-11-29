import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Registor/Register';


function App() {


  const myRouter = createBrowserRouter([
    { path: '', element: <Login /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> }
  ])



  return (
    <div>
      <RouterProvider router={myRouter} />
    </div>
  );
}

export default App;