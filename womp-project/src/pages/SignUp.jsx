import React from "react";

function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Create an Account
        </h2>
        <form action="#" method="get" className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-gray-600 font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              name="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-600 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-600 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="submit"
              value="Sign Up"
              className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 transition duration-200"
            />
          </div>
        </form>
        <p className="mt-6 text-gray-600 text-center">
          Already have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
