import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100 text-gray-800 p-4">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          It’s very difficult to make a decision on the team, isn’t it?
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl">
          Meet Womp Womp – the next-gen polling app designed to keep your team
          in sync, fast and fun! Say goodbye to endless debates and hello to
          instant insights with a single womp. Because when it’s time to get
          real answers, Womp Womp has your back, every time!
        </p>
        <div className="flex justify-center space-x-6 mt-8">
          <Link
            to="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 min-w-[150px] text-center"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 min-w-[150px] text-center"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
