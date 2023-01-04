import React from 'react'
import Snegra from '../assets/carousel-suculenta-negra.jpg'
import bolaRosada from '../assets/carousel-bola-rosada.jpg'
import plantaPiedra from '../assets/plantasPiedra.jpg'
import { Link } from 'react-router-dom'

const Carousel = () => {
  return (
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="false"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" title='ir a Plantas exterior'>
            <Link to={'/exterior'}>
            <img src={Snegra} class="d-block w-100" alt="roseta"/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Suculenta negra</h5>
              <p>
              Esta planta en el sol, su color es casi negro, lo que provoca un bello
              contraste con otras plantas en un jardín. Por otro lado, en la sombra
              parcial llega a tomar un color púrpura con tonos verdes al centro.
              </p>
            </div>
            </Link>
          </div>
          <div class="carousel-item" title='ir a Cactus'>
            <Link to={'/cactus'}>
            <img src={bolaRosada} class="d-block w-100" alt="argyroderma"/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Cactus Bola Rosa</h5>
              <p>
              Es una especie fanerógama perteneciente a la familia de las cactáceas,
              endémica de Paraguay y en Argentina, en las provincias de Formosa, Chaco
              y parte de Santiago del Estero, que actualmente se ha extendido por
              todo el mundo.
              </p>
            </div>
            </Link>
          </div>
          <div class="carousel-item" title='ir a Plantas interior'>
            <Link to={'/interior'}>
            <img src={plantaPiedra} class="d-block w-100" alt="planta piedra" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Planta piedra</h5>
              <p>
                Este tipo de cactus es fascinante porque aunque parece una roca verde y no tiene hojas, le dará un aspecto muy diferente a tu colección de plantas.
              </p>
            </div>
            </Link>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
  )
}

export default Carousel