import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function About() {
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
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Smart Pixels
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate innovators dedicated to transforming businesses through
            exceptional digital experiences.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                To empower businesses with cutting-edge digital solutions that
                drive growth, enhance user experience, and create lasting value
                in the digital landscape.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe in combining creativity with technology to deliver
                exceptional results that exceed our clients&apos; expectations.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-12 rounded-3xl text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl text-white">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Goal Oriented
              </h3>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Us?
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-16"></div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl text-white">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Fast Delivery
                </h3>
                <p className="text-gray-600">
                  Quick turnaround times without compromising on quality or
                  attention to detail.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl text-white">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Reliable Support
                </h3>
                <p className="text-gray-600">
                  24/7 support and maintenance for all our projects with
                  dedicated assistance.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl text-white">💡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Innovation
                </h3>
                <p className="text-gray-600">
                  Latest technologies and creative solutions that keep you ahead
                  of the competition.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s create something amazing for your business.
            </p>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
