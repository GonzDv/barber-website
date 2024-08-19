export default function BookForm() {
  return (
    <>
      <div class="flex items-center justify-center p-12">
        <div class="mx-auto w-full max-w-[550px]">
          <form action="" method="POST">
            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="fName"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="fName"
                    id="fName"
                    placeholder="Nombre"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md"
                  />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="lName"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Apellido
                  </label>
                  <input
                    type="text"
                    name="lName"
                    id="lName"
                    placeholder="Apellido"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="date"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md"
                  />
                </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                  <label
                    for="time"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    id="time"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div class="mt-6">
              <div class="font-semibold">From</div>
              <div class="mt-2">
                <div class="flex w-full items-center justify-between bg-neutral-100 p-3 rounded-[4px]">
                  <div class="flex items-center gap-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-8 w-8 text-[#299D37]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span class="font-semibold">Checking</span>
                  </div>

                  <div class="flex items-center gap-x-2">
                    <div class="text-[#64748B]">card ending in 6678</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 cursor-pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-5">
              <label class="mb-3 block text-base font-medium text-[#07074D]">
                Entiende que en caso de no asistir a la cita, no se haran
                devoluciones.
              </label>
              <div class="flex items-center space-x-6">
                <div class="flex items-center">
                  <input
                    type="radio"
                    name="radio1"
                    id="radioButton1"
                    class="h-5 w-5"
                  />
                  <label
                    for="radioButton1"
                    class="pl-3 text-base font-medium text-[#07074D]"
                  >
                    Yes
                  </label>
                </div>
                <div class="flex items-center">
                  <input
                    type="radio"
                    name="radio1"
                    id="radioButton2"
                    class="h-5 w-5"
                  />
                  <label
                    for="radioButton2"
                    class="pl-3 text-base font-medium text-[#07074D]"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>

            <div>
              <button class="hover:shadow-form rounded-md bg-[#f19164] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Reservar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
