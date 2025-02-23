"use client";
import Nav from "~/app/_components/nav";
import UpdatePayment from "~/app/_components/update-payment";
import { useState } from "react";

export default function SettingsPage() {
  const [isUpdatePaymentOpen, setIsUpdatePaymentOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <div className="container mx-auto px-4 pt-20">
        {/* Notifications Settings */}
        <div className="rounded-lg bg-white p-4 shadow-md sm:p-6">
          <h2 className="mb-6 text-lg font-semibold text-gray-900">Notification Preferences</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Email Notifications</h3>
                <p className="text-sm text-gray-500">Receive emails about your subscription updates</p>
              </div>
              <button
                type="button"
                className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-purple-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                role="switch"
                aria-checked="true"
              >
                <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Billing Alerts</h3>
                <p className="text-sm text-gray-500">Get notified when your subscription is about to renew</p>
              </div>
              <button
                type="button"
                className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-purple-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                role="switch"
                aria-checked="true"
              >
                <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Billing Settings */}
        <div className="mt-8 rounded-lg bg-white p-4 shadow-md sm:p-6">
          <h2 className="mb-6 text-lg font-semibold text-gray-900">Billing Settings</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Payment Method</h3>
              <div className="mt-2 flex items-center space-x-4">
                <div className="flex items-center space-x-2 rounded-lg border border-gray-300 px-4 py-2">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span className="text-sm text-gray-600">•••• 4242</span>
                </div>
                <button 
                  className="text-sm font-medium text-purple-600 hover:text-purple-500"
                  onClick={() => setIsUpdatePaymentOpen(true)}
                >
                  Update
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900">Billing Cycle</h3>
              <div className="mt-2">
                <select className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500">
                  <option>Monthly</option>
                  <option>Annually</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="mt-8 rounded-lg bg-red-50 p-4 shadow-md sm:p-6">
          <h2 className="mb-6 text-lg font-semibold text-red-800">Danger Zone</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-red-800">Delete Account</h3>
              <p className="text-sm text-red-600">Once you delete your account, there is no going back.</p>
            </div>
            <button className="rounded-lg border border-red-600 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50">
              Delete Account
            </button>
          </div>
        </div>
      </div>
      <UpdatePayment 
        isOpen={isUpdatePaymentOpen} 
        onClose={() => setIsUpdatePaymentOpen(false)} 
      />
    </div>
  );
}