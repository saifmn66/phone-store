import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Cpu, ShieldCheck, Flame, Wrench } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Fast & Reliable Phone Repairs",
    subtitle: "Cracked screen or leaking pixels? We replace OLED & LCD assemblies in under 20 minutes using factory-grade alignment machinery.",
    highlight: "Screen & Glass",
    badge: "Clinical Restoration",
    image: "https://images.unsplash.com/photo-1601524909162-be87252be298?q=80&w=1920&auto=format&fit=crop",
    icon: <Cpu className="w-4 h-4 text-cyan-400" />,
    accentColor: "cyan",
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
    accentColor: "emerald",
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
    accentColor: "indigo",
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
    accentColor: "pink",
    specs: ["Casing Finish: Matte Polish", "Body Alignment: Laser Tested", "Recyclability Rate: 92%"]
  }
];

// 5 cols × 4 rows = 20 big squares
const COLS = 5;
const ROWS = 4;
const TOTAL = COLS * ROWS;

// Accent colors per slide
const accentRGBA = {
  cyan:    { fill: "rgba(34,211,238,0.18)",  border: "rgba(34,211,238,0.65)",  dot: "bg-cyan-400 shadow-cyan-400"    },
  emerald: { fill: "rgba(16,185,129,0.16)",  border: "rgba(16,185,129,0.58)",  dot: "bg-emerald-400 shadow-emerald-400" },
  indigo:  { fill: "rgba(99,102,241,0.17)",  border: "rgba(99,102,241,0.60)",  dot: "bg-indigo-400 shadow-indigo-400"  },
  pink:    { fill: "rgba(236,72,153,0.15)",  border: "rgba(236,72,153,0.55)",  dot: "bg-pink-400 shadow-pink-400"      },
};

// Special HUD labels for certain cells
const hudLabels = {
  1:  { text: "SYS:OK",   color: "text-cyan-400/60"    },
  7:  { text: "ESD:ACT",  color: "text-emerald-400/60" },
  13: { text: "LSR:LOCK", color: "text-indigo-400/60"  },
  17: { text: "TR:TONE",  color: "text-pink-400/60"    },
};

