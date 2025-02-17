import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-white border-b">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/dashboard" className="text-xl font-bold text-purple-600">
            Dashboard
          </Link>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-purple-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <button className="flex items-center space-x-2 rounded-lg bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200">
              <span>John Doe</span>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 pt-20">
        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="text-sm font-medium text-gray-500">Total Revenue</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">$45,231</p>
            <p className="mt-2 text-sm text-green-600">↑ 12% from last month</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="text-sm font-medium text-gray-500">Active Users</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">2,453</p>
            <p className="mt-2 text-sm text-green-600">↑ 8% from last month</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="text-sm font-medium text-gray-500">New Customers</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">127</p>
            <p className="mt-2 text-sm text-red-600">↓ 3% from last month</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="text-sm font-medium text-gray-500">Active Projects</h3>
            <p className="mt-2 text-3xl font-bold text-gray-900">18</p>
            <p className="mt-2 text-sm text-green-600">↑ 2% from last month</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 rounded-lg bg-white p-6 shadow-md">
          <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          <div className="mt-6 divide-y divide-gray-200">
            {activities.map((activity, index) => (
              <div key={index} className="py-4">
                <div className="flex items-center space-x-4">
                  <div className={`h-8 w-8 rounded-full ${activity.bgColor} flex items-center justify-center`}>
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
      </div>
    </div>
  );
}

const activities = [
  {
    title: "New user signed up",
    time: "5 minutes ago",
    bgColor: "bg-green-100",
    icon: (
      <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    ),
  },
  {
    title: "Payment received",
    time: "2 hours ago",
    bgColor: "bg-purple-100",
    icon: (
      <svg className="h-4 w-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "New project created",
    time: "4 hours ago",
    bgColor: "bg-blue-100",
    icon: (
      <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];