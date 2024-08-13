export default function Header() {
  return (
    <>
      <header className="bg-black px-4 lg:px-6 h-20 flex items-center">
        <div>
          <a className="text-white" href="/Home">
            Mike Barber
          </a>
        </div>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6 text-white  ">
          <a
            className="text-black bg-white hover:bg-black hover:text-white rounded-lg py-2 px-4 hover:border border"
            href="/Book"
          >
            Reservar Cita
          </a>
          <a className="text-white" href="#">
            Servicios
          </a>
          <a className="text-white" href="#">
            Productos
          </a>
          <a className="text-white" href="#">
            Sobre Nosotros
          </a>
          <a className="text-white" href="#">
            Ubicación
          </a>
        </nav>
      </header>
    </>
  );
}
