import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Registro from "./components/Registro";
import ControlProveedores from "./components/ControlProveedores";
import Roseta from "./components/Roseta";
import Argyroderma from "./components/Argyroderma";
import PlantaPiedra from "./components/PlantaPiedra";

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
    path: '/roseta',
    element: <Roseta />
  },
  {
    path: '/argyroderma',
    element: <Argyroderma />
  },
  {
    path: '/planta-piedra',
    element: <PlantaPiedra />
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
