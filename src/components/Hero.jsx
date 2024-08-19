import { React, useState } from "react";
import BarberChair from "../images/barber-chair.png";
import Link from "./commons/Link.jsx";
import useIntersectionObserver from "./commons/useIntersectionObserver.js";
import "../styles/index.css";
export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  const targetRef = useIntersectionObserver((entry) => {
    setIsVisible(entry.isIntersecting);
  });
  return (
    <section
      ref={targetRef}
      id="hero"
      className={` hero ${
        isVisible ? "animate" : ""
      } hero w-full h-screen py-12 md:py-24 lg:py-32 xl:py-48 bg-black`}
    >
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Experiencia de barbería premium
          </h1>
          <p className="text-white md:text-xl">
            Déjate cuidar por nuestros expertos barberos en un ambiente cálido y
            acogedor.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              to="/Reservar-cita"
              className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium shadow transition-colors hover:border border hover:text-black hover:bg-zinc-100/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
              prefetch={false}
            >
              Reservar Cita
            </Link>
            <Link
              to="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-stone-900 bg-transparent text-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-stone-900/90 hover:text-white hover:border-stone-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none cursor-pointer disabled:opacity-50"
              prefetch={false}
            >
              Conoce Más
            </Link>
          </div>
        </div>
        <img
          src={BarberChair}
          width="800"
          height="600"
          alt="Barbería"
          className=" mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
        />
      </div>
      <div className=" lg:m-5 m-10">
        <svg
          className="bg-white rounded-full p-2 mx-auto animate-bounce w-8 h-8 "
          xmlns="http://www.w3.org/2000/svg"
          x="2px"
          y="2px"
          width="100"
          height="100"
          viewBox="0 0 50 50"
        >
          <path d="M 4.84375 12.90625 L 2.75 15 L 25 37.25 L 47.25 15 L 45.15625 12.90625 L 25 33.0625 Z"></path>
        </svg>
      </div>
    </section>
  );
}
