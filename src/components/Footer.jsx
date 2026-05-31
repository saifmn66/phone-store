import { Smartphone, Shield, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 overflow-hidden">
      {/* Background styling elements */}
      <div className="absolute bottom-0 left-1/4 w-[35rem] h-[35rem] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Trust Badges Banner */}
      <div className="border-b border-slate-900/80 bg-slate-900/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h5 className="text-white font-bold text-sm">Lifetime Warranty</h5>
                <p className="text-xs text-slate-500 mt-0.5">On all screen & component repairs</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h5 className="text-white font-bold text-sm">OEM Quality Parts</h5>
                <p className="text-xs text-slate-500 mt-0.5">Only certified grade-A materials</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h5 className="text-white font-bold text-sm">24-Point Diagnostics</h5>
                <p className="text-xs text-slate-500 mt-0.5">Comprehensive software & hardware test</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h5 className="text-white font-bold text-sm">Rapid Delivery</h5>
                <p className="text-xs text-slate-500 mt-0.5">Most fixes done in under 30 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-emerald-500 text-white shadow-lg">
                <Smartphone className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent tracking-tight">
                Smart<span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Rx</span>
              </span>
            </a>
            
            <p className="text-sm text-slate-400 leading-relaxed font-normal">
              State-of-the-art repair facilities dedicated to restoring digital devices with clinical precision. Certified engineers, premium diagnostics, and guaranteed customer satisfaction.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider">Services</h5>
            <ul className="space-y-2.5">
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, 'services')} className="text-sm text-slate-500 hover:text-cyan-400 transition-colors duration-200">
                  Screen Restoration
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, 'services')} className="text-sm text-slate-500 hover:text-cyan-400 transition-colors duration-200">
                  Battery Replacement
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, 'services')} className="text-sm text-slate-500 hover:text-cyan-400 transition-colors duration-200">
                  Liquid Extraction
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, 'services')} className="text-sm text-slate-500 hover:text-cyan-400 transition-colors duration-200">
                  Micro-soldering
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider">Company</h5>
            <ul className="space-y-2.5">
              <li>
                <a href="#how-it-works" onClick={(e) => handleScrollTo(e, 'how-it-works')} className="text-sm text-slate-500 hover:text-cyan-400 transition-colors duration-200">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={(e) => handleScrollTo(e, 'pricing')} className="text-sm text-slate-500 hover:text-cyan-400 transition-colors duration-200">
                  Price List
                </a>
              </li>
              <li>
                <a href="#testimonials" onClick={(e) => handleScrollTo(e, 'testimonials')} className="text-sm text-slate-500 hover:text-cyan-400 transition-colors duration-200">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#booking" onClick={(e) => handleScrollTo(e, 'booking')} className="text-sm text-slate-500 hover:text-cyan-400 transition-colors duration-200">
                  Book Slot
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter sign up */}
          <div className="lg:col-span-4 space-y-4">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider">Stay Recalibrated</h5>
            <p className="text-sm text-slate-400 leading-relaxed font-normal">
              Subscribe to receive tech care guidelines, device warning news, and exclusive repair discounts.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full bg-slate-900 border border-slate-850 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-cyan-400 placeholder-slate-600 transition-colors duration-200"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-sm font-bold hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-200"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {currentYear} SmartRx Inc. All rights reserved. All third-party trademarks are registered properties of their respective owners.
          </p>

          <div className="flex items-center gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-350 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-slate-350 transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-slate-350 transition-colors duration-200">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
