"use client";
import Nav from "~/app/_components/nav";
import Link from "next/link";
import { useState } from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <div className="container mx-auto px-4 pt-20">
        <div className="rounded-lg bg-white p-4 shadow-md sm:p-6">
          <h2 className="mb-6 text-lg font-semibold text-gray-900">My Subscriptions</h2>
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