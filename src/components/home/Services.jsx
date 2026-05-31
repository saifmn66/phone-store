import { motion } from 'framer-motion';
import { Smartphone, BatteryCharging, Droplet, Cpu, ShieldCheck, ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Screen Restoration",
    icon: <Smartphone className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />,
    description: "OLED & LCD replacements with pixel-perfect calibration. Solves ghost touch, bleeding pixels, and glass fractures.",
    features: ["OEM-Grade Displays", "TrueTone & HDR Calibration", "Scratch-Resistant Seal"],
    accent: "from-cyan-500/20 to-blue-500/20",
    borderHover: "group-hover:border-cyan-500/40",
    shadowColor: "shadow-cyan-500/5"
  },
  {
    id: 2,
    title: "Battery & Power Calibration",
    icon: <BatteryCharging className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />,
    description: "Replace degrading batteries draining your productivity. We install zero-cycle units and test heat dissipation.",
    features: ["Zero-Cycle Cells", "Thermal Seal Gaskets", "Battery Health Sync"],
    accent: "from-emerald-500/20 to-teal-500/20",
    borderHover: "group-hover:border-emerald-500/40",
    shadowColor: "shadow-emerald-500/5"
  },
  {
    id: 3,
    title: "Liquid Recovery Service",
    icon: <Droplet className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" />,
    description: "Liquid exposure recovery using deep-cleaning ultrasonic tanks. Eliminates corrosion from sensitive trace lines.",
    features: ["Motherboard Bathing", "Microscope Inspection", "Corrosion Prevention"],
    accent: "from-blue-500/20 to-indigo-500/20",
    borderHover: "group-hover:border-blue-500/40",
    shadowColor: "shadow-blue-500/5"
  },
  {
    id: 4,
    title: "Board-Level & Micro-Soldering",
    icon: <Cpu className="w-8 h-8 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />,
    description: "Resolve complex board issues, charging port shorts, audio IC errors, bootloops, and recover locked device files.",
    features: ["Micro-Soldering Repairs", "IC Chip Remap", "Secure Data Recovery"],
    accent: "from-indigo-500/20 to-purple-500/20",
    borderHover: "group-hover:border-indigo-500/40",
    shadowColor: "shadow-indigo-500/5"
  }
];

export default function Services() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[40rem] h-[40rem] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-4"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Professional Services</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6"
          >
            State-of-the-Art <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Repair Labs</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal"
          >
            We combine high-precision micro-soldering tools, certified diagnostic software, and premium replacement components to restore your device to original factory standards.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className={`group relative overflow-hidden rounded-3xl bg-slate-900/30 border border-slate-800/80 p-8 hover:bg-slate-900/60 transition-all duration-300 shadow-xl ${service.shadowColor} ${service.borderHover} hover:-translate-y-1.5`}
            >
              {/* Radial gradient background card flare */}
              <div className={`absolute -inset-px bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10`} />

              <div className="flex flex-col h-full justify-between gap-8 relative z-10">
                <div>
                  {/* Card Icon & Action link */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center shadow-inner group-hover:border-cyan-500/20 group-hover:shadow-cyan-500/5 transition-all duration-300">
                      {service.icon}
                    </div>
                    <a
                      href="#booking"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-all duration-300"
                    >
                      <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                    </a>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-cyan-400 transition-colors duration-200">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Features list */}
                <div className="border-t border-slate-800/50 pt-6">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
