import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Wrench, Sparkles } from 'lucide-react';

const steps = [
  {
    id: 1,
    num: "01",
    title: "Digital Diagnosis",
    subtitle: "Precise Calibration",
    description: "We run a comprehensive 24-point hardware and software diagnostic test to pinpoint the exact failure points before any physical intervention.",
    icon: <Cpu className="w-6 h-6 text-cyan-400" />,
    color: "from-cyan-500/20 to-blue-500/20",
    glow: "bg-cyan-500/20"
  },
  {
    id: 2,
    num: "02",
    title: "Precision Repair",
    subtitle: "Dust-Free Cleanroom",
    description: "Certified technicians perform repairs in ESD-safe workspaces. We use high-precision tools and replace worn components with OEM-grade parts.",
    icon: <Wrench className="w-6 h-6 text-emerald-400" />,
    color: "from-emerald-500/20 to-teal-500/20",
    glow: "bg-emerald-500/20"
  },
  {
    id: 3,
    num: "03",
    title: "Quality Calibration",
    subtitle: "Lifetime Performance",
    description: "We pressure-test water resistance seals, test battery thermal values, and calibrate screens before dispatching your phone with a lifetime warranty.",
    icon: <Sparkles className="w-6 h-6 text-indigo-400" />,
    color: "from-indigo-500/20 to-purple-500/20",
    glow: "bg-indigo-500/20"
  }
];

export default function HowItWorks() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 bg-slate-900/20 overflow-hidden border-t border-slate-900">
      {/* Background visual helpers */}
      <div className="absolute top-0 right-1/4 w-[35rem] h-[35rem] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-4"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Workflow Integrity</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6"
          >
            Engineered to <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Perfection</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal"
          >
            Our standardized repair workflow ensures absolute data security, physical component integrity, and rapid delivery times.
          </motion.p>
        </div>

        {/* Steps container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative"
        >
          {/* Horizontal connection line for desktop */}
          <div className="hidden lg:block absolute top-[68px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-cyan-500/25 via-emerald-500/25 to-indigo-500/25 -z-10" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="flex flex-col items-center text-center group"
            >
              {/* Step indicator circle */}
              <div className="relative mb-8">
                {/* Outer pulsing ring */}
                <div className={`absolute -inset-2.5 rounded-full ${step.glow} opacity-40 blur-md group-hover:opacity-80 group-hover:scale-110 transition-all duration-300 -z-10`} />
                
                {/* Middle border ring */}
                <div className="w-20 h-20 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center relative group-hover:border-cyan-500/30 transition-all duration-300">
                  {step.icon}
                  {/* Step index number badge */}
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-300 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-emerald-500 group-hover:text-white transition-all duration-300">
                    {step.num}
                  </span>
                </div>
              </div>

              {/* Title & subtitle */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-cyan-400 transition-colors duration-200">
                {step.title}
              </h3>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                {step.subtitle}
              </span>

              {/* Glassmorphic Description Card */}
              <div className="rounded-2xl bg-slate-900/20 border border-slate-800/60 p-6 group-hover:bg-slate-900/40 group-hover:border-slate-800 transition-all duration-300 max-w-sm">
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {/* Connecting arrow for mobile (if not last step) */}
              {idx < steps.length - 1 && (
                <div className="lg:hidden mt-8 text-slate-800 animate-bounce">
                  ↓
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
