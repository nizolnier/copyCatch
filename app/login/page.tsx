"use client";
import Link from "next/link";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const router = useRouter();

  const login = (e) => {
    e.preventDefault();

    if (!email.endsWith("@ucf.edu")) {
      toast.warning("Invalid email domain");
    } else {
      const body = {
        email,
        password
      }
      axios.post("http://localhost:3000/api/user/login", body).then(res => {
        router.push("/home")
      })

    }
  };

  return (
    <main className="bg-wavy bg-no-repeat bg-cover w-screen h-screen flex justify-center items-center">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <section className="flex flex-col justify-between items-center bg-white rounded-lg drop-shadow-sm w-96 h-3/5 p-8 pt-20">
        <article className="flex flex-col justify-between items-center">
          <h1 className="text-black font-bold">LOG IN</h1>
          <p className="text-stone-700">Please use your ucf.edu email</p>
        </article>

        <div className="relative">
          <input
            type="email"
            className="peer py-3 px-9 ps-11 block w-full placeholder-indigo-500 text-indigo-500 bg-indigo-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
            <svg
              className="flex-shrink-0 size-4 text-indigo-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        </div>

        <div className="relative">
          <input
            type="password"
            className="peer py-3 px-9 ps-11 block w-full placeholder-indigo-500 text-indigo-500 bg-indigo-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
            <svg
              className="flex-shrink-0 size-4 text-indigo-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
              <circle cx="16.5" cy="7.5" r=".5" />
            </svg>
          </div>
        </div>

        <button
          onClick={login}
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-24 py-2.5 text-center"
        >
          Log in
        </button>
        <Link
          className="px-11 py-2.5 font-medium bg-indigo-50 hover:bg-indigo-100 hover:text-indigo-600 text-indigo-500 rounded-lg text-sm"
          href="/sign-up"
        >
          No account? Sign Up
        </Link>
      </section>
    </main>
  );
}
