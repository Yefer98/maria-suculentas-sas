import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Registro from "./components/Registro";
import ControlProveedores from "./components/ControlProveedores/ControlProveedores";
import Exterior from "./components/PlantasExterior/Exterior";
import Interior from "./components/PlantasInterior/Interior";
import Cactus from "./components/Cactus/Cactus";
import InicioSesion from "./components/InicioSesion";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/registro",
    element: <Registro />,
  },
  {
    path: "/control",
    element: <ControlProveedores />,
  },
  {
    path: "/exterior",
    element: <Exterior />,
  },
  {
    path: "/interior",
    element: <Interior />,
  },
  {
    path: "/cactus",
    element: <Cactus />,
  },
  {
    path: "/sesion",
    element: <InicioSesion />,
  },
]);

const App = () => {
  return (
    <section>
      <RouterProvider router={routes} />
    </section>
  );
};

export default App;
