import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ShieldCheck, HelpCircle } from 'lucide-react';

const brands = [
  { id: 'apple', name: 'iPhone / Apple' },
  { id: 'samsung', name: 'Galaxy / Samsung' },
  { id: 'pixel', name: 'Pixel / Google' }
];

const pricingData = {
  apple: [
    {
      title: "Screen Restoration",
      price: "$89",
      period: "starting at",
      time: "20-30 Mins",
      popular: true,
      features: [
        "Premium OLED / LCD display replacement",
        "Full TrueTone and HDR calibration",
        "Water resistance adhesive gasket replacement",
        "Lifetime hardware failure warranty"
      ]
    },
    {
      title: "Battery Recalibration",
      price: "$49",
      period: "starting at",
      time: "15-20 Mins",
      popular: false,
      features: [
        "Brand new high-capacity zero-cycle cell",
        "Internal thermal paste refreshing",
        "Battery health monitoring sync",
        "12-Month performance warranty"
      ]
    },
    {
      title: "Board-Level & Liquid Recovery",
      price: "$129",
      period: "starting at",
      time: "24-48 Hours",
      popular: false,
      features: [
        "Ultrasonic motherboard chemical bath",
        "Micro-soldering and IC chip remapping",
        "Data extraction and integrity backup",
        "90-Day water-damage warranty"
      ]
    }
  ],
  samsung: [
    {
      title: "Screen Restoration",
      price: "$99",
      period: "starting at",
      time: "30-40 Mins",
      popular: true,
      features: [
        "Dynamic AMOLED display replacement",
        "Under-display fingerprint calibration",
        "Dust and liquid seal replacement",
        "Lifetime hardware failure warranty"
      ]
    },
    {
      title: "Battery Recalibration",
      price: "$59",
      period: "starting at",
      time: "20-30 Mins",
      popular: false,
      features: [
        "Certified high-capacity battery cell",
        "Thermal management testing",
        "Samsung Knox battery configuration",
        "12-Month performance warranty"
      ]
    },
    {
      title: "Board-Level & Liquid Recovery",
      price: "$139",
      period: "starting at",
      time: "24-48 Hours",
      popular: false,
      features: [
        "Advanced liquid chemical cleansing",
        "Microscopic trace repair and soldering",
        "Secure storage extraction and backup",
        "90-Day water-damage warranty"
      ]
    }
  ],
  pixel: [
    {
      title: "Screen Restoration",
      price: "$79",
      period: "starting at",
      time: "20-30 Mins",
      popular: true,
      features: [
        "OLED screen assembly replacement",
        "Light sensor and proximity recalibration",
        "Acoustic chamber cleaning and resealing",
        "Lifetime hardware failure warranty"
      ]
    },
    {
      title: "Battery Recalibration",
      price: "$49",
      period: "starting at",
      time: "15-20 Mins",
      popular: false,
      features: [
        "Original equivalent lithium battery",
        "Power charging cycle reset",
        "Adaptive Battery software syncing",
        "12-Month performance warranty"
      ]
    },
    {
      title: "Board-Level & Liquid Recovery",
      price: "$119",
      period: "starting at",
      time: "24-48 Hours",
      popular: false,
      features: [
        "Ultrasonic trace corrosion cleaning",
        "Logic board solder and port repairs",
        "Google account flash and storage backup",
        "90-Day water-damage warranty"
      ]
    }
  ]
};

export default function Pricing() {
  const [selectedBrand, setSelectedBrand] = useState('apple');

  const handleScrollToBooking = (e) => {
    e.preventDefault();
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[45rem] h-[45rem] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-10 left-10 w-[30rem] h-[30rem] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-4"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Honest Pricing</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6"
          >
            Transparent <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Pricing Quotes</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal"
          >
            No diagnostics fees if we repair your phone, and no surprise markups. Choose your device class to view baseline service rates.
          </motion.p>
        </div>

        {/* Brand Selector Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            {brands.map((brand) => (
              <button
                key={brand.id}
                onClick={() => setSelectedBrand(brand.id)}
                className={`relative px-4 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none ${
                  selectedBrand === brand.id
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {selectedBrand === brand.id && (
                  <motion.div
                    layoutId="activeBrand"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/90 to-emerald-500/90 rounded-xl -z-10 shadow-lg shadow-cyan-500/10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {brand.name}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <AnimatePresence mode="wait">
            {pricingData[selectedBrand].map((plan, idx) => (
              <motion.div
                key={`${selectedBrand}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`relative flex flex-col justify-between rounded-3xl p-8 bg-slate-900/30 border transition-all duration-300 ${
                  plan.popular
                    ? 'border-cyan-500/50 shadow-xl shadow-cyan-500/5 lg:scale-[1.03] lg:z-10 hover:border-cyan-400 bg-slate-900/50'
                    : 'border-slate-850 hover:border-slate-700 hover:bg-slate-900/40'
                }`}
              >
                {/* Popular Glow Ring */}
                {plan.popular && (
                  <div className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-[10px] font-bold tracking-wider uppercase text-white shadow-md shadow-cyan-500/20">
                    Recommended
                  </div>
                )}

                <div>
                  {/* Title & Time */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white tracking-tight">{plan.title}</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-slate-900 text-slate-400 text-xs font-medium border border-slate-800">
                      {plan.time}
                    </span>
                  </div>

                  {/* Price info */}
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">{plan.period}</span>
                    <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-slate-800/80 mb-8" />

                  {/* Features list */}
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-cyan-500/20">
                          <Check className="w-3 h-3 text-cyan-400" />
                        </div>
                        <span className="text-slate-350 text-sm leading-relaxed font-normal">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Booking Call to Action */}
                <a
                  href="#booking"
                  onClick={handleScrollToBooking}
                  className={`w-full py-4 px-6 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white hover:opacity-95 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-400/20 hover:-translate-y-0.5'
                      : 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-850 hover:text-white hover:-translate-y-0.5'
                  }`}
                >
                  Book Repair Now
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pricing disclaimer info banner */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 px-6 py-4 rounded-2xl bg-slate-900/40 border border-slate-850 max-w-4xl mx-auto text-center sm:text-left">
          <HelpCircle className="w-6 h-6 text-slate-500 flex-shrink-0" />
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
            Need a repair that isn't listed? E.g., charging port replacements, camera repair, or chassis dent removal. We fix everything. Select <a href="#booking" onClick={handleScrollToBooking} className="text-cyan-400 font-bold hover:underline">Get a Free Diagnosis</a> in the scheduler and our experts will inspect it free of charge.
          </p>
        </div>
      </div>
    </section>
  );
}
