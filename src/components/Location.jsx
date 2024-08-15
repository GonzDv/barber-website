import PlaceHolder from "../assets/placeholder.svg";
export default function Location() {
  return (
    <section className="Location w-full py-12 md:py-24 lg:py-32 bg-[#0f0f10]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#3d3d43] px-3 py-1 text-sm text-white">
              <h2> Visítanos </h2>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#e7e7e4]">
              Ven a Visitarnos
            </h2>
            <p className="max-w-[900px] text-[#dbdbd7] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nuestra barbería está ubicada en la calle [...], con esquina
              [...].
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12">
          
          <img
            src={PlaceHolder}
            width="1270"
            height="300"
            alt="Ubicación de la Barbería"
            className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover object-center"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="grid gap-1">
              <h3 className="text-xl font-bold text-[#e7e7e4]">Dirección</h3>
              <p className="text-[#dbdbd7]">
                <a href="">Av Revolución 11, Sta María Magdalena, 76200 Santa María Magdalena, Qro.</a>
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold text-[#e7e7e4]">Horario</h3>
              <p className="text-[#dbdbd7]">
                Lunes a Sábado: 9:00 AM - 8:00 PM
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold text-[#e7e7e4]">Contacto</h3>

              <a href="tel:4426388956" className="text-[#dbdbd7]">+52 442 638 8956</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
