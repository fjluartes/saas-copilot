import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b bg-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/dashboard" className="text-xl font-bold text-purple-600">
            My Subscriptions
          </Link>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-purple-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="flex items-center space-x-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700">
              <span>Current Plan: Pro</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 pt-20">
        {/* Subscription Stats */}
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="text-sm font-medium text-gray-500">Current MRR</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">$2,499</p>
            <p className="mt-2 text-sm text-green-600">↑ 15% from last month</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="text-sm font-medium text-gray-500">Active Subscriptions</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">283</p>
            <p className="mt-2 text-sm text-green-600">↑ 5% from last month</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="text-sm font-medium text-gray-500">Churn Rate</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">2.4%</p>
            <p className="mt-2 text-sm text-red-600">↑ 0.5% from last month</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="text-sm font-medium text-gray-500">Avg. Revenue/User</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">$8.83</p>
            <p className="mt-2 text-sm text-green-600">↑ 3% from last month</p>
          </div>
        </div>

        {/* Subscription Activity */}
        <div className="mt-8 rounded-lg bg-white p-6 shadow-md">
          <h2 className="text-lg font-semibold text-gray-900">Recent Subscription Activity</h2>
          <div className="mt-6 divide-y divide-gray-200">
            {subscriptionActivities.map((activity, index) => (
              <div key={index} className="py-4">
                <div className="flex items-center space-x-4">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full ${activity.bgColor}`}>
                    {activity.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upgrade CTA */}
        <div className="mt-8 rounded-lg bg-purple-50 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-purple-900">Upgrade to Enterprise</h3>
              <p className="text-purple-700">Get advanced features and priority support</p>
            </div>
            <button className="rounded-lg bg-purple-600 px-6 py-2 text-white hover:bg-purple-700">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const subscriptionActivities = [
  {
    title: "New Pro Plan Subscription",
    time: "5 minutes ago",
    bgColor: "bg-green-100",
    icon: (
      <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    ),
  },
  {
    title: "Subscription Renewed",
    time: "2 hours ago",
    bgColor: "bg-purple-100",
    icon: (
      <svg className="h-4 w-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Plan Downgraded",
    time: "4 hours ago",
    bgColor: "bg-yellow-100",
    icon: (
      <svg className="h-4 w-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    ),
  },
];