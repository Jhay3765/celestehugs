"use client";
import { useState, useEffect } from "react";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);

export default function Home() {
  const [triedMessage, setTriedMessage] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    if (message.length <= 8) {
      setTriedMessage(true);
      return;
    }

    e.preventDefault();
    const { data, error } = await supabase
      .from("posts")
      .insert([{ name: name, message: message }]);
    if (error) {
      console.error("Error inserting data:", error.message);
    } else {
      console.log("Data inserted successfully:", data);
      setSuccessful(true);
      // Optionally, reset the input field after successful submission
      setName("");
      setMessage("");
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    message.length >= 8 && setTriedMessage(false);
    setMessage(e.target.value);
  };

  return (
    <div className="bg-[url('/newpic.png')] transition-all duration-300 font-normalFont text-xl bg-no-repeat bg-cover  flex   items-center justify-center  relative h-screen">
      <main className="flex-col md:flex-row  flex justify-around w-full max-w-7xl rounded-md py-8  items-center bg-white border sm:px-12 shadow-lg">
        <div className="flex flex-col items-center md:items-start h-full w-full  p-3 ">
          <h1 className="text-5xl lg:text-8xl  font-fancyFont  font-bold py-8   bg-clip-text">
            Send <span className="text-pink-500">Celeste</span> a hug{" "}
          </h1>
          <h2 className="font-bold ">Your Name </h2>
          <input
            value={name}
            onChange={handleNameChange}
            type="text"
            className="bg-gray-300  font-bold rounded xl sm:w-96 border mt-1 mb-4 px-4 py-2"
            placeholder="Name"
          />
          <h2 className="font-bold ">Message </h2>
          {triedMessage && (
            <p className="text-red-600 text-sm ">
              Message must be at least 8 characters UwU
            </p>
          )}

          <textarea
            value={message}
            onChange={handleMessageChange}
            className="bg-gray-300  font-bold rounded xl sm:w-96 border mt-1 mb-4 px-4 pt-2 pb-12"
            placeholder="Dear Celeste,  "
          />
          {successful ? (
            <div className="flex flex-col md:flex-row items-center gap-2">
              <button className="bg-green-600 font-bold text-white mt-4 text-2xl px-20 py-1 pb-2 rounded-lg w-fit">
                Msg Sent !
              </button>
              <p className="text-2xl">Thanks You{">.<"}</p>
            </div>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-theme-black font-bold text-white mt-4 text-2xl px-20 py-1 pb-2 rounded-lg w-fit"
            >
              Send{" "}
            </button>
          )}
        </div>
        {successful ? (
          <img src="/dance.gif" alt="" className="w-48  md:w-80" />
        ) : (
          <img src="/love-console.gif" alt="" className="w-48  md:w-80" />
        )}
      </main>
    </div>
  );
}
