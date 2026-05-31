import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShieldCheck, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    device: "iPhone 15 Pro Max",
    repair: "OLED Screen Restoration",
    rating: 5,
    date: "1 day ago",
    comment: "My screen was completely shattered with green vertical lines after a bad fall. The team here fixed it in under 25 minutes. They calibrated TrueTone and replaced the water sealing gasket as well. Absolutely phenomenal service!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Marcus Vance",
    device: "Samsung Galaxy S24 Ultra",
    repair: "Liquid Damage Recovery",
    rating: 5,
    date: "4 days ago",
    comment: "Dropped my phone in a pool. It wouldn't turn on and another shop declared it dead. These guys took it in, put the motherboard in an ultrasonic cleaning bath, and replaced a corroded capacitors line. Got all my data back. LIFESAVERS!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Elena Rostova",
    device: "Google Pixel 8 Pro",
    repair: "Battery Recalibration",
    rating: 5,
    date: "1 week ago",
    comment: "My battery was bloating and draining in under 4 hours. They swapped it out with a high-capacity OEM-equivalent cell in 15 minutes flat. Thermal values are perfect now, and battery health reporting works perfectly in Android settings.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1: prev, 1: next

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    })
  };

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-slate-900/10 overflow-hidden border-t border-slate-900">
      {/* Decorative Lights */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[35rem] h-[35rem] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-0 w-[40rem] h-[40rem] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-4"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Reviews</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6"
          >
            What Our Customers <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Say About Us</span>
          </motion.h2>
        </div>

        {/* Carousel Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote Graphic Overlay */}
          <div className="absolute -top-10 -left-6 md:-left-12 text-slate-800/20 pointer-events-none -z-10">
            <Quote className="w-24 h-24 stroke-[4]" />
          </div>

          <div className="min-h-[300px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full bg-slate-900/30 border border-slate-800/80 rounded-3xl p-8 sm:p-12 backdrop-blur-md shadow-xl shadow-black/10 relative flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars & Date */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      {testimonials[current].date}
                    </span>
                  </div>

                  {/* Comment */}
                  <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal mb-8 italic">
                    "{testimonials[current].comment}"
                  </p>
                </div>

                {/* Profile Detail */}
                <div className="flex items-center justify-between border-t border-slate-800/50 pt-6 flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={testimonials[current].avatar}
                        alt={testimonials[current].name}
                        className="w-14 h-14 rounded-full border border-slate-850 object-cover"
                      />
                      <div className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 rounded-full border-2 border-slate-950 flex items-center justify-center">
                        <ShieldCheck className="w-2.5 h-2.5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base">{testimonials[current].name}</h4>
                      <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
                        Verified Client
                      </span>
                    </div>
                  </div>

                  {/* Device Tag */}
                  <div className="px-4 py-2 rounded-xl bg-slate-950/80 border border-slate-850 text-xs font-semibold text-cyan-400">
                    {testimonials[current].device} • <span className="text-slate-400 font-normal">{testimonials[current].repair}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Slider Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    current === index
                      ? 'w-8 bg-gradient-to-r from-cyan-400 to-emerald-400'
                      : 'w-2.5 bg-slate-800 hover:bg-slate-750'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center backdrop-blur-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
