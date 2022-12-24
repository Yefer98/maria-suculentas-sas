import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Registro from "./components/Registro";
import ControlProveedores from "./components/ControlProveedores";
import Exterior from "./components/Exterior";
import Interior from "./components/Interior";
import Cactus from "./components/Cactus";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/registro',
    element: <Registro />
  },
  {
    path: '/control',
    element: <ControlProveedores />
  },
  {
    path: '/exterior',
    element: <Exterior />
  },
  {
    path: '/interior',
    element: <Interior />
  },
  {
    path: '/cactus',
    element: <Cactus />
  }
]);

const App = () => {
  return (
    <section>
      <RouterProvider router={routes} />
    </section>
  );
};

export default App;
