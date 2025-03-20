"use client";
import { useState } from "react";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession } from "~/lib/session";
import Cookies from 'js-cookie';

export default function SigninForm() {
  const router = useRouter();
  const setSession = useSession((state) => state.setSession);
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  
  const [error, setError] = useState("");

  const signin = api.user.signin.useMutation({
    onSuccess: (data) => {
      // Set session in Zustand store
      setSession(data.token, {
        id: data.id,
        email: data.email,
        name: data.name,
      });

      // Set cookie if remember me is checked
      if (formData.rememberMe) {
        Cookies.set('auth-token', data.token, { expires: 7 }); // Expires in 7 days
      } else {
        Cookies.set('auth-token', data.token); // Session cookie
      }

      router.push("/dashboard");
    },
    onError: (error) => {
      setError(error.message);
      // Clear any existing session data on error
      useSession.getState().clearSession();
      Cookies.remove('auth-token');
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await signin.mutateAsync({
        email: formData.email,
        password: formData.password,
      });
    } catch (error) {
      console.error("Signin error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">{error}</h3>
            </div>
          </div>
        </div>
      )}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          value={formData.password}
          onChange={handleChange}
          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
          placeholder="••••••••"
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="rememberMe"
            type="checkbox"
            checked={formData.rememberMe}
            onChange={handleChange}
            className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
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
        disabled={signin.isPending}
        className="w-full rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50"
      >
        {signin.isPending ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}