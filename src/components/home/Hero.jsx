import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Cpu, ShieldCheck, Flame, Wrench, ShieldAlert } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Fast & Reliable Phone Repairs",
    subtitle: "Cracked screen or leaking pixels? We replace OLED & LCD assemblies in under 20 minutes using factory-grade alignment machinery.",
    highlight: "Screen & Glass",
    badge: "Clinical Restoration",
    image: "https://images.unsplash.com/photo-1601524909162-be87252be298?q=80&w=1920&auto=format&fit=crop",
    icon: <Cpu className="w-4 h-4 text-cyan-400" />,
    specs: ["OLED Alignment: ±0.01mm", "Adhesive: Acrylic Heat-Fuse", "TrueTone Sync: Passed"]
  },
  {
    id: 2,
    title: "Fix Your Device in Under 30 Minutes",
    subtitle: "Battery bloating or draining? Get a premium zero-cycle replacement with thermal protection seals and a 12-month performance guarantee.",
    highlight: "Battery & Power",
    badge: "Express Calibration",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1920&auto=format&fit=crop",
    icon: <Flame className="w-4 h-4 text-emerald-400" />,
    specs: ["Cell Class: A++ Premium", "Cycle Count: 0 Cycles", "Thermal Resistance: Checked"]
  },
  {
    id: 3,
    title: "Professional Technicians You Can Trust",
    subtitle: "Liquid spill or dropped in water? Our deep-cleansing ultrasonic chambers wash corrosion off logic board circuitry instantly.",
    highlight: "Liquid Recovery",
    badge: "Advanced Micro-soldering",
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=1920&auto=format&fit=crop",
    icon: <Wrench className="w-4 h-4 text-indigo-400" />,
    specs: ["Ultrasonic Wash: 40kHz", "Chamber Temp: 45°C Stable", "Data Retrieval: 98% Success"]
  },
  {
    id: 4,
    title: "Before & After: Back to Brand New",
    subtitle: "Why pay premium prices for a new phone? Our master technicians rebuild damaged casing and restore internal components to factory mint condition.",
    highlight: "Full Restorations",
    badge: "Eco-Friendly Refurbish",
    image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1920&auto=format&fit=crop",
    icon: <ShieldCheck className="w-4 h-4 text-pink-400" />,
    specs: ["Casing Finish: Matte Polish", "Body Alignment: Laser Tested", "Recyclability Rate: 92%"]
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, [current]);

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen bg-slate-950 overflow-hidden flex items-center justify-center">
      
      {/* Background Interactive Tech Grid & Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-35 z-10 pointer-events-none" />
      
      {/* Subtle Scanline Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[size:100%_4px] z-10 pointer-events-none opacity-30" />

      {/* Slide Image Backgrounds */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Slow elegant Ken Burns zoom effect */}
            <motion.div
              initial={{ scale: 1.03 }}
              animate={{ scale: 1.09 }}
              transition={{ duration: 7, ease: "linear" }}
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[current].image})` }}
            />
            {/* Cinematic Radial and Linear Dark Gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30" />
            
            {/* Cyan/Green soft blur overlays */}
            <div className="absolute top-1/4 left-1/3 w-[35rem] h-[35rem] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Content Area */}
      <div className="relative z-25 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 text-white flex flex-col justify-center h-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content Block */}
          <div className="lg:col-span-7 xl:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.08
                    }
                  },
                  exit: {
                    transition: {
                      staggerChildren: 0.05,
                      staggerDirection: -1
                    }
                  }
                }}
              >
                {/* Floating Lab Badge */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
                    exit: { opacity: 0, y: -10 }
                  }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] font-bold tracking-wider text-cyan-400 uppercase backdrop-blur-md mb-6"
                >
                  {slides[current].icon}
                  <span>{slides[current].badge}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                </motion.div>

                {/* Staggered Heading Mask Reveal */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none mb-6">
                  <span className="block overflow-hidden py-1">
                    <motion.span
                      variants={{
                        hidden: { y: "100%", opacity: 0 },
                        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                        exit: { y: "-100%", opacity: 0 }
                      }}
                      className="bg-gradient-to-r from-white via-slate-100 to-slate-350 bg-clip-text text-transparent block"
                    >
                      {slides[current].title.split(" ").slice(0, -2).join(" ")}
                    </motion.span>
                  </span>
                  
                  <span className="block overflow-hidden py-1">
                    <motion.span
                      variants={{
                        hidden: { y: "100%", opacity: 0 },
                        visible: { y: 0, opacity: 1, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
                        exit: { y: "-100%", opacity: 0 }
                      }}
                      className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent block mt-1"
                    >
                      {slides[current].title.split(" ").slice(-2).join(" ")}
                    </motion.span>
                  </span>
                </h1>

                {/* Description Text */}
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    exit: { opacity: 0, y: -10 }
                  }}
                  className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-10 font-normal"
                >
                  {slides[current].subtitle}
                </motion.p>

                {/* Staggered CTA Action Buttons */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    exit: { opacity: 0, y: -10 }
                  }}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
                >
                  <a
                    href="#booking"
                    onClick={(e) => handleScrollTo(e, 'booking')}
                    className="hover-shine relative overflow-hidden group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-white font-bold shadow-xl shadow-cyan-500/10 hover:shadow-cyan-400/35 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Get a Free Diagnosis
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </span>
                  </a>

                  <a
                    href="#services"
                    onClick={(e) => handleScrollTo(e, 'services')}
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300 font-semibold hover:bg-slate-850 hover:text-white hover:border-slate-750 transition-all duration-300 backdrop-blur-md"
                  >
                    Explore Labs
                  </a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Mini Hardware Status Diagnostics Panel */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: 20 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 backdrop-blur-lg shadow-xl shadow-black/20 relative overflow-hidden"
              >
                {/* Micro tech indicators */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-full pointer-events-none" />
                
                <div className="flex items-center justify-between border-b border-slate-850 pb-4 mb-6">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Diagnostic Report</span>
                  <div className="flex items-center gap-1.5 text-[9px] font-bold text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    SYSTEM ON-LINE
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Target Class</span>
                    <span className="text-sm font-bold text-white tracking-wide">{slides[current].highlight}</span>
                  </div>

                  <div className="h-[1px] bg-slate-850" />

                  <div>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block mb-2">Calibration Spec Values</span>
                    <ul className="space-y-2">
                      {slides[current].specs.map((spec, i) => (
                        <li key={i} className="flex items-center justify-between text-xs text-slate-300 font-mono">
                          <span className="text-slate-500">{spec.split(":")[0]}:</span>
                          <span className="text-cyan-400 font-bold">{spec.split(":")[1]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="h-[1px] bg-slate-850" />

                  <div className="flex items-center justify-between text-[9px] text-slate-500 font-bold uppercase tracking-wider">
                    <span>Cleanroom Class</span>
                    <span className="text-white font-mono">ISO CLASS 5 (100)</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-10 right-4 sm:right-8 lg:right-12 flex items-center gap-3 z-30">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center backdrop-blur-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center backdrop-blur-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Indicators / Loading progress lines */}
        <div className="absolute bottom-10 left-4 sm:left-8 lg:left-12 flex items-center gap-4 z-30">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              className="group flex flex-col gap-1 items-start text-left focus:outline-none"
            >
              <div className="w-12 sm:w-20 h-1 bg-slate-800/80 rounded-full overflow-hidden relative">
                {current === index && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 7, ease: 'linear' }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                  />
                )}
              </div>
              <span
                className={`hidden sm:inline text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                  current === index ? 'text-cyan-400 font-bold' : 'text-slate-500 group-hover:text-slate-350'
                }`}
              >
                0{index + 1}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Decorative vertical scanner lines */}
      <div className="absolute top-0 left-4 w-[1px] h-full bg-gradient-to-b from-cyan-500/10 via-transparent to-emerald-500/10 pointer-events-none hidden lg:block" />
      <div className="absolute top-0 right-4 w-[1px] h-full bg-gradient-to-b from-cyan-500/10 via-transparent to-emerald-500/10 pointer-events-none hidden lg:block" />
    </section>
  );
}