// Corner-bracket cells
const cornerCells = new Set([0, 4, 15, 19]);

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(handleNext, 7000);
    return () => clearInterval(timer);
  }, [current]);

  const handleNext = () => { setDirection(1);  setCurrent(p => (p + 1) % slides.length); };
  const handlePrev = () => { setDirection(-1); setCurrent(p => (p - 1 + slides.length) % slides.length); };
  const scrollTo   = (e, id) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };

  const slide  = slides[current];
  const accent = accentRGBA[slide.accentColor];

  // Diagonal ripple delay per cell: row + col
  const rippleDelay = (i) => ((Math.floor(i / COLS) + (i % COLS)) * 0.06);

  return (
    <section className="relative w-full h-screen bg-slate-950 overflow-hidden flex items-center justify-center">

      {/* ─── Background Image (cross-fade + Ken Burns) ─── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <motion.div
              initial={{ scale: 1.04 }}
              animate={{ scale: 1.10 }}
              transition={{ duration: 7, ease: "linear" }}
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ─── Scanline Overlay ─── */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(0,0,0,0.08)_3px,rgba(0,0,0,0.08)_4px)]" />

      {/* ─── Laser Sweep on slide change ─── */}
      <AnimatePresence>
        <motion.div
          key={`laser-${current}`}
          className="absolute left-0 right-0 h-[3px] z-30 pointer-events-none"
          style={{ background: `linear-gradient(to right, transparent, ${slide.accentColor === 'cyan' ? '#22d3ee' : slide.accentColor === 'emerald' ? '#10b981' : slide.accentColor === 'indigo' ? '#6366f1' : '#ec4899'}, transparent)` }}
          initial={{ top: "0%", opacity: 0, boxShadow: "none" }}
          animate={{
            top: ["0%", "100%"],
            opacity: [0, 1, 1, 0],
            boxShadow: [
              "0 0 0px rgba(34,211,238,0)",
              "0 0 24px rgba(34,211,238,0.9), 0 0 60px rgba(34,211,238,0.4)",
              "0 0 24px rgba(34,211,238,0.9), 0 0 60px rgba(34,211,238,0.4)",
              "0 0 0px rgba(34,211,238,0)",
            ]
          }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* ─── BIG Cyber Glass Grid ─── */}
      <div
        className="absolute inset-0 z-20 pointer-events-none select-none"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gridTemplateRows:    `repeat(${ROWS}, 1fr)`,
          maskImage: "radial-gradient(ellipse 80% 75% at 50% 50%, black 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 75% at 50% 50%, black 60%, transparent 100%)",
        }}
      >
        {Array.from({ length: TOTAL }).map((_, i) => {
          const row = Math.floor(i / COLS);
          const col = i % COLS;
          const hasCorner  = cornerCells.has(i);
          const hasDot     = i % 4 === 0;
          const hudLabel   = hudLabels[i];

          return (
            <motion.div
              key={`${current}-${i}`}
              className="relative border border-slate-800/50 backdrop-blur-[2px] overflow-hidden flex items-center justify-center"
              initial={{ backgroundColor: "rgba(15,23,42,0.05)", borderColor: "rgba(30,41,59,0.4)" }}
              animate={{
                backgroundColor: [
                  "rgba(15,23,42,0.05)",
                  accent.fill,
                  "rgba(15,23,42,0.05)",
                ],
                borderColor: [
                  "rgba(30,41,59,0.4)",
                  accent.border,
                  "rgba(30,41,59,0.4)",
                ],
              }}
              transition={{
                duration: 1.4,
                delay: rippleDelay(i),
                ease: "easeOut",
                times: [0, 0.5, 1],
              }}
            >
              {/* Inner glow flash on slide change */}
              <motion.div
                key={`glow-${current}-${i}`}
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.6, 0] }}
                transition={{
                  duration: 1.1,
                  delay: rippleDelay(i),
                  ease: "easeOut",
                }}
                style={{ background: `radial-gradient(circle at center, ${accent.fill.replace(/[\d.]+\)$/, '0.35)')} 0%, transparent 70%)` }}
              />

              {/* Looping pulsing dot (every 4th cell) */}
              {hasDot && (
                <motion.div
                  animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.4, 0.8] }}
                  transition={{ duration: 3 + (i % 4) * 0.5, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute w-2 h-2 rounded-full shadow-lg ${accent.dot}`}
                />
              )}

              {/* Crosshair brackets on corner cells */}
              {hasCorner && (
                <>
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400/50" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400/50" />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyan-400/50" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-400/50" />
                </>
              )}

              {/* HUD status label */}
              {hudLabel && (
                <span className={`absolute bottom-2 right-2 text-[8px] font-mono font-bold uppercase tracking-widest ${hudLabel.color}`}>
                  {hudLabel.text}
                </span>
              )}

              {/* Row / Col coordinate markers on left-most and top-most cells */}
              {col === 0 && (
                <span className="absolute top-2 left-2 text-[7px] font-mono text-slate-700 select-none">
                  R{row}
                </span>
              )}
              {row === 0 && (
                <span className="absolute top-2 right-2 text-[7px] font-mono text-slate-700 select-none">
                  C{col}
                </span>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* ─── Main Content ─── */}
      <div className="relative z-40 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Text */}
          <div className="lg:col-span-7 xl:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden:   {},
                  visible:  { transition: { staggerChildren: 0.09 } },
                  exit:     { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                }}
              >
                {/* Badge */}
                <motion.div
                  variants={{
                    hidden:   { opacity: 0, y: 14 },
                    visible:  { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 14 } },
                    exit:     { opacity: 0, y: -10 },
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] font-bold tracking-widest text-cyan-400 uppercase backdrop-blur-md mb-7"
                >
                  {slide.icon}
                  <span>{slide.badge}</span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                </motion.div>

                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-none mb-6">
                  <span className="block overflow-hidden pb-2">
                    <motion.span
                      variants={{
                        hidden:  { y: "110%", opacity: 0 },
                        visible: { y: 0, opacity: 1, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
                        exit:    { y: "-110%", opacity: 0, transition: { duration: 0.3 } },
                      }}
                      className="block bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent"
                    >
                      {slide.title.split(" ").slice(0, -2).join(" ")}
                    </motion.span>
                  </span>
                  <span className="block overflow-hidden pb-2">
                    <motion.span
                      variants={{
                        hidden:  { y: "110%", opacity: 0 },
                        visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
                        exit:    { y: "-110%", opacity: 0, transition: { duration: 0.3 } },
                      }}
                      className="block bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent"
                    >
                      {slide.title.split(" ").slice(-2).join(" ")}
                    </motion.span>
                  </span>
                </h1>

                {/* Subtitle */}
                <motion.p
                  variants={{
                    hidden:  { opacity: 0, y: 18 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
                    exit:    { opacity: 0, y: -10 },
                  }}
                  className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-10 font-normal"
                >
                  {slide.subtitle}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  variants={{
                    hidden:  { opacity: 0, y: 18 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    exit:    { opacity: 0, y: -10 },
                  }}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
                >
                  <a
                    href="#booking"
                    onClick={(e) => scrollTo(e, 'booking')}
                    className="hover-shine relative overflow-hidden group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-white font-bold shadow-xl shadow-cyan-500/20 hover:shadow-cyan-400/40 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center gap-2 text-base">
                      Get a Free Diagnosis
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </span>
                  </a>
                  <a
                    href="#services"
                    onClick={(e) => scrollTo(e, 'services')}
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-slate-900/70 border border-slate-700 text-slate-300 font-semibold hover:bg-slate-800 hover:text-white hover:border-slate-600 transition-all duration-300 backdrop-blur-md text-base"
                  >
                    Explore Labs
                  </a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Diagnostic Panel */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.94, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.94, x: 20 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="bg-slate-900/50 border border-slate-700/60 rounded-3xl p-7 backdrop-blur-xl shadow-2xl shadow-black/30 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-full pointer-events-none" />

                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Diagnostic Report</span>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    SYSTEM ON-LINE
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Target Class</span>
                    <span className="text-sm font-bold text-white tracking-wide">{slide.highlight}</span>
                  </div>
                  <div className="h-px bg-slate-800" />
                  <div>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block mb-3">Calibration Spec Values</span>
                    <ul className="space-y-2.5">
                      {slide.specs.map((spec, i) => (
                        <li key={i} className="flex items-center justify-between text-xs font-mono">
                          <span className="text-slate-500">{spec.split(":")[0]}:</span>
                          <span className="text-cyan-400 font-bold">{spec.split(":")[1]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="h-px bg-slate-800" />
                  <div className="flex items-center justify-between text-[9px] text-slate-500 font-bold uppercase tracking-wider">
                    <span>Cleanroom Class</span>
                    <span className="text-white font-mono">ISO CLASS 5</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Prev / Next */}
        <div className="absolute bottom-10 right-4 sm:right-8 lg:right-12 flex items-center gap-3 z-50">
          {[handlePrev, handleNext].map((fn, idx) => (
            <button
              key={idx}
              onClick={fn}
              className="w-12 h-12 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center backdrop-blur-md"
            >
              {idx === 0 ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </button>
          ))}
        </div>

        {/* Progress indicators */}
        <div className="absolute bottom-10 left-4 sm:left-8 lg:left-12 flex items-center gap-5 z-50">
          {slides.map((s, index) => (
            <button
              key={s.id}
              onClick={() => { setDirection(index > current ? 1 : -1); setCurrent(index); }}
              className="group flex flex-col gap-1.5 items-start focus:outline-none"
            >
              <div className="w-14 sm:w-20 h-[3px] bg-slate-800 rounded-full overflow-hidden">
                {current === index && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 7, ease: "linear" }}
                    className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"
                  />
                )}
              </div>
              <span className={`hidden sm:inline text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${current === index ? 'text-cyan-400' : 'text-slate-600 group-hover:text-slate-400'}`}>
                0{index + 1}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Decorative side lines */}
      <div className="absolute top-0 left-6 w-px h-full bg-gradient-to-b from-cyan-500/20 via-transparent to-emerald-500/20 pointer-events-none hidden lg:block" />
      <div className="absolute top-0 right-6 w-px h-full bg-gradient-to-b from-cyan-500/20 via-transparent to-emerald-500/20 pointer-events-none hidden lg:block" />
    </section>
  );
}
