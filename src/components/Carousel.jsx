import React from 'react'
import roseta from '../assets/roseta.webp'
import argyroderma from '../assets/argyroderma.jpg'
import plantaPiedra from '../assets/plantasPiedra.jpg'

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
          <div class="carousel-item active">
            <img src={roseta} class="d-block w-100" alt="roseta"/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Roseta</h5>
              <p>
                Es una planta suculenta de hojas perenne en forma de roseta con tallo corto, sus hojas son carnosas y alargadas, curvadas hacia abajo y enrodilladas hacia el centro, recubierta por una cera y son de color azulado grisáseo.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={argyroderma} class="d-block w-100" alt="argyroderma" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Argyroderma</h5>
              <p>
                El habitat natural de origen de esta planta es sudafricana, estas permanecen solitarias o se agrupan lentamente y forman racimos de pequeños "huevos", en los extremos de los tallos cortos y postrados.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={plantaPiedra} class="d-block w-100" alt="planta piedra" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Planta piedra</h5>
              <p>
                Este tipo de cactus es fascinante porque aunque parece una roca verde y no tiene hojas, le dará un aspecto muy diferente a tu colección de plantas.
              </p>
            </div>
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