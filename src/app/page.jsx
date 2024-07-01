"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../assets/social-tweet-logo-slate.jpeg";

function WelcomePage() {
  const [logIn, setLogIn] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleButtonClick = () => {
    setAnimate(true);
    setTimeout(() => {
      setLogIn(!logIn);
      setAnimate(false);
    }, 500); // duración de la animación
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center items-center h-[calc(100vh-7rem)]">
        <div className="mb-4 sm:mb-0 sm:mr-4">
          <Image
            src={logo}
            width={240}
            height={240}
            className="rounded sm:w-[480px] sm:h-[480px]"
          />
        </div>
        <div className="sm:ml-4">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl sm:text-9xl text-slate-200 text-center">Social Tweet</h2>
            <button
              className="bg-slate-500 hover:bg-slate-300 text-white font-bold py-2 px-4 rounded-full my-4"
              onClick={handleButtonClick}
            >
              Don't have an account? Make one!
            </button>
          </div>
          {/* Animation Tailwind CSS with if staments */}
          <div className={`mt-4 sm:mt-0 sm:ml-4 flex flex-col ${animate ? 'opacity-0 transition-opacity duration-500' : 'opacity-100 transition-opacity duration-500'}`}>
            {logIn ? (
              <form action="" className="flex flex-col">
                <label htmlFor="username" className="text-sm text-slate-300">Username</label>
                <input
                  type="text"
                  id="username"
                  className="px-3 py-2 border rounded-md bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
                />
                <label htmlFor="email" className="mt-2 text-sm text-slate-300">Email</label>
                <input
                  type="email"
                  id="email"
                  className="px-3 py-2 border rounded-md bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
                />
                <label htmlFor="password" className="mt-2 text-sm text-slate-300">Password</label>
                <input
                  type="password"
                  id="password"
                  className="px-3 py-2 border rounded-md bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
                />
                <label htmlFor="confirmpassword" className="mt-2 text-sm text-slate-300">Confirm Password</label>
                <input
                  type="password"
                  id="confirmpassword"
                  className="px-3 py-2 border rounded-md bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
                />
                <button
                  type="submit"
                  className="mt-4 bg-slate-300 text-white py-2 px-4 rounded-md shadow-sm hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
                >
                  Sign in
                </button>
              </form>
            ) : (
              <form action="" className="flex flex-col">
                <label htmlFor="email" className="text-sm text-slate-300">Email</label>
                <input
                  type="email"
                  id="email"
                  className="px-3 py-2 border rounded-md bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
                />
                <label htmlFor="password" className="mt-2 text-sm text-slate-300">Password</label>
                <input
                  type="password"
                  id="password"
                  className="px-3 py-2 border rounded-md bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
                />
                <button
                  type="submit"
                  className="mt-4 bg-slate-300 text-white py-2 px-4 rounded-md shadow-sm hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
                >
                  Log in
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
