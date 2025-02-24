"use client";
import Link from "next/link";
import SigninForm from "~/app/_components/signin-form";

export default function Signin() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="container mx-auto flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link href="/" className="mb-8 block text-center">
            <h1 className="text-2xl font-bold text-white">SaaS Logo</h1>
          </Link>

          {/* Login Form */}
          <div className="rounded-lg bg-white p-8 shadow-xl">
            <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
              Welcome back
            </h2>
            <SigninForm />

            <div className="mt-6 text-center text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="font-medium text-purple-600 hover:text-purple-500"
              >
                Sign up now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}