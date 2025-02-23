"use client";
import Link from "next/link";
import { useState } from "react";

export default function Dashboard() {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b bg-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/dashboard" className="text-xl font-bold text-purple-600">
            Subs Mngr
          </Link>
          <div className="flex items-center space-x-4">
            {/* Notifications Button */}
            <button className="text-gray-600 hover:text-purple-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>

            {/* Profile Menu */}
            <div className="relative">
              <button
                className="flex items-center space-x-2 rounded-full hover:bg-gray-100 p-1"
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              >
                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-sm font-medium text-purple-600">JD</span>
                </div>
                <svg 
                  className="h-5 w-5 text-gray-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">John Doe</p>
                    <p className="text-sm text-gray-500">john@example.com</p>
                  </div>
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Your Profile
                  </Link>
                  <Link
                    href="/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                  <button
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      console.log("Logout clicked");
                      // Add logout logic here
                    }}
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 pt-20">
        {/* Active Subscriptions */}
        <div className="rounded-lg bg-white p-4 shadow-md sm:p-6">
          <h2 className="mb-6 text-lg font-semibold text-gray-900">My Subscriptions</h2>
          
          {/* Desktop Table View */}
          <div className="hidden md:block">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th scope="col" className="w-1/4 px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Subscription Name
                    </th>
                    <th scope="col" className="w-1/6 px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Price
                    </th>
                    <th scope="col" className="w-1/6 px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th scope="col" className="w-1/4 px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Next Billing
                    </th>
                    <th scope="col" className="w-1/6 px-6 py-4 text-right text-sm font-semibold text-gray-900">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {subscriptions.map((subscription, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-8 w-8 flex-shrink-0 rounded-full bg-purple-100 flex items-center justify-center">
                            <span className="text-sm font-medium text-purple-600">
                              {subscription.name[0]}
                            </span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{subscription.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 font-medium">
                          ${subscription.price}
                          <span className="text-gray-500 font-normal">/mo</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                          subscription.status === 'Active' 
                            ? 'bg-green-100 text-green-800'
                            : subscription.status === 'Past Due'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {subscription.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{subscription.nextBilling}</div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="inline-flex items-center rounded-lg border border-purple-600 px-4 py-2 text-sm font-medium text-purple-600 hover:bg-purple-50">
                          Manage
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="space-y-4 md:hidden">
            {subscriptions.map((subscription, index) => (
              <div 
                key={index} 
                className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="h-8 w-8 flex-shrink-0 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="text-sm font-medium text-purple-600">
                        {subscription.name[0]}
                      </span>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {subscription.name}
                      </p>
                    </div>
                  </div>
                  <span className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                    subscription.status === 'Active' 
                      ? 'bg-green-100 text-green-800'
                      : subscription.status === 'Past Due'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {subscription.status}
                  </span>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <dl className="grid grid-cols-2 gap-4">
                    <div>
                      <dt className="text-xs font-medium text-gray-500">Price</dt>
                      <dd className="mt-1 text-sm font-medium text-gray-900">
                        ${subscription.price}
                        <span className="text-gray-500 font-normal">/mo</span>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-medium text-gray-500">Next Billing</dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {subscription.nextBilling}
                      </dd>
                    </div>
                  </dl>
                  <div className="mt-4">
                    <button className="w-full rounded-lg border border-purple-600 px-4 py-2 text-sm font-medium text-purple-600 hover:bg-purple-50">
                      Manage
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upgrade CTA */}
        <div className="mt-8 rounded-lg bg-purple-50 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-purple-900">Upgrade Your Plan</h3>
              <p className="text-purple-700">Get access to more features with our premium plans</p>
            </div>
            <button className="w-full sm:w-auto rounded-lg bg-purple-600 px-6 py-2 text-white hover:bg-purple-700">
              View Plans
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const subscriptions = [
  {
    name: "Basic Plan",
    price: "9.99",
    status: "Active",
    nextBilling: "Mar 21, 2024",
  },
  {
    name: "Pro Plan",
    price: "29.99",
    status: "Past Due",
    nextBilling: "Mar 15, 2024",
  },
  {
    name: "Enterprise Plan",
    price: "99.99",
    status: "Cancelled",
    nextBilling: "N/A",
  },
];