import React from 'react';
import Button from './commons/Button.jsx';
import Link from './commons/Link.jsx';

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black"
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
              to="/Book"
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
          src="https://generated.vusercontent.net/placeholder.svg"
          width="800"
          height="600"
          alt="Barbería"
          className=" mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
        />
      </div>
    </section>
  );
}
