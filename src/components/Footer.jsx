export default function NoPage() {
  return (
    <>
      <footer className="w-100% bg-white shadow p-4 dark:bg-black">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{' '}
            <a href="#" className="hover:underline">
              Barber Mike
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#sobreMi" className="hover:underline me-4 md:me-6">
                Sobre Mi
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Contacto
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
