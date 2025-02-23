'use client';

import { useState } from 'react';
import { api } from "~/trpc/react";

interface ManageSubscriptionProps {
  subscriptionId: number;
  status: string;
  price: string;
  name: string;
  onClose?: () => void;
}

export function ManageSubscription({ subscriptionId, status, price, name, onClose }: ManageSubscriptionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const cancelSubscription = api.subscriptions.cancel.useMutation({
    onSuccess: () => {
      setIsModalOpen(false);
      if (onClose) onClose();
    },
  });

  const paySubscription = api.subscriptions.pay.useMutation({
    onSuccess: () => {
      setIsPaymentModalOpen(false);
      setIsModalOpen(false);
      if (onClose) onClose();
    },
  });

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="inline-flex items-center rounded-lg border border-purple-600 px-4 py-2 text-sm font-medium text-purple-600 hover:bg-purple-50"
      >
        Manage
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                Manage {name}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="mb-4">
              <div className="rounded-lg bg-gray-50 p-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Current Plan</span>
                  <span className="text-sm font-medium text-gray-900">{name}</span>
                </div>
                <div className="mt-2 flex justify-between">
                  <span className="text-sm text-gray-500">Price</span>
                  <span className="text-sm font-medium text-gray-900">${price}/mo</span>
                </div>
                <div className="mt-2 flex justify-between">
                  <span className="text-sm text-gray-500">Status</span>
                  <span className={`text-sm font-medium ${
                    status === 'Active' ? 'text-green-600' : 
                    status === 'Past Due' ? 'text-yellow-600' : 'text-red-600'
                  }`}>{status}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {status === 'Past Due' && (
                <button
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="w-full rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                >
                  Pay Now
                </button>
              )}
              
              {status === 'Active' && (
                <button
                  onClick={() => cancelSubscription.mutate({ subscriptionId })}
                  className="w-full rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                  disabled={cancelSubscription.isPending}
                >
                  {cancelSubscription.isPending ? 'Processing...' : 'Cancel Subscription'}
                </button>
              )}
              
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {isPaymentModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                Pay Subscription
              </h3>
              <button
                onClick={() => setIsPaymentModalOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="mb-6 rounded-lg bg-gray-50 p-4">
              <p className="text-center text-2xl font-bold text-gray-900">${price}</p>
              <p className="text-center text-sm text-gray-500">Due for {name}</p>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => paySubscription.mutate({ subscriptionId })}
                className="w-full rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                disabled={paySubscription.isPending}
              >
                {paySubscription.isPending ? 'Processing...' : 'Pay Now'}
              </button>
              
              <button
                onClick={() => setIsPaymentModalOpen(false)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}