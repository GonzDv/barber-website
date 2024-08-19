import React from "react";
import BookForm from "../components/Recervar-cita/ReservaForm.jsx";
export default function Reservar() {
  return (
    <>
      <main className="lg:h-screen  container mx-auto mt-6">
        <div className="container mx-auto text-center">
        <h2 className=" font-bold uppercase py-6 ">reservar cita</h2>
        </div>
        <BookForm />
      </main>
    </>
  );
}
