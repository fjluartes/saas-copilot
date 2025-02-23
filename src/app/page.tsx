import Link from "next/link";
import { HydrateClient } from "~/trpc/server";

export default function Home() {
  return (
    <HydrateClient>
      {/* Navigation Bar */}
      <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="text-xl font-bold text-purple-600">
            SaaS Logo
          </Link>
          <div className="space-x-4">
            <Link
              href="/signin"
              className="rounded-lg px-4 py-2 text-purple-600 hover:bg-purple-50"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#2e026d] to-[#15162c] py-20 pt-32">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                Your SaaS Solution
              </h1>
              <p className="mb-8 text-xl text-gray-300">
                Streamline your workflow with our powerful platform
              </p>
              <button className="rounded-lg bg-purple-500 px-8 py-3 font-semibold text-white transition hover:bg-purple-600">
                Get Started Free
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-4xl font-bold">Features</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="rounded-lg p-6 shadow-lg">
                  <h3 className="mb-4 text-xl font-bold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-4xl font-bold">Pricing</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <div key={index} className="rounded-lg bg-white p-8 shadow-lg">
                  <h3 className="mb-4 text-2xl font-bold">{plan.name}</h3>
                  <p className="mb-6 text-4xl font-bold">${plan.price}</p>
                  <ul className="mb-8 space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg
                          className="mr-2 h-5 w-5 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full rounded-lg bg-purple-500 py-3 font-semibold text-white transition hover:bg-purple-600">
                    Choose Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#2e026d] py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-4xl font-bold">Ready to get started?</h2>
            <p className="mb-8 text-xl">
              Join thousands of satisfied customers today
            </p>
            <button className="rounded-lg bg-white px-8 py-3 font-semibold text-purple-600 transition hover:bg-gray-100">
              Start Your Free Trial
            </button>
          </div>
        </section>
      </main>
    </HydrateClient>
  );
}

const features = [
  {
    title: "Easy Integration",
    description:
      "Set up in minutes with our simple API and comprehensive documentation.",
  },
  {
    title: "Powerful Analytics",
    description:
      "Get detailed insights into your business performance with real-time analytics.",
  },
  {
    title: "24/7 Support",
    description:
      "Our dedicated support team is always ready to help you succeed.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "29",
    features: [
      "Basic Features",
      "Up to 1,000 users",
      "2 Team members",
      "Basic support",
    ],
  },
  {
    name: "Professional",
    price: "99",
    features: [
      "Advanced Features",
      "Up to 10,000 users",
      "10 Team members",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "299",
    features: [
      "All Features",
      "Unlimited users",
      "Unlimited team members",
      "24/7 Premium support",
    ],
  },
];
