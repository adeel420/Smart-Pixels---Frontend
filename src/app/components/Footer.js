import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Smart Pixels Solution
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Transforming ideas into powerful digital experiences. Your trusted partner for innovative web development, WordPress solutions, and strategic digital marketing.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer">
                <span className="text-blue-400">📧</span>
              </div>
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer">
                <span className="text-blue-400">📱</span>
              </div>
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer">
                <span className="text-blue-400">🌐</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-lg text-white">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">WordPress Solutions</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Digital Marketing</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">E-commerce</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-lg text-white">Company</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link href="/admin" className="hover:text-blue-400 transition-colors">Admin Portal</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Portfolio</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Smart Pixels Solution. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>📧 info@smartpixelssolution.com</span>
              <span>📞 +1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}