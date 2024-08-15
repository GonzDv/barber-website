import BarberCut from '../images/barber-img.jpg'

export default function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-[#3D3D43]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-white">
              Nuestros Servicios
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#E7E7E4]">
              Servicios de Barbería Premium
            </h2>
            <p className="max-w-[900px] text-[#E7E7E4] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ofrece una amplia gama de servicios de barbería de alta calidad para que luzcas y te sientas
              mejor.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-[#E7E7E4]">Corte de Cabello</h3>
                  <p className="text-[#E7E7E4]">
                    Nuestro expertos barbero cortara y dara forma a tu cabello con precisión.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-[#E7E7E4]">Afeitado Tradicional</h3>
                  <p className="text-[#E7E7E4]">
                    Disfruta de un afeitado suave y cómodo con técnicas tradicionales.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-[#E7E7E4]">Peinado y Estilo</h3>
                  <p className="text-[#E7E7E4]">
                    Nuestro barber te ayudará a lograr el look perfecto para ti.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold text-[#E7E7E4]">Tratamientos Capilares</h3>
                  <p className="text-[#E7E7E4]">
                    Manten tu cabello saludable y brillante con tratamientos especializados.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <img
            src={BarberCut}
            width="550"
            height="310"
            alt="Servicios de Barbería"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </div>
    </section>
  )
}