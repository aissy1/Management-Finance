"use client";
import React from "react";
import Link from "next/link";
import { login } from "@/app/lib/actions";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const result = await login(formData);
    const { data: userData, message } = result;

    if (message === "true") {
      const userSession = {
        name: userData?.name,
      };
      console.log(userSession);

      if (typeof window !== "undefined") {
        window.sessionStorage.setItem(
          "user_session",
          JSON.stringify(userSession)
        );
      }
      setTimeout(() => {
        router.push("/dashboard");
      }, 3000);
      setIsSubmitting(false);
    } else {
      setMessage(message);
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex-1 rounded-lg bg-transparent px-6 pb-4 pt-8">
        <h1 className="mb-3 text-2xl text-white text-center">LOGIN</h1>
        <div className="w-full">
          <p className="text-red-200 text-md">{message}</p>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-white"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-6 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                autoComplete="email"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-white"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-6 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                autoComplete="current-password"
                required
                minLength={6}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full mt-6 justify-center item-center ">
          <button
            aria-disabled={isSubmitting}
            className="w-full text-center bg-blue-600 text-white rounded-md text-md p-2"
          >
            {isSubmitting ? "Logging . . ." : "Login"}
          </button>
          <Link
            href="/"
            className="w-full text-center bg-font rounded-md text-md p-2"
          >
            Cancel
          </Link>
        </div>
      </div>
    </form>
  );
}
