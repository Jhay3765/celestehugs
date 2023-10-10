"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="bg-[url('/newpic.png')] transition-all duration-300 font-normalFont text-xl bg-no-repeat bg-cover  flex   items-center justify-center  relative h-screen">
      <main className="flex-col md:flex-row  flex justify-around w-full max-w-7xl rounded-md py-8  items-center bg-white border sm:px-12 shadow-lg">
        <Form></Form>
        <img src="/love-console.gif" alt="" className="w-48  md:w-80" />
      </main>
    </div>
  );
}
const handleSubmit = () => {
  return;
};
const Form = () => {
  return (
    <div className="flex flex-col items-center md:items-start h-full w-full  p-3 ">
      <h1 className="text-5xl lg:text-8xl  font-fancyFont  font-bold py-8   bg-clip-text">
        Send <span className="text-pink-500">Celeste</span> a hug{" "}
      </h1>
      <h2 className="font-bold ">Your Name </h2>
      <input
        onChange={(e) => {}}
        type="text"
        className="bg-gray-300  font-bold rounded xl sm:w-96 border mt-1 mb-4 px-4 py-2"
        placeholder="Name"
      />
      <h2 className="font-bold ">Message </h2>
      <textarea
        className="bg-gray-300  font-bold rounded xl sm:w-96 border mt-1 mb-4 px-4 pt-2 pb-12"
        placeholder="Dear Celeste,  "
      />
      <button className="bg-theme-black font-bold text-white mt-4 text-2xl px-20 py-1 pb-2 rounded-lg w-fit">
        Send{" "}
      </button>
    </div>
  );
};
