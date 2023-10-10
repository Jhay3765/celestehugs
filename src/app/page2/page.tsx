"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <main className="font-thin flex flex-col items-center justify-center  relative h-screen">
      {open && <Form />}

      <h1 className="font-fancyFont px-8 text-6xl mb-24 py-8 font-bold  bg-clip-text">
        Send Celeste a hug{" "}
      </h1>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex"
      >
        {hovered && (
          <section className="h-64 w-64 -top-8 -left-6 m rounded-full bg-red-500 absolute blur-3xl  -z-20 "></section>
        )}
        <div className="relative">
          <section className="absolute -left-64">
            <h2 className="text-4xl text-red-600 font-base">Click Me !</h2>
            <img src="/arrow.png" alt="" width={200} className="ml-4 mt-4" />
          </section>

          <img
            onClick={() => {
              setOpen(!open);
            }}
            className="hover:scale-125 transition-all duration-300 ease-in-out "
            src="/main-heart.png"
            alt=""
            width={200}
          />
        </div>
      </div>

      <section className="absolute h-screen w-full -z-40">
        <div className=" bg-theme-pink h-screen w-1/2"></div>
      </section>
    </main>
  );
}

const Form = () => {
  return (
    <div className="flex flex-col z-40 absolute  border bg-white p-8 rounded-2xl">
      <h2>Your Name : </h2>
      <input
        type="text"
        className=" rounded xl w-96 border mt-4 mb-4 px-4 py-2"
        placeholder="Celeste's Sugar Daddy "
      />
      <h2>Message : </h2>
      <textarea
        className=" rounded xl w-full border mt-4 mb-4 px-4 pt-2 pb-12"
        placeholder="Celeste's Sugar Daddy "
      />
      <button className="bg-theme-dark-pink font-fancyFont text-2xl px-8 py-1 w-fit">
        Send{" "}
      </button>
    </div>
  );
};
