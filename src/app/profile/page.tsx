"use client";
import Nav from "~/app/_components/nav";
import { useState } from "react";

export default function ProfilePage() {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <div className="container mx-auto px-4 pt-20">
        <div className="rounded-lg bg-white p-4 shadow-md sm:p-6">
          <h2 className="mb-6 text-lg font-semibold text-gray-900">Profile Information</h2>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="h-20 w-20 rounded-full bg-purple-100 flex items-center justify-center">
                <span className="text-2xl font-medium text-purple-600">JD</span>
              </div>
              <button className="rounded-lg border border-purple-600 px-4 py-2 text-sm font-medium text-purple-600 hover:bg-purple-50">
                Change Photo
              </button>
            </div>

            <form className="space-y-4 max-w-md">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  defaultValue="John Doe"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  defaultValue="john@example.com"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  defaultValue="Acme Inc."
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-8 rounded-lg bg-white p-4 shadow-md sm:p-6">
          <h2 className="mb-6 text-lg font-semibold text-gray-900">Password</h2>
          
          <form className="space-y-4 max-w-md">
            <div>
              <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">
                Current Password
              </label>
              <input
                type="password"
                id="current-password"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                New Password
              </label>
              <input
                type="password"
                id="new-password"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Update Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}