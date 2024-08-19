import { useState, useEffect } from "react";
import Link from "./commons/Link";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("click", setIsMenuOpen(!isMenuOpen));
  };

  return (
    <>
      <header className="lg:flex-row flex-col bg-black/90 px-4 lg:px-6 h-30 lg:h-20 flex items-center justify-between">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex  items-center gap-3 justify-between">
            <span className="text-white lg:block hidden" href="/Home">
              TAWA Barber
            </span>
            <a href="/">
              <ScissorsIcon className="h-6 w-6 text-white" />
            </a>
          </div>

          {/* Hamburger menu */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              id="toggleMenu"
              className="navbar-burger flex items-center text-white p-3"
            >
              <svg
                className={`block h-4 w-4 fill-current ${
                  isMenuOpen ? "hidden" : ""
                }`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>

              <svg
                className={` h-4 w-4 fill-current ${
                  isMenuOpen ? "" : "hidden"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 50 50"
              >
                <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
              </svg>
            </button>
          </div>
        </div>
        
        <nav className={`${isMenuOpen ? "" : "hidden"} lg:block w-2/4`}>
          {" "}
          <div className="flex-col lg:flex-row flex items-center gap-4 sm:gap-6 py-4">
            <Link
              to="/Reservar-Cita"
              className="text-black bg-white hover:bg-black hover:text-white rounded-lg py-2 px-4 hover:border border text-center"
            >
              Reservar Cita
            </Link>
            <Link className="text-white" to="/">
              Servicios
            </Link>
            <Link className="text-white" to="/">
              Productos
            </Link>
            <Link className="text-white text-center" to="/">
              Sobre Nosotros
            </Link>
            <Link className="text-white" to="/">
              Ubicación
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
function ScissorsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="6" cy="6" r="3" />
      <path d="M8.12 8.12 12 12" />
      <path d="M20 4 8.12 15.88" />
      <circle cx="6" cy="18" r="3" />
      <path d="M14.8 14.8 20 20" />
    </svg>
  );
}
