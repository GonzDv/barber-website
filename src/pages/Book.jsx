import React from "react";
import BookForm from "../components/Recervar-cita/BookForm.jsx";
export default function Book() {
  return (
    <>
      <main className="h-svh container mx-auto">
        <div className="container mx-auto text-center">
        <h2 className=" font-bold uppercase py-5">reservar cita</h2>
        </div>
        <BookForm />
      </main>
    </>
  );
}
