import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import ControlProveedores from "./components/ControlProveedores/ControlProveedores";
import Exterior from "./components/PlantasExterior/Exterior";
import Interior from "./components/PlantasInterior/Interior";
import Cactus from "./components/Cactus/Cactus";
import InicioSesion from "./components/InicioSesion";
import Registro from "./components/Registro";
import Home from "./components/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/control" element={<ControlProveedores />}></Route>
    <Route path="/exterior" element={<Exterior />}></Route>
    <Route path="/interior" element={<Interior />}></Route>
    <Route path="/cactus" element={<Cactus />}></Route>
    <Route path="/sesion" element={<InicioSesion />}></Route>
    <Route path="/registro" element={<Registro />}></Route>
  </Routes>
</HashRouter>
);
