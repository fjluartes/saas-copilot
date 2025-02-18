import Link from "next/link";

export default function Login() {
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
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div>

                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-purple-600 hover:text-purple-500"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </form>

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