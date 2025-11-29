import Link from "next/link";

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to transform your business
            and drive exceptional growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16">
            {/* Web Development */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-12 rounded-3xl">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-6">
                  <span className="text-3xl text-white">💻</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Modern Tech Stack
                </h3>
                <p className="text-gray-600">
                  React, Next.js, Node.js, and cutting-edge technologies
                </p>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Web Development
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Custom web applications built with modern technologies. We
                  create responsive, fast, and scalable solutions tailored to
                  your business needs.
                </p>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-4"></span>
                    Custom Web Applications
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-4"></span>
                    E-commerce Solutions
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-4"></span>
                    API Development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-4"></span>
                    Progressive Web Apps
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  Get Quote
                </Link>
              </div>
            </div>

            {/* WordPress Solutions */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  WordPress Solutions
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Professional WordPress development with custom themes,
                  plugins, and optimized performance for exceptional user
                  experiences.
                </p>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-4"></span>
                    Custom Theme Development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-4"></span>
                    Plugin Development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-4"></span>
                    WordPress Optimization
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-4"></span>
                    Maintenance & Support
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  Get Quote
                </Link>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-12 rounded-3xl lg:order-1">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mb-6">
                  <span className="text-3xl text-white">🎨</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  WordPress Expertise
                </h3>
                <p className="text-gray-600">
                  Custom themes, plugins, and performance optimization
                </p>
              </div>
            </div>

            {/* Digital Marketing */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-12 rounded-3xl">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl flex items-center justify-center mb-6">
                  <span className="text-3xl text-white">📈</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Growth Focused
                </h3>
                <p className="text-gray-600">
                  Data-driven strategies for measurable business growth
                </p>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Digital Marketing
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Strategic digital marketing campaigns to boost your online
                  presence and drive sustainable business growth.
                </p>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-4"></span>
                    Search Engine Optimization (SEO)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-4"></span>
                    Social Media Marketing
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-4"></span>
                    Pay-Per-Click Advertising
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-4"></span>
                    Content Marketing
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
